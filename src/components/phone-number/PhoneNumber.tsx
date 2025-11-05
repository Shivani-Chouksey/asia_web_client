import { ReactNode, useState } from "react";
import { FormControl, TextField } from "@mui/material";
import styles from "./style.module.scss";
import BottomSheet from "../bottom-sheet/BottomSheet";

export interface Values {
  phn: number | string;
}

export interface PhoneValidation {
  id?: string;
  value?: number | string;
  onChange?: any;
  onBlur?: any;
  error?: boolean;
  helperText?: ReactNode;
}

function PhoneNumber(props: PhoneValidation) {
  const [openCountryDrawer, setOpenCountryDrawer] = useState(false);
  const [countryCode, setCountryCode] = useState({
    id: "c002",
    name: "Iraq",
    countryCode: "+77",
    flagLogo: "/assets/flags/iraq.png",
  });
  const [bsBtnState, setBSbtnState] = useState(true);
  const countryList = [
    {
      id: "c001",
      name: "Iran",
      countryCode: "+96",
      flagLogo: "/assets/flags/iran.png",
    },
    {
      id: "c002",
      name: "Iraq",
      countryCode: "+77",
      flagLogo: "/assets/flags/iraq.png",
    },
    {
      id: "c003",
      name: "Ireland",
      countryCode: "+33",
      flagLogo: "/assets/flags/ireland.png",
    },
  ];
  const handleRadio = (e: any, item: any) => {
    setCountryCode(item);
    setBSbtnState(false);
  };
  return (
    <>
      <div className={`${styles.phoneWrap}`}>
        <div className={`${styles.countryWrap}`}>
          <label htmlFor="">CN</label>
          <div
            className={`${styles.fieldWrap}`}
            onClick={() => setOpenCountryDrawer(true)}
          >
            <span className={`${styles.countryFlag}`}>
              <img src={countryCode.flagLogo} alt="" />
            </span>
            <input type="text" readOnly value={countryCode.countryCode} />
            <span className={`${styles.arrowIcon}`}></span>
          </div>
        </div>
        <FormControl variant="standard">
          <TextField
            type="number"
            label="Phone Number"
            id={props.id}
            placeholder="Phone Number"
            name="phn"
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            error={props.error}
            helperText={props.helperText}
          />
        </FormControl>
      </div>
      <BottomSheet
        open={openCountryDrawer}
        primaryBtnText="Confirm"
        btnDisabled={bsBtnState}
        title="Select Country Code"
        subText="Choose your country’s dialing code."
        size="large"
        setOpen={setOpenCountryDrawer}
        btnOnClick={() => setOpenCountryDrawer(false)}
      >
        <div className="bs-form">
          <div className={`${styles.countryDrawer}`}>
            {/* <form action=""> */}
            <div className="search-wrap">
              <span className="search-icon"></span>
              <input type="text" placeholder="Search" />
              <button className="close-btn">
                <i></i>
              </button>
            </div>
            <div className={`${styles.selectionWrap}`}>
              <ul className={`${styles.countryList}`}>
                {countryList.map((item, index) => {
                  return (
                    <li key={index} className={`${styles.countryItem}`}>
                      <input
                        onChange={(e) => handleRadio(e, item)}
                        type="radio"
                        name="country-list"
                        id={item.id}
                        checked={item.id === countryCode.id}
                      />
                      <label htmlFor={item.id}>
                        <span className={`${styles.flag}`}>
                          <img src={item.flagLogo} alt="" />
                        </span>
                        <span className={`${styles.country}`}>{item.name}</span>
                        <span className={`${styles.countryCode}`}>
                          {item.countryCode}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* </form> */}
          </div>
        </div>
      </BottomSheet>
    </>
  );
}

export default PhoneNumber;
