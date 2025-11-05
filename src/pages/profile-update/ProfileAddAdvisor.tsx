import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Header from "src/components/common/header/Header";
import { FormControl, TextField } from "@mui/material";
import Button from "src/components/common/button/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const StepContext = React.createContext<{
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

function ProfileAddAdvisor({ currentStep }: { currentStep: number }) {
  const navigate = useNavigate();

  const [step, setStep] = useState(currentStep);
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      navigate("/acknowledgement");
    },
  });
  return (
    <StepContext.Provider value={{ step, setStep }}>
      <header>
        <Header
          backLink={true}
          showProgress={true}
          currentStep={step}
          totalSteps={3}
        ></Header>
      </header>
      <main>
        <div className="lyt-main">
          <div className={`${styles.section}`}>
            <div className={`${styles.sectionHead}`}>
              <div className={`${styles.titleWrap}`}>
                <h1 className={`${styles.pgTitle}`}>Add Advisor</h1>
                <button type="button" className="edit-btn">
                  skip
                </button>
              </div>
              <p className={`${styles.subTitle}`}>
                Enter your Advisors email ID’s to invite them. They will receive
                a confirmation email to join you.
              </p>
            </div>
            <div className={`${styles.sectionCont}`}>
              <div className="bs-form">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <FormControl variant="standard">
                      <TextField
                        id="email"
                        label="Email ID"
                        placeholder="email ID"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      ></TextField>
                    </FormControl>
                  </div>
                  <div className="form-foot">
                    <Button
                      btnStyle="primary"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Confirm
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </StepContext.Provider>
  );
}

export default ProfileAddAdvisor;
