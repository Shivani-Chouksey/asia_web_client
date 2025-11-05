import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "src/components/common/button/Button";
import styles from "./style.module.scss";

export interface AddClientCardData {
  cardCount: number;
  onConfirm: () => void;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

function AddClientCard(props: AddClientCardData) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsConfirmClicked(true);
      setIsDisabled(true);
      props.onConfirm();
    },
  });
  const handleEditClick = () => {
    setIsEditing(false);
    setIsDisabled(false);
    setIsConfirmClicked(false);
  };
  return (
    <>
      <div className={`${styles.card} ${isDisabled ? styles.disabled : ""}`}>
        <div className={`${styles.titleWrap}`}>
          <h1 className={`${styles.cardTitle}`}>Client #{props.cardCount}</h1>
          <button
            type="button"
            disabled={!isDisabled}
            className="edit-btn"
            onClick={handleEditClick}
          >
            edit
          </button>
        </div>
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
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                ></TextField>
              </FormControl>
              {!isConfirmClicked && !isEditing && (
                <Button
                  btnStyle="small"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Confirm
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddClientCard;
