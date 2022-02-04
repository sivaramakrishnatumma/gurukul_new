import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const BootstrapLabel = styled(InputLabel)(({ theme }) => ({
  marginBottom: "0.25rem !important",
  color: "#000",
  fontSize: "1.2rem",
  "&.Mui-focused": {
    color: "#1976d2",
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `rgb(25 118 210 / 25%) 0 0 0 0.2rem`,
      borderColor: "#1976d2",
    },
  },
}));

const TextInput = (props) => {
  return (
    <FormControl variant="standard" fullWidth>
      <BootstrapLabel shrink htmlFor={props.id}>
        {props.label}
      </BootstrapLabel>
      <BootstrapInput
        {...props}
      />
    </FormControl>
  );
};

export default TextInput;
