import React from "react";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import CustomInput from "../../components/customInput.jsx/CustomInput";
import {
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, savedData } from "../../reduxStore/slice";

const validation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobileNumber: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  gender: Yup.string().required("Gender is required"),
});
const AboutMe = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        age: "",
        mobileNumber: "",
        gender: "",
      }}
      onSubmit={(value) => {
        dispatch(increment());
        dispatch(savedData(value));
        navigate("/education");
      }}
      validationSchema={validation}
    >
      {(props) => {
        const {
          values,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Field
              label="Name"
              name="name"
              component={CustomInput}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              label="Age"
              name="age"
              component={CustomInput}
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <Field
                row
                name="gender"
                as={RadioGroup}
                value={values.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </Field>
            </FormControl>
            <Field
              label="E-mail"
              id="347843bdwt47"
              name="email"
              component={CustomInput}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              label="Mobile Number"
              id="347843bdwt47"
              name="mobileNumber"
              component={CustomInput}
              value={values.mobileNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            <Button
              type="submit"
              disabled={!dirty || !isValid || isSubmitting}
              variant="contained"
            >
              Next
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default AboutMe;
