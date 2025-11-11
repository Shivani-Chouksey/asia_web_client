import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API_ENDPOINTS from "src/api-endpoints";
import axios from "axios";
import { getSocket, initSocket } from "src/socketService";
import SOCKET_EVENTS, { SOCKET_URL } from "src/socketEvents";

export interface OtpData {
  type: string;
  iconName: string;
  value: string;
  source: string;
}

function OtpPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [btnValid, setBtnValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const location = useLocation();
  const data: OtpData = location.state;
  const editMail = () => {
    if (location.state.source === "login") {
      navigate("/login");
    }
    if (location.state.source === "personal-detail") {
      navigate("/signup/details-form");
    }
  };
  const onConfirmClick = async () => {
    try {
      if (otp) {
        const res: any = await axios.post(API_ENDPOINTS.verifyOtp, { email: data.value, otp: otp });
        console.log('verifyotp response', res);

        if (res.data.success) {
          sessionStorage.setItem('access_token', res.data.data.access_token);
          sessionStorage.setItem('user_id',res.data.data.id);   
          sessionStorage.setItem('user_role',res.data.data.role);   
          sessionStorage.setItem('user_email',res.data.data.email);   
          //socket connection
          // first init socket connection
          await initSocket( res.data.data.access_token);
          // socket.emit(SOCKET_EVENTS.REGISTER, { userId: res.data.data.id });

          // getSocket()
          navigate('/impact');

        }
        // if (location.state.source === "login") {
        //   navigate("/signup");
        // }
        // if (location.state.source === "personal-detail") {
        //   navigate("/signup/details-form/identity-proof");
        // }
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.status === 404) {
        toast.error(error.response.data.message || "Invalid OTP. Please try again.");
        navigate('/signup');
      } else {
        console.error("Login error:", error);
        // Optionally show a toast or error message
      }
    }
  };
  useEffect(() => {
    // if (otp === "123456") {
    //   setBtnValid(false);
    //   setShowError(false);
    // } else {
    //   setBtnValid(true);
    //   if (otp.length === 6) {
    //     setShowError(true);
    //   }
    // }
    console.log(otp);

    if (otp.length === 6) {
      setBtnValid(false);
    }
  }, [otp]);

  const handleClick = () => {
    // navigate("/otp");
  };
  return (
    <div className="lyt-main typ-otp">
      <div className={`${styles.section}`}>
        <div className={`${styles.sectionHead}`}>
          <h1 className={`${styles.pgTitle}`}>Enter the code</h1>
          <p className={`${styles.subTitle}`}>
            We have sent a 6-digit OTP to your {data.type}.
          </p>
        </div>
        <div className="bs-form">
          <form>
            <div className="form-body">
              <div className="form-group">
                <div className={`${showError ? "invalid" : ""} otp-wrap`}>
                  <div className="check-email">
                    <div className="left-wrap">
                      <span className="icon">
                        <i className={`${data.iconName}`}></i>
                      </span>
                      <span className="icon-text">{data.value}</span>
                    </div>
                    <div className="right-wrap">
                      <button
                        type="button"
                        className="edit-btn"
                        onClick={editMail}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputType="number"
                    renderInput={(props) => <input {...props} required />}
                  />
                  {showError && (
                    <span className="MuiFormHelperText-root Mui-error">
                      Incorrect OTP
                    </span>
                  )}
                  <div className="resend-otp">
                    <button type="button" onClick={handleClick}>
                      Resend OTP
                    </button>
                    <span>(in 00:29)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-foot">
              <Button
                btnStyle="primary"
                type="button"
                disabled={btnValid}
                onClick={onConfirmClick}
              >
                Confirm OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
