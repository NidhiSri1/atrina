import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { reset } from "../../reduxStore/slice";

const CustomBox = styled(Box)({
  border: "1px solid blue",
  borderRadius: "10px",
  padding: "20px",
  margin: "20px 0px",
});

const Details = () => {
  const userDetails = useSelector((state) => state.stepper.info);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = () => {
    console.log("Hiiii");
    navigate("/");
    dispatch(reset());
  };
  return (
    <Grid>
      <CustomBox>
        <Typography variant="h5">Basic Details</Typography>
        <Typography>Name : {userDetails.name} </Typography>
        <Typography>Email : {userDetails.email} </Typography>
        <Typography>Age : {userDetails.age} </Typography>
        <Typography>Name : {userDetails.gender} </Typography>
        <Typography>Phone Number : {userDetails.mobileNumber} </Typography>
      </CustomBox>
      <CustomBox>
        <Typography variant="h5">Education Details</Typography>
        <Typography>School : {userDetails.school} </Typography>
        <Typography>Degree : {userDetails.degree} </Typography>
        <Typography>Grade : {userDetails.grade} </Typography>
      </CustomBox>
      <CustomBox>
        <Typography variant="h5">Experience</Typography>
        <Typography>Company Name : {userDetails.companyName} </Typography>
        <Typography>Designation : {userDetails.designation} </Typography>
        <Typography>Description : {userDetails.description} </Typography>
      </CustomBox>
      <Button onClick={handleChange}>Start over</Button>
    </Grid>
  );
};

export default Details;
