import { Checkbox, FormControlLabel } from "@mui/material";
import React, { FC } from "react";
import { IFieldConfig } from "../../constants/types";

interface IProps {
  config: IFieldConfig;
  onChange: Function;
}

/**
 * @author
 * @function @BaseCheckBox
 **/

export const BaseCheckBox: FC<IProps> = (props) => {
  const { config } = props;

  const handleChange = (e: any) => {
    props.onChange(config.field, e.target.checked);
  };

  return (
    <div className="flex">
      <FormControlLabel
        control={
          <Checkbox
            checked={config.value}
            name={config.field}
            onChange={handleChange}
          />
        }
        label={config.title || ""}
      />
    </div>
  );
};
