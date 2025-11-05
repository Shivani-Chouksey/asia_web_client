import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import PhoneNumber from "src/components/phone-number/PhoneNumber";

function ContactDetails() {
  return (
    <div className="lyt-main typ-details-form">
      <div className={`${styles.section}`}>
        <div className={`${styles.sectionHead}`}>
          <h1 className={`${styles.pgTitle}`}>Point of Contact’s Details</h1>
        </div>
        <div className="bs-form">
          <form>
            <div className="form-body">
              <div className="form-section">
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="fname"
                      label="First Name"
                      placeholder="First Name"
                    />
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="lname"
                      label="Last Name"
                      placeholder="Last Name"
                    />
                  </FormControl>
                </div>
                <div className="form-group">
                  <TextField
                    label="Email ID"
                    placeholder="Email ID"
                  ></TextField>
                </div>
                <div className="form-group">
                  <div className="bs-select">
                    <FormControl fullWidth>
                      <InputLabel className="input-label">
                        Country of Residence
                      </InputLabel>
                      <Select
                        id="country"
                        // value={india}
                        label="Country of Residence"
                        // onChange={handleChange}
                      >
                        <MenuItem value={"india"}>India</MenuItem>
                        <MenuItem value={"italy"}>Italy</MenuItem>
                        <MenuItem value={"usa"}>USA</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="form-group typ-phone">
                  <PhoneNumber></PhoneNumber>
                </div>
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

export default ContactDetails;
