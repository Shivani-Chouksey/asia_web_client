import { useState } from "react";
import Button from "../common/button/Button";
import styles from "./style.module.scss";
import BottomSheet from "../bottom-sheet/BottomSheet";
import DocumentUpload from "../common/document-upload/DocumentUpload";
import RadioGroupField, {
  RadioField,
} from "src/components/common/radio-group/RadioGroupField";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { useFormik } from "formik";
// import * as yup from "yup";

export interface UploadCardProps {
  cardId: string;
  uploadType: "Document" | "Address" | "Identity Proof";
  uploadText: string;
  cardTitle?: string;
  helpText?: string;
  popupTitle: string;
  popupDesc: string;
}

function UploadCard(props: UploadCardProps & { uploaded: boolean }) {
  const [docType, setDocType] = useState("passport");
  // const validationSchema = yup.object({
  //   ...(docType === "passport" && {
  //     passport: yup.string().required("Passport is required"),
  //     expiryDatePassport: yup
  //       .date()
  //       .required("Passport Expiry date is required"),
  //   }),
  //   ...(docType === "identity card" && {
  //     idNum: yup.string().required("ID number is required"),
  //     expiryDateIDProof: yup
  //       .date()
  //       .required("ID Proof Expiry date is required"),
  //   }),
  // });
  const [openUploadDrawer, setOpenUploadDrawer] = useState(false);
  // const formik = useFormik({
  //   validateOnMount: true,
  //   initialValues: {
  //     passport: "",
  //     expiryDatePassport: null,
  //     // expiryDateIDProof: "",
  //     idNum: "",
  //   },
  //   validationSchema: validationSchema,
  //   // onSubmit: (values) => {
  //   //   navigate("/signup/details-formlegal-representative-details");
  //   // },
  // });
  const docTypeRadio: RadioField[] = [
    {
      value: "passport",
      label: "Passport",
    },
    {
      value: "identity card",
      label: "Identity Card",
    },
  ];
  const identityDocChange = (e: any) => {
    if (e.target.value === "passport") {
      setDocType("passport");
    }
    if (e.target.value === "identity card") {
      setDocType("identity card");
    }
  };
  return (
    <>
      <div className="upload-group">
        {props.cardTitle ? (
          <span className="upload-card-title">
            {props.cardTitle}{" "}
            <Tooltip title={props.helpText} enterTouchDelay={0} arrow={true}>
              <i></i>
            </Tooltip>
          </span>
        ) : (
          ""
        )}
        <div className="upload-card">
          {props.uploaded ? (
            <div
              className={`uploaded-state ${
                props.uploadType === "Address" ? "typ-address" : ""
              }`}
            >
              {props.uploadType === "Document" ? (
                <span className="upload-text">DOCUMENT UPLOADED</span>
              ) : props.uploadType === "Identity Proof" ? (
                <span className="upload-text">Passport</span>
              ) : props.uploadType === "Address" ? (
                <div className="label-value-wrap">
                  <div className="label-value">
                    <span className="label">Proof</span>
                    <p className="value">Gas Bill</p>
                  </div>
                  <div className="label-value">
                    <span className="label">Address</span>
                    <p className="value">
                      05, Via dell'Industria 5, near Pagani HQ, 41018, San
                      Cesario Sul Panaro
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
              <Button btnStyle="text" onClick={() => setOpenUploadDrawer(true)}>
                Edit
              </Button>
            </div>
          ) : (
            <button
              type="button"
              className="upload-btn"
              onClick={() => setOpenUploadDrawer(true)}
            >
              <span className="upload-text">{props.uploadText}</span>
              <i></i>
            </button>
          )}
        </div>
      </div>
      <BottomSheet
        size="large"
        open={openUploadDrawer}
        setOpen={setOpenUploadDrawer}
        title={props.popupTitle}
        subText={props.popupDesc}
        primaryBtnText="Confirm"
        btnDisabled={true}
      >
        {props.uploadType === "Document" ? (
          <div className={`${styles.uploadCont}`}>
            {/* <span className={`${styles.uploadTitle}`}>
              Upload {props.popupTitle}
            </span> */}
            <DocumentUpload></DocumentUpload>
          </div>
        ) : props.uploadType === "Identity Proof" ? (
          <div className={`${styles.formWrap}`}>
            <div className="bs-form typ-drawer">
              <form>
                <div className="form-body">
                  <div className="form-section">
                    <h3 className="frm-sec-title">Select Document type</h3>
                    <div className="form-group">
                      <RadioGroupField
                        name="document-type"
                        defaultValue={docTypeRadio[0].value}
                        radioField={docTypeRadio}
                        radioChange={identityDocChange}
                      ></RadioGroupField>
                    </div>
                  </div>
                  {docType === "passport" ? (
                    <>
                      <div className="form-section">
                        <h3 className="frm-sec-title">
                          Enter Passport Details
                        </h3>
                        <div className="form-group">
                          <FormControl variant="standard">
                            <TextField
                              id="passport"
                              label="Passport Number"
                              placeholder="Passport Number"
                              // value={formik.values.passport}
                              // onChange={formik.handleChange}
                              // onBlur={formik.handleBlur}
                              // error={
                              //   formik.touched.passport &&
                              //   Boolean(formik.errors.passport)
                              // }
                              // helperText={
                              //   formik.touched.passport &&
                              //   formik.errors.passport
                              // }
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
                                // className={
                                //   formik.errors.expiryDatePassport
                                //     ? "Mui-error"
                                //     : ""
                                // }
                                format="MM-DD-YYYY"
                                label="Expiry Date"
                                // value={formik.values.expiryDatePassport}
                                // onChange={(date) =>
                                //   formik.setFieldValue(
                                //     "expiryDatePassport",
                                //     date
                                //   )
                                // }
                                // onClose={() => {
                                //   formik.setFieldTouched(
                                //     "expiryDatePassport",
                                //     true
                                //   );
                                // }}
                              />
                              {/* {formik.touched.expiryDatePassport &&
                              formik.errors.expiryDatePassport ? (
                                <span className="MuiFormHelperText-root Mui-error">
                                  {formik.errors.expiryDatePassport}
                                </span>
                              ) : null} */}
                            </LocalizationProvider>
                          </div>
                        </div>
                      </div>
                      <div className="form-section">
                        <h3 className="frm-sec-title">Upload Passport</h3>
                        <div className="form-group">
                          <DocumentUpload></DocumentUpload>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {docType === "identity card" ? (
                    <>
                      <div className="form-section">
                        <h3 className="frm-sec-title">
                          Enter Identity Card Details
                        </h3>
                        <div className="form-group">
                          <FormControl variant="standard">
                            <TextField
                              id="idNum"
                              label="Identity Card Number"
                              placeholder="Identity Card Number"
                              // value={formik.values.idNum}
                              // onChange={formik.handleChange}
                              // onBlur={formik.handleBlur}
                              // error={
                              //   formik.touched.idNum &&
                              //   Boolean(formik.errors.idNum)
                              // }
                              // helperText={
                              //   formik.touched.idNum && formik.errors.idNum
                              // }
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="form-section">
                        <h3 className="frm-sec-title">Upload Identity Card</h3>
                        <div className="form-group">
                          <DocumentUpload></DocumentUpload>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {/* <div className="form-section">
                    <h3 className="frm-sec-title">Enter Passport Details</h3>
                    <div className="form-group">
                      <FormControl variant="standard">
                        <TextField
                          id="passport"
                          placeholder="Passport Number"
                          label="Passport Number"
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
                          <DatePicker format="MM-DD-YYYY" label="Expiry Date" />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                  <div className="form-section">
                    <h3 className="frm-sec-title">Upload Identity Card</h3>
                    <div className="form-group">
                      <DocumentUpload></DocumentUpload>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        ) : props.uploadType === "Address" ? (
          <div className={`${styles.formWrap}`}>
            <div className="bs-form typ-drawer">
              <form>
                <div className="form-body">
                  <div className="form-section">
                    <h3 className="frm-sec-title">Add Address</h3>
                    <div className="form-group">
                      <div className="bs-select">
                        <FormControl fullWidth>
                          <InputLabel className="input-label">
                            Country
                          </InputLabel>
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
                          <DatePicker
                            format="MM-DD-YYYY"
                            label="Issuance Date"
                          />
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
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </BottomSheet>
    </>
  );
}

export default UploadCard;
