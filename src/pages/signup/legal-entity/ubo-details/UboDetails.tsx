import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import AddUbo, { UboFieldData } from "src/components/add-ubo/AddUbo";

function UboDetails() {
  const handleChange = (e: any) => {
    // console.log(e);
  };
  const UboCardData: UboFieldData[] = [
    {
      cardId: "001",
      isFilled: true,
    },
    {
      cardId: "002",
      isFilled: false,
    },
  ];
  return (
    <div className="lyt-main typ-details-form">
      <div className={`${styles.section}`}>
        <div className={`${styles.sectionHead}`}>
          <h1 className={`${styles.pgTitle}`}>UBO’s Details </h1>
        </div>
        <div className="bs-form">
          <form>
            <div className="form-body">
              <div className="form-section">
                <h3 className="frm-sec-title">Enter Details</h3>
                <div className="form-group">
                  <div className="bs-select">
                    <FormControl fullWidth>
                      <InputLabel className="input-label">
                        Number of UBOs
                      </InputLabel>
                      <Select
                        id="ubo"
                        // value={age}
                        label="Number of UBOs"
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className={`${styles.cardList}`}>
                {UboCardData.map((item, index) => {
                  return (
                    <div key={index} className={`${styles.cardItem}`}>
                      <AddUbo {...item} cardIndex={index + 1}></AddUbo>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="form-foot">
              <Button btnStyle="primary" type="submit" disabled>
                Proceed
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UboDetails;
