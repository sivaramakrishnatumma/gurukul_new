import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import { FormControl, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { ValidatorComponent } from "react-material-ui-form-validator";
import { IFieldConfig } from "../../constants/types";

interface IProps {
  config: IFieldConfig;
  onChange: Function;
}

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
 * @class @DatePickerValidatorComponent
 **/

class DatePickerValidatorComponent extends ValidatorComponent {
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
      onChange,
      ...rest
    } = this.props;
    const { isValid } = this.state;

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          onChange={onChange}
          {...rest}
          renderInput={(params: any) => (
            <BootstrapInput
              {...params}
              error={!isValid || error}
              helperText={(!isValid && this.getErrorMessage()) || helperText}
            />
          )}
        />
      </LocalizationProvider>
    );
  }
}

interface IProps {
  config: IFieldConfig;
  onChange: Function;
}

/**
 * @author
 * @function @BaseDatePicker
 **/

export const BaseDatePicker: FC<IProps> = (props) => {
  const { config } = props;

  const handleChange = (val: any) => {
    props.onChange(config.field, val);
  };

  return (
    <FormControl variant="standard" fullWidth>
      <DatePickerValidatorComponent
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
