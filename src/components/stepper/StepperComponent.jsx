import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/system";
import {  useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
const CustomStepper = styled(Stepper)({
  margin: "50px 0",
});

const steps = ["About you", "Education", "Experience"];
function StepperComponent() {
  const activeStep = useSelector((state) => state.stepper.value);

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  if (isSmallScreen) {
    return (
      <Typography variant="h6" color="grey" textAlign={"center"} gutterBottom>
        {activeStep + 1}/3
      </Typography>
    );
  }

  return (
    <CustomStepper activeStep={activeStep}>
      {steps.map((item) => {
        return (
          <Step key={item}>
            <StepLabel>{item}</StepLabel>
          </Step>
        );
      })}
    </CustomStepper>
  );
}

export default StepperComponent;
