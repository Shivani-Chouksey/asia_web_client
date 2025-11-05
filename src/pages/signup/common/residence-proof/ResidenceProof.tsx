import Button from "src/components/common/button/Button";
import styles from "./style.module.scss";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DocumentUpload from "src/components/common/document-upload/DocumentUpload";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../DetailsForm";
import { useContext } from "react";

function ResidenceProof({ currentStep }: { currentStep: number }) {
  const { step, setStep } = useContext(StepContext)!;
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/signup/confirm-details");
  };
  setStep(currentStep);
  return (
    <div className="lyt-main typ-details-form">
      <div className={`${styles.section}`}>
        <div className={`${styles.sectionHead}`}>
          <h1 className={`${styles.pgTitle}`}>Residence Proof</h1>
        </div>
        <div className="bs-form">
          <form onSubmit={submitHandler}>
            <div className="form-body">
              <div className="form-section">
                <h3 className="frm-sec-title">Add Address</h3>
                <div className="form-group">
                  <div className="bs-select">
                    <FormControl fullWidth>
                      <InputLabel className="input-label">Country</InputLabel>
                      <Select id="demo-simple-select" label="country">
                        <MenuItem value={"india"}>India</MenuItem>
                        <MenuItem value={"italy"}>Italy</MenuItem>
                        <MenuItem value={"usa"}>USA</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="zip"
                      label="Zip Code"
                      placeholder="Zip Code"
                    />
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="province"
                      placeholder="Province"
                      label="Province"
                    />
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="region"
                      placeholder="Region"
                      label="Region"
                    />
                  </FormControl>
                </div>
                <div className="form-group">
                  <div className="bs-select">
                    <FormControl fullWidth>
                      <InputLabel className="input-label">City</InputLabel>
                      <Select id="demo-simple-select" label="city">
                        <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"milan"}>Milan</MenuItem>
                        <MenuItem value={"washington"}>Washington</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="street"
                      label="Street/Locality/Area"
                      placeholder="Street/Locality/Area"
                    />
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="housenum"
                      placeholder="House Number"
                      label="House Number"
                    />
                  </FormControl>
                </div>
              </div>
              <div className="form-section">
                <h3 className="frm-sec-title">Upload Address Proof</h3>
                <div className="form-group">
                  <div className="bs-select">
                    <FormControl fullWidth>
                      <InputLabel className="input-label">
                        Choose Document
                      </InputLabel>
                      <Select
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="form-group">
                  <div className="bs-datepicker">
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      localeText={{
                        okButtonLabel: "Done",
                        cancelButtonLabel: "Close",
                      }}
                    >
                      <DatePicker format="MM-DD-YYYY" label="Issuance Date" />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
              <div className="form-section">
                <h3 className="frm-sec-title">Upload Proof</h3>
                <div className="form-group">
                  <DocumentUpload></DocumentUpload>
                </div>
              </div>
            </div>
            <div className="form-foot">
              <Button btnStyle="primary" type="submit">
                Proceed
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResidenceProof;
