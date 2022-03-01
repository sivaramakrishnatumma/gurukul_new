import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppHeader from "./AppHeader";
import AppSideNav from "./AppSideNav";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { AppAlert } from "../common/AppAlert";
import AppFooter from "./AppFooter";

const drawerWidth = 225;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

/**
 * @author
 * @function @AppLayout
 **/

export const AppLayout = (props) => {
  const [open, setOpen] = useState(false);
  const alert = useSelector((state) => state.commonReducer.alert);
  const { menuOpen } = useSelector((state) => state.commonReducer);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppHeader setOpen={setOpen} />
      <AppSideNav open={menuOpen} setOpen={setOpen} />
      <Main
        open={menuOpen}
        sx={{
          mt: "56px",
          pb: "80px"
        }}
      >
        {alert && <AppAlert alert={alert} />}
        <Outlet />
        <AppFooter />
      </Main>
    </Box>
  );
};
export default AppLayout;
