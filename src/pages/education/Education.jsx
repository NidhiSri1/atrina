import React from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import CustomInput from "../../components/customInput.jsx/CustomInput";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useDispatch } from "react-redux";
import { increment, savedData } from "../../reduxStore/slice";

const validation = Yup.object().shape({
  school: Yup.string().required("School is required"),
  degree: Yup.string().required("Degree is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date must be greater than start date"),
  grade: Yup.number()
    .typeError("Grade must be a number")
    .required("Grade is required"),
});

const initialValues = {
  school: "",
  degree: "",
  startDate: dayjs(),
  endDate: dayjs(),
  grade: "",
};

const Education = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value) => {
        dispatch(savedData(value));
        dispatch(increment());
        navigate("/experience");
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
          setFieldValue,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Field
              label="Degree"
              name="degree"
              component={CustomInput}
              value={values.degree}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              label="School"
              name="school"
              component={CustomInput}
              value={values.school}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            <Grid container spacing={5} marginBottom="20px">
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Start Date"
                    inputFormat="DD/MM/YYYY"
                    value={values.startDate}
                    onChange={(date) => setFieldValue("startDate", date)}
                    disableFuture
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        size: "small",
                        fullWidth: true,
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="End Date or (Expected)"
                    inputFormat="DD/MM/YYYY"
                    value={values.endDate}
                    onChange={(date) => setFieldValue("endDate", date)}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        size: "small",
                        fullWidth: true,
                      },
                    }}
                  />
                </LocalizationProvider>
                <Typography fontSize={"12px"} color="grey">
                  End date should be less that start date
                </Typography>
              </Grid>
            </Grid>
            <Field
              label="Enter in percentage E.g : 70"
              name="grade"
              component={CustomInput}
              value={values.grade}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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

export default Education;
