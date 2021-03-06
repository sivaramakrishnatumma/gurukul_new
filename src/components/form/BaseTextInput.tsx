import React, { FC } from "react";
import { FormControl, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ValidatorComponent } from "react-material-ui-form-validator";
import { IFieldConfig } from "../../constants/types";

const BootstrapInput = styled(TextField)(({ theme }) => ({
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
 * @class @TextInputValidatorComponent
 **/

class TextInputValidatorComponent extends ValidatorComponent {
  state = { isValid: true };

  renderValidatorComponent() {
    const {
      error,
      errorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      withRequiredValidator,
      containerProps,
      ...rest
    } = this.props;
    const { isValid } = this.state;

    return (
      <BootstrapInput
        {...rest}
        error={!isValid || error}
        helperText={(!isValid && this.getErrorMessage()) || helperText}
      />
    );
  }
}

interface IProps {
  config: IFieldConfig;
  onChange: Function;
}

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
      <TextInputValidatorComponent
        label={config.title}
        onChange={handleChange}
        name={config.field}
        value={config.value}
        type={config.type || "text"}
        validators={config.required ? ["required"] : []}
        errorMessages={["required"]}
      />
    </FormControl>
  );
};
