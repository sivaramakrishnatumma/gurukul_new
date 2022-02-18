import { Button, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Breadcrumb } from "../common/Breadcrumb";
import { LayoutCard } from "../common/LayoutCard";
import { BaseCheckBox } from "../form/BaseCheckbox";
import { BaseDropDownSelect } from "../form/BaseDropDownSelect";
import { BaseTextInput } from "../form/BaseTextInput";
import { IFieldConfig } from "../../constants/types";
import { getDefaultValue, titlize } from "../../utils/utility_fns";
import { ValidatorForm } from "react-material-ui-form-validator";
import { PageConfig } from "../../constants/config";

interface IProps {
  page: string;
}

const ComponentsMap: any = {
  string: BaseTextInput,
  dropdown: BaseDropDownSelect,
  number: BaseTextInput,
  checkbox: BaseCheckBox,
};

/**
 * @author
 * @function @BaseForm
 **/

export const BaseForm: FC<IProps> = (props) => {
  const { page } = props;
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [action, setAction] = useState("Add");

  const [formArray, setFormArray] = useState([] as IFieldConfig[]);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id !== null) {
      setAction("update");
      getFormData(id);
    } else {
      updateFormData();
    }
  }, []);

  const getFormData = async (id: string) => {
    try {
      const response = await PageConfig[page].services.getByIdService(id);
      updateFormData(response);
    } catch (error) {
      console.error(error);
    }
  };

  const updateFormData = (data: any = {}) => {
    const formArray: IFieldConfig[] = PageConfig[page].config.map((item) => {
      return {
        ...item,
        value:
          data[item.field] != undefined
            ? data[item.field]
            : getDefaultValue(item),
      };
    });
    setFormArray(formArray);
  };

  const handleChange = (name: string, value: any) => {
    const data: IFieldConfig[] = [...formArray];
    const index = data.findIndex((item) => item.field === name);
    if (data[index]) {
      data[index].value = value;
      setFormArray(data);
    }
  };

  const handleformSubmit = () => {
    const data = formArray.reduce((acc: any, item: IFieldConfig) => {
      acc[item.field] = item.hidden ? item.defaultValue : item.value;

      if (item.type === "number") {
        acc[item.field] = parseInt(acc[item.field]);
      }
      return acc;
    }, {});

    if (action === "Add") {
      dispatch(PageConfig[page].actions.addAction(data));
    } else {
      const id = searchParams.get("id") || "";
      dispatch(PageConfig[page].actions.updateAction(data, id));
    }
  };

  return (
    <>
      <h1 className="mt-4">Library Management</h1>
      <Breadcrumb path={["Library Management", `${action} ${titlize(page)}`]} />

      <LayoutCard title={titlize(page)}>
        <ValidatorForm onSubmit={handleformSubmit}>
          <Grid container spacing={2}>
            {formArray
              .filter((item: any) => !item.hidden)
              .map((item: any) => (
                <Grid item xs={12} md={6} key={item.field}>
                  {React.createElement(ComponentsMap[item.type], {
                    config: item,
                    onChange: handleChange,
                  })}
                </Grid>
              ))}
          </Grid>

          <Button variant="contained" className="login-btn" type="submit">
            {action} {titlize(page)}
          </Button>
        </ValidatorForm>
      </LayoutCard>
    </>
  );
};
