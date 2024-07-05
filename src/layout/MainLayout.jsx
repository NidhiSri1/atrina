import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import StepperComponent from "../components/stepper/StepperComponent";

const MainLayout = () => {
  const location = useLocation();
  return (
    <Container maxWidth="sm">
      {location.pathname !== "/details" && <StepperComponent />}
      <Outlet />
    </Container>
  );
};

export default MainLayout;
