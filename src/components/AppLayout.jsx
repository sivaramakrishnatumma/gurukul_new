import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppHeader from "./layout/AppHeader";
import AppSideNav from "./layout/AppSideNav";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

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

const AppLayout = () => {
  const [open, setOpen] = React.useState(false);
  const menuOpen = useSelector(state => state.commonReducer.menuOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppHeader setOpen={setOpen} />
      <AppSideNav open={menuOpen} setOpen={setOpen} />
      <Main open={menuOpen} sx={{ mt: "56px" }}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default AppLayout;
