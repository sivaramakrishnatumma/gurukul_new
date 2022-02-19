import React, { FC } from "react";
import { Alert } from "@mui/material";

interface IProps {
  alert: any;
}

/**
 * @author
 * @function @AppAlert
 **/

export const AppAlert: FC<IProps> = ({ alert }) => {
  if (Array.isArray(alert.msg)) {
    return alert.msg.map((item: any) => (
      <Alert variant="filled" severity="error" key={item.field}>
        {item.message}
      </Alert>
    ));
  } else {
    return <Alert severity={alert.type}>{alert.msg}</Alert>;
  }
};
