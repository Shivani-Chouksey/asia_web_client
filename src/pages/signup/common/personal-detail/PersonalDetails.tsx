import { FormControl, TextField } from "@mui/material";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import PhoneNumber, { Values } from "src/components/phone-number/PhoneNumber";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  fname: yup.string().required("First Name is required"),
  lname: yup.string().required("Last Name is required"),
  phn: yup
    .number()
    .required("Mobile number is required")
    .test("phone-num-length", "Invalid phone number", (value) => {
      return String(value).length === 10;
    }),
});

function PersonalDetails() {
  const navigate = useNavigate();
  const otpData = {
    type: "mobile",
    iconName: "mobile",
    value: "+xx xxxxxxxxxx",
    source: "personal-detail",
  };
  const initialValues: Values = {
    phn: "",
  };
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      fname: "",
      lname: "",
      ...initialValues,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/otp", { state: otpData });
    },
  });
  return (
    <div className="lyt-main typ-details-form">
      <div className={`${styles.section}`}>
        <div className={`${styles.sectionHead}`}>
          <h1 className={`${styles.pgTitle}`}>Personal Details</h1>
        </div>
        <div className="bs-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-body">
              <div className="form-group">
                <FormControl variant="standard">
                  <TextField
                    id="fname"
                    label="First Name"
                    placeholder="First Name"
                    name="fname"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.fname && Boolean(formik.errors.fname)}
                    helperText={formik.touched.fname && formik.errors.fname}
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <FormControl variant="standard">
                  <TextField
                    id="lname"
                    label="Last Name"
                    placeholder="Last Name"
                    name="lname"
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lname && Boolean(formik.errors.lname)}
                    helperText={formik.touched.lname && formik.errors.lname}
                  />
                </FormControl>
              </div>
              <div className="form-group typ-phone">
                <PhoneNumber
                  id="phn"
                  value={formik.values.phn}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phn && Boolean(formik.errors.phn)}
                  helperText={formik.touched.phn && formik.errors.phn}
                ></PhoneNumber>
              </div>
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

export default PersonalDetails;
