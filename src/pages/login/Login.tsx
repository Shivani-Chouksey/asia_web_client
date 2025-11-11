import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import { FormControl, TextField } from "@mui/material";
import Button from "src/components/common/button/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import API_ENDPOINTS from '../../api-endpoints'
import { toast } from "react-toastify";
import SuccessError from "src/components/success-error/SuccessError";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email")
    .required("Email is required"),
});

function Login() {
  const navigate = useNavigate();
  const otpData = {
    type: "email",
    iconName: "email",
    value: "abc@abc.com",
    source: "login",
  };
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(API_ENDPOINTS.login, values, {
          withCredentials: true
        });

        console.log("send otp", res.data);

        otpData.value = formik.values.email;
        navigate("/otp", { state: otpData });

      } catch (error: any) {
        if (error.response?.status === 401) {
          toast.info("Email not registered. Please Singup First- Redirecting to Sign Up.");
          navigate('/signup');
        } else {
          console.error("Login error:", error);
          // Optionally show a toast or error message
        }
      }
    }
  });
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-login">
          <div className={`${styles.section}`}>
            <div className={`${styles.sectionHead}`}>
              <h1 className={`${styles.pgTitle}`}>Login / Sign Up</h1>
              <p className={`${styles.subTitle}`}>
                Enter your email. We will send you a 6-digit OTP there.
              </p>
            </div>
            <div className="bs-form">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-body">
                  <div className="form-group">
                    <FormControl variant="standard">
                      <TextField
                        id="email"
                        placeholder="abc@xyz.com"
                        label="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="form-foot">
                  <Button
                    btnStyle="primary"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Send OTP
                  </Button>
                </div>
              </form>
            </div>
            <div className={`${styles.ctaWrap}`}>
              <Button btnStyle="text" navigation={true} navigationUrl="/impact">
                Skip and Explore
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
    // <SuccessError></SuccessError>
  );
}

export default Login;
