import React, { FC, useEffect, useState } from "react";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { IFieldConfig } from "../../constants/types";
import { fetchData } from "../../services/commonService";

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
}));

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
    <FormControl variant="standard" fullWidth>
      <BootstrapLabel shrink htmlFor={config.field}>
        {config.title}
        {source.length}
      </BootstrapLabel>
      <Select
        id={config.field}
        value={config.value}
        name={config.field}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {source.map((item: any, index: number) => (
          <MenuItem key={index} value={item[config.valueField || "value"]}>
            {item[config.displayField || "name"]}
          </MenuItem>
        ))}
      </Select>
      {/* {props.error && (
        <FormHelperText id="component-helper-text">
          {props.helperText}
        </FormHelperText>
      )} */}
    </FormControl>
  );
};

// export class BaseDropDownSelect extends ValidatorComponent {
//   state: any = { isValid: true };

//   errorText() {
//     const { isValid } = this.state;

//     if (isValid) {
//       return null;
//     }

//     return this.getErrorMessage();
//   }

//   renderValidatorComponent() {
//     /* eslint-disable no-unused-vars */
//     const {
//       error,
//       errorMessages,
//       validators,
//       requiredError,
//       helperText,
//       validatorListener,
//       withRequiredValidator,
//       containerProps,
//       config,
//       onChange,
//       ...rest
//     } = this.props;
//     const { isValid } = this.state;
//     return (
//       <DropDownSelect
//         config={config}
//         onChange={onChange}
//         error={!isValid || error}
//         helperText={(!isValid && this.errorText()) || helperText}
//       />
//     );
//   }
// }
