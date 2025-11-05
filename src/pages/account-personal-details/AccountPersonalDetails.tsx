import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import ProfileCard, {
  ProfileData,
} from "src/components/profile-card/ProfileCard";
import { useState } from "react";
import { FormControl, TextField } from "@mui/material";

function AccountDetails() {
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const maxLength = 368;

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    if (value.length <= maxLength) {
      setInputValue(value);
    }
  };

  const handleClick = () => {
    //  navigate("/");
  };

  const [profileData, setProfileData] = useState<ProfileData>({
    id: "p001",
    firstName: "Mattia",
    lastName: "Binotta",
    profileImage: "",
  });

  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section typ-news">
              <div className="sec-head">
                <h1 className={`cm-sec-title typ-big ${styles.title}`}>
                  Personal Details
                </h1>
              </div>
              <div className="sec-cont">
                <div className="bs-confirmation typ-edit">
                  <div className="confirm-card">
                    <div className="head-wrap">
                      <strong className="card-title">Contact Details</strong>
                    </div>
                    <div className="cont-wrap">
                      <ul className="label-value-list">
                        <li className="label-value-item">
                          <div className="cont">
                            <label>Phone Number</label>
                            <span className="value">+39 - 800123456</span>
                          </div>
                          <Button btnStyle="text">edit</Button>
                        </li>
                        <li className="label-value-item">
                          <div className="cont">
                            <label>Email</label>
                            <span className="value">leo456@gmail.com</span>
                          </div>
                          <Button btnStyle="text">edit</Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <BottomSheet
        primaryBtnText="Save"
        title="About"
        subText="Add a brief description for client visibility upon request approval."
        size="small"
        open={openEditDrawer}
        setOpen={setOpenEditDrawer}
        btnOnClick={handleClick}
        btnDisabled={inputValue.trim().length === 0}
      >
        <div className={`${styles.editDrawer}`}>
          <div className="bs-section typ-news">
            <div className="bs-form">
              <form>
                <div className="form-body">
                  <div className="form-group">
                    <FormControl variant="standard">
                      <TextField
                        id="description"
                        label="Description"
                        multiline
                        maxRows={6}
                        placeholder="Add a brief description about yourself."
                        name="Description"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                    <p className={`${styles.countText}`}>
                      {inputValue.length} / {maxLength} Characters
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}

export default AccountDetails;
