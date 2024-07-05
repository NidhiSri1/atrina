import React from "react";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import CustomInput from "../../components/customInput.jsx/CustomInput";
import { Button, Checkbox, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { reset, savedData } from "../../reduxStore/slice";
import { useDispatch } from "react-redux";

const validation = Yup.object().shape({
  companyName: Yup.string().required("School is required"),
  designation: Yup.string().required("Degree is required"),
  startDateExp: Yup.date().required("Start date is required"),
  endDateExp: Yup.date().min(
    Yup.ref("startDateExp"),
    "End date must be greater than start date"
  ),
  description: Yup.string().required("Description is required"),
});
const initialValues = {
  companyName: "",
  designation: "",
  startDateExp: dayjs(),
  endDateExp: dayjs(),
  currentlyWorking: false,
  description: "",
};

const Experience = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value) => {
        dispatch(savedData(value));
        dispatch(reset());
        navigate("/details");
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
              label="Company Name"
              name="companyName"
              component={CustomInput}
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              label="Designation"
              name="designation"
              component={CustomInput}
              value={values.designation}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.currentlyWorking}
                    onChange={(e) =>
                      setFieldValue("currentlyWorking", e.target.checked)
                    }
                  />
                }
                label="Currently working"
              />
            </FormGroup>
            <Grid container spacing={5} marginBottom="20px" mt="1px">
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Start Date"
                    inputFormat="DD/MM/YYYY"
                    value={values.startDateExp}
                    onChange={(date) => setFieldValue("startDateExp", date)}
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
                    disabled={values.currentlyWorking}
                    label="End Date or (Expected)"
                    inputFormat="DD/MM/YYYY"
                    value={values.endDateExp}
                    onChange={(date) => setFieldValue("endDateExp", date)}
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
              label="Description"
              name="description"
              component={CustomInput}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline
            />
            <Button
              type="submit"
              disabled={!dirty || !isValid || isSubmitting}
              variant="contained"
            >
              Submit
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default Experience;
