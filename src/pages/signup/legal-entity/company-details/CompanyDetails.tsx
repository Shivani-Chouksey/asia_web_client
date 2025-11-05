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
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import UploadCard, {
  UploadCardProps,
} from "src/components/upload-card/UploadCard";

function CompanyDetails() {
  const docUploadField: UploadCardProps[] = [
    {
      cardId: "01",
      uploadType: "Document",
      cardTitle: "Trade Register",
      uploadText: "Upload Document",
      helpText: "This is a dummy tooltip",
      popupTitle: "Trade Register",
      popupDesc: "Upload Trade Register",
    },
    {
      cardId: "02",
      uploadType: "Document",
      cardTitle: "Authorized Signatories of the company",
      uploadText: "Upload Document",
      helpText: "This is a dummy tooltip",
      popupTitle: "Authorized Signatories",
      popupDesc: "Upload Authorized Signatories",
    },
    {
      cardId: "03",
      uploadType: "Document",
      cardTitle: "Articles of Association",
      uploadText: "Upload Document",
      helpText: "This is a dummy tooltip",
      popupTitle: "Articles of Association",
      popupDesc: "Upload Articles of Association",
    },
    // {
    //   cardId: "04",
    //   uploadType: "Document",
    //   cardTitle: "Incorporation Act",
    //   uploadText: "Upload Document",
    //   helpText: "This is a dummy tooltip",
    //   popupTitle: "Incorporation Act",
    //   popupDesc: "Essential for company’s background check and verification.",
    // },
    {
      cardId: "05",
      uploadType: "Document",
      cardTitle: "Financial Statements",
      uploadText: "Upload Document",
      helpText: "This is a dummy tooltip",
      popupTitle: "Financial Statements",
      popupDesc: "Upload Last 2 year’s Financial Statements ",
    },
  ];
  return (
    <div className="lyt-main typ-details-form">
      <div className={`${styles.section}`}>
        <div className={`${styles.sectionHead}`}>
          <h1 className={`${styles.pgTitle}`}>Company Details</h1>
        </div>
        <div className="bs-form">
          <form>
            <div className="form-body">
              <div className="form-section">
                <h3 className="frm-sec-title">Enter Details</h3>
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="companyname"
                      placeholder="Company Name"
                      label="Company Name"
                    />
                  </FormControl>
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
                      <DatePicker
                        format="MM-DD-YYYY"
                        label="Company’s Incorporation Date"
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="taxid"
                      placeholder="Tax Identification Number"
                      label="Tax Identification Number"
                    />
                  </FormControl>
                </div>
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
                        // onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="form-group">
                  <div className="bs-select">
                    <FormControl fullWidth>
                      <InputLabel className="input-label">
                        Number of Legal Representatives
                      </InputLabel>
                      <Select
                        id="legal-representative"
                        // value={age}
                        label="Number of Legal Representatives"
                        // onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="form-section">
                <h3 className="frm-sec-title">Upload Documents</h3>
                {docUploadField.map((item, index) => {
                  return (
                    <UploadCard
                      key={index}
                      {...item}
                      uploaded={index === 1}
                    ></UploadCard>
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

export default CompanyDetails;
