import OtpInput from "react-otp-input";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "src/components/common/header/Header";

export const StepContext = React.createContext<{
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);
function CreatePin() {
  const navigate = useNavigate();
  const [btnValid, setBtnValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmOtp, setConfirmOtp] = useState("");

  useEffect(() => {
    setBtnValid(otp === confirmOtp && otp.length === 4);
  }, [otp, confirmOtp]);

  const handleClick = () => {
    navigate("/profile-update/add-profile-picture");
  };

  const [step, setStep] = useState(1);
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

      <div className="lyt-main">
        <div className={`${styles.section}`}>
          <div className={`${styles.sectionHead}`}>
            <div className={`${styles.titleWrap}`}>
              <h1 className={`${styles.pgTitle}`}>Create New Pin</h1>
              <button type="button" className="edit-btn" onClick={handleClick}>
                skip
              </button>
            </div>
            <p className={`${styles.subTitle}`}>
              The pin would be used to login.
            </p>
          </div>
          <div className="bs-form typ-pin">
            <form>
              <div className="form-body">
                <div className="form-group">
                  <div className={`${showError ? "invalid" : ""} otp-wrap`}>
                    <label htmlFor="otp">Create a new 4 digit pin</label>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      inputType="number"
                      renderInput={(props) => <input {...props} required />}
                    />
                    <label htmlFor="confirmOtp">Re enter pin to confirm</label>
                    <OtpInput
                      value={confirmOtp}
                      onChange={setConfirmOtp}
                      numInputs={4}
                      inputType="number"
                      renderInput={(props) => <input {...props} required />}
                    />
                    {showError && (
                      <span className="MuiFormHelperText-root Mui-error">
                        Incorrect OTP
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-foot">
                <Button
                  btnStyle="primary"
                  type="button"
                  onClick={handleClick}
                  disabled={!btnValid}
                >
                  Create Pin
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StepContext.Provider>
  );
}

export default CreatePin;
