import React, { FC, useEffect, useState } from "react";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { IFieldConfig } from "../../constants/types";
import { fetchData } from "../../services/commonService";
import { ValidatorComponent } from "react-material-ui-form-validator";

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
  "&.Mui-error + .MuiInputBase-root.Mui-error .MuiSelect-select": {
    borderColor: "#d32f2f",
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }: any) => ({
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
  "& + .MuiFormHelperText-root": {
    marginLeft: "14px",
  },
}));

/**
 * @author
 * @class @DropdownValidatorComponent
 **/

class DropdownValidatorComponent extends ValidatorComponent {
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
      source,
      config,
      ...rest
    } = this.props;
    const { isValid } = this.state;

    return (
      <FormControl variant="standard" fullWidth error={!isValid || error}>
        <BootstrapLabel shrink htmlFor={config.field}>
          {config.title}
        </BootstrapLabel>
        <Select {...rest} input={<BootstrapInput />}>
          {source.map((item: any, index: number) => (
            <MenuItem key={index} value={item[config.valueField || "value"]}>
              {item[config.displayField || "name"]}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText id="my-helper-text">
          {(!isValid && this.getErrorMessage()) || helperText}
        </FormHelperText>
      </FormControl>
    );
  }
}

interface IProps {
  config: IFieldConfig;
  onChange: Function;
}

/**
 * @author
 * @function @BaseDropDownSelect
 **/

export const BaseDropDownSelect: FC<IProps> = (props) => {
  const { config } = props;
  const [source, setSource] = useState([] as any);

  useEffect(() => {
    if (config.dataSource) {
      if (Array.isArray(config.dataSource)) {
      } else {
        fetchData(config.dataSource).then((data) => {
          setSource(data);
        });
      }
    }
  }, []);

  const handleChange = (e: any) => {
    props.onChange(config.field, e.target.value);
  };

  return (
    <DropdownValidatorComponent
      id={config.field}
      value={config.value}
      name={config.field}
      source={source}
      config={config}
      onChange={handleChange}
      validators={config.required ? ["required"] : []}
      errorMessages={["required"]}
    />
  );
};
