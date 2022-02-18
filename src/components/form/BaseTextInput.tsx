import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { IFieldConfig } from "../../constants/types";
import { TextValidator } from "react-material-ui-form-validator";

interface IProps {
  config: IFieldConfig;
  onChange: Function;
}

const BootstrapLabel = styled(InputLabel)(({ theme }) => ({
  marginBottom: "0.25rem !important",
  color: "#000",
  fontSize: "1.2rem",
  "&.Mui-focused": {
    color: "#1976d2",
  },
}));

const BootstrapInput = styled(TextValidator)(({ theme }) => ({
  width: "100%",
  "& .MuiInputLabel-root": {
    transform: "none",
  },
  "& .MuiOutlinedInput-root": {
    marginTop: theme.spacing(3),
    "& legend": { width: 0 },
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

/**
 * @author
 * @function @BaseTextInput
 **/

export const BaseTextInput: FC<IProps> = (props) => {
  const { config } = props;

  const handleChange = (e: any) => {
    props.onChange(config.field, e.target.value);
  };

  return (
    <FormControl variant="standard" fullWidth>
      {/* <BootstrapLabel shrink htmlFor={config.field}>
        {config.title}
      </BootstrapLabel>
      <BootstrapInput
        id={config.field}
        value={config.value}
        type={config.type || "text"}
        onChange={handleChange}
      /> */}
      <BootstrapInput
        label={config.title}
        onChange={handleChange}
        name={config.field}
        type={config.type || "text"}
        validators={config.required ? ["required"] : []}
        errorMessages={["this field is required"]}
        value={config.value}
      />
    </FormControl>
  );
};
