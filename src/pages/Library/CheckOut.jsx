import { Button, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Breadcrumb } from "../../components/common/Breadcrumb";
import { LayoutCard } from "../../components/common/LayoutCard";
import { BaseCheckBox } from "../../components/form/BaseCheckbox";
import { BaseDropDownSelect } from "../../components/form/BaseDropDownSelect";
import { BaseTextInput } from "../../components/form/BaseTextInput";
import { BaseDatePicker } from "../../components/form/BaseDatePicker";
import {
  getDefaultValue,
  handleValidationError,
} from "../../utils/utility_fns";
import { ValidatorForm } from "react-material-ui-form-validator";
import { checkOutFormConfig } from "../../forms-config/check-out";
import { useDispatch } from "react-redux";
import { checkOutItemService } from "../../services/ItemBorrowerServices";
import {
  EVT_HIDE_LOADER,
  EVT_SHOW_ERROR,
  EVT_SHOW_LOADER,
} from "../../redux/actions/common.actions.types";

const ComponentsMap = {
  string: BaseTextInput,
  dropdown: BaseDropDownSelect,
  number: BaseTextInput,
  checkbox: BaseCheckBox,
  date: BaseDatePicker,
};

/**
 * @author
 * @function @CheckOut
 **/

const CheckOut = (props) => {
  const dispatch = useDispatch();
  const [formArray, setFormArray] = useState([]);

  useEffect(() => {
    updateFormData();
  }, []);

  // const getFormData = async (id) => {
  //   try {
  //     const response = await PageConfig[page].services.getDataByIdService(id);
  //     updateFormData(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const updateFormData = (data = {}) => {
    const formArray = checkOutFormConfig.map((item) => {
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

  const handleChange = (name, value) => {
    const data = [...formArray];
    const index = data.findIndex((item) => item.field === name);
    if (data[index]) {
      data[index].value = value;
      setFormArray(data);
    }
  };

  const handleformSubmit = async () => {
    dispatch({ type: EVT_SHOW_LOADER });

    const data = formArray.reduce((acc, item) => {
      acc[item.field] = item.hidden ? item.defaultValue : item.value;

      if (item.type === "number") {
        acc[item.field] = parseInt(acc[item.field]);
      }

      if (item.type === "date") {
        acc[item.field] = new Date(acc[item.field]).toISOString();
      }

      return acc;
    }, {});

    try {
      await checkOutItemService(data);
      updateFormData();
      alert("Checkout successful");
      dispatch({ type: EVT_HIDE_LOADER });
    } catch (error) {
      const msg = handleValidationError(error.response);
      if (msg) {
        dispatch({ type: EVT_SHOW_ERROR, value: msg });
      }

      dispatch({ type: EVT_HIDE_LOADER });
    }
  };

  return (
    <>
      <h1 className="mt-4">Library Management</h1>
      <Breadcrumb path={["Library Management", "Check out Process"]} />

      <div className="action-bar"></div>

      <LayoutCard title="Check out Process">
        <ValidatorForm onSubmit={handleformSubmit}>
          <Grid container spacing={2}>
            {formArray
              .filter((item) => !item.hidden)
              .map((item) => (
                <Grid item xs={12} md={6} key={item.field}>
                  {React.createElement(ComponentsMap[item.type], {
                    config: item,
                    onChange: handleChange,
                  })}
                </Grid>
              ))}
          </Grid>

          <Button variant="contained" className="login-btn" type="submit">
            Check out Item
          </Button>
        </ValidatorForm>
      </LayoutCard>
    </>
  );
};

export default CheckOut;
