import Button from "src/components/common/button/Button";
import styles from "./style.module.scss";
import RadioGroupField, {
  RadioField,
} from "src/components/common/radio-group/RadioGroupField";
import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DocumentUpload from "src/components/common/document-upload/DocumentUpload";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { StepContext } from "../../DetailsForm";
import { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function IdentityProof({ currentStep }: { currentStep: number }) {
  const [docType, setDocType] = useState("passport");
  const validationSchema = yup.object({
    ...(docType === "passport" && {
      passport: yup.string().required("Passport is required"),
      expiryDatePassport: yup
        .date()
        .required("Passport Expiry date is required"),
    }),
    ...(docType === "identity card" && {
      idNum: yup.string().required("ID number is required"),
      expiryDateIDProof: yup
        .date()
        .required("ID Proof Expiry date is required"),
    }),
  });
  const { step, setStep } = useContext(StepContext)!;

  const navigate = useNavigate();
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      passport: "",
      expiryDatePassport: null,
      expiryDateIDProof: null,
      idNum: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/signup/details-form/residence-proof");
    },
  });
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

  // const submitHandler = () => {
  //   navigate("/signup/details-form/residence-proof");
  // };
  setStep(currentStep);
  return (
    <div className="lyt-main typ-details-form">
      <div className={`${styles.section}`}>
        <div className={`${styles.sectionHead}`}>
          <h1 className={`${styles.pgTitle}`}>Identity Proof</h1>
        </div>
        <div className="bs-form">
          <form onSubmit={formik.handleSubmit}>
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
                    <h3 className="frm-sec-title">Enter Passport Details</h3>
                    <div className="form-group">
                      <FormControl variant="standard">
                        <TextField
                          id="passport"
                          label="Passport Number"
                          placeholder="Passport Number"
                          value={formik.values.passport}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.passport &&
                            Boolean(formik.errors.passport)
                          }
                          helperText={
                            formik.touched.passport && formik.errors.passport
                          }
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
                            className={
                              formik.errors.expiryDatePassport &&
                              formik.touched.expiryDatePassport
                                ? "Mui-error"
                                : ""
                            }
                            format="MM-DD-YYYY"
                            label="Expiry Date"
                            value={formik.values.expiryDatePassport}
                            onChange={(date) =>
                              formik.setFieldValue("expiryDatePassport", date)
                            }
                            onClose={() => {
                              formik.setFieldTouched(
                                "expiryDatePassport",
                                true
                              );
                            }}
                          />
                          {formik.touched.expiryDatePassport &&
                          formik.errors.expiryDatePassport ? (
                            <span className="MuiFormHelperText-root Mui-error">
                              {formik.errors.expiryDatePassport}
                            </span>
                          ) : null}
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
                          value={formik.values.idNum}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.idNum && Boolean(formik.errors.idNum)
                          }
                          helperText={
                            formik.touched.idNum && formik.errors.idNum
                          }
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
                            className={
                              formik.errors.expiryDateIDProof &&
                              formik.touched.expiryDateIDProof
                                ? "Mui-error"
                                : ""
                            }
                            format="MM-DD-YYYY"
                            label="Expiry Date"
                            value={formik.values.expiryDateIDProof}
                            onChange={(date) =>
                              formik.setFieldValue("expiryDateIDProof", date)
                            }
                            onClose={() => {
                              formik.setFieldTouched("expiryDateIDProof", true);
                            }}
                          />
                          {formik.touched.expiryDateIDProof &&
                          formik.errors.expiryDateIDProof ? (
                            <span className="MuiFormHelperText-root Mui-error">
                              {formik.errors.expiryDateIDProof}
                            </span>
                          ) : null}
                        </LocalizationProvider>
                      </div>
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
            </div>
            <div className="form-foot">
              <Button
                btnStyle="primary"
                type="submit"
                disabled={!formik.isValid}
              >
                Proceed
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IdentityProof;
