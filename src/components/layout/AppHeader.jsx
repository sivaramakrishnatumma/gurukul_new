import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/logo.jpg";
import SearchBar from "../SearchBar";
import { toggleSideNav } from "../../redux/actions/common.actions";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  flexDirection: "row",
  height: "56px",
  padding: "0.5rem 1rem",
  zIndex: theme.zIndex.drawer + 1,
  justifyContent: "space-between",
}));

const MenuIconButton = styled(MuiButton)(({ theme }) => ({
  minWidth: "40px",
  padding: 0,
  marginLeft: theme.spacing(2),
}));

const AppHeader = () => {
  const dispatch = useDispatch();

  const toggleMenuBar = () => {
    dispatch(toggleSideNav());
  };

  return (
    <AppBar position="fixed">
      <div className="left" style={{ display: "flex" }}>
        <img src={Logo} style={{ height: "100%" }} />
        <MenuIconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          variant="contained"
          onClick={toggleMenuBar}
        >
          <MenuIcon />
        </MenuIconButton>
      </div>
      <div className="right" style={{ display: "flex" }}>
        <SearchBar />
      </div>
    </AppBar>
  );
};

export default AppHeader;
