import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import AddLr, { LrFieldData } from "src/components/add-lr/AddLr";

function LegalRepresentativeDetail() {
  const LrCardData: LrFieldData[] = [
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
          <h1 className={`${styles.pgTitle}`}>
            Legal Representative’s Details
          </h1>
        </div>
        <div className="bs-form">
          <form>
            <div className="form-body">
              <div className="form-section typ-card">
                <h3 className="frm-sec-title">Enter Details</h3>
                <div className="form-group">
                  <div className="bs-select">
                    <FormControl fullWidth>
                      <InputLabel className="input-label">
                        Number of Legal Representatives
                      </InputLabel>
                      <Select
                        id="Lr"
                        // value={age}
                        label="Number of Legal Representatives"
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
                {LrCardData.map((item, index) => {
                  return (
                    <div key={index} className={`${styles.cardItem}`}>
                      <AddLr {...item} cardIndex={index + 1}></AddLr>
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

export default LegalRepresentativeDetail;
