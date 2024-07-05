import { Box, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
const CustomTextField = styled(TextField)({
  margin: "20px 0",
  "& .MuiInputBa    se-root": {
    color: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
});

const CustomInput = ({
  field,
  label,
  name,
  id,
  value,
  form: { touched, errors },
  ...props
}) => {
  const errorText = touched[field.name] && errors[field.name];
  return (
    <Box>
      <CustomTextField
        label={label}
        size="small"
        fullWidth
        id={id}
        type="text"
        {...field}
        {...props}
        placeholder={label}
        error={Boolean(errorText)}
        helperText={errorText}
      ></CustomTextField>
    </Box>
  );
};

export default CustomInput;
