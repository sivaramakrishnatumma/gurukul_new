import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Backdrop, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface IProps {}

const useStyles = makeStyles((theme: any) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export const Loader: FC<IProps> = () => {
  const classes = useStyles();
  const open = useSelector((state: any) => state.commonReducer.loader);

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
