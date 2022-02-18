import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Collapse, Drawer, List, ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NAV_LIST } from "../../constants/side-nav-list";
import "../../styles/login.css";

const drawerWidth = 225;

/**
 * SubNav styles
 */
const subNavStyle = {
  textDecoration: "none",
  color: "#fff",
  marginLeft: "35px",
  fontSize: "80%",
};

const AppSideNav = ({ open }) => {
  const navigate = useNavigate();
  const [navLinks, setNavLinks] = useState(NAV_LIST);

  const handleOpenMenu = (index) => {
    const links = [...navLinks];
    if (links[index].children) {
      links[index].open = !links[index].open;
      setNavLinks(links);
    } else {
      navigate(links[index].path);
    }
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          mt: "56px",
          backgroundColor: "#ca501f",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div className="sidenav-menu-heading">
        <div>ADMIN USER</div>
      </div>
      <List>
        {navLinks.map((item, index) => (
          <React.Fragment key={item.name}>
            <ListItemButton
              onClick={() => handleOpenMenu(index)}
              style={{
                textDecoration: "none",
                color: "#fff",
                height: 40,
                padding: "0 10px",
              }}
            >
              <ListItemIcon sx={{ minWidth: "30px", color: "#fff" }}>
                {React.createElement(item.icon)}
              </ListItemIcon>
              <ListItemText primary={item.name} />
              {item.children &&
                (item.open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />)}
            </ListItemButton>

            <Collapse in={item.open} timeout="auto" unmountOnExit>
              {item.children &&
                item.children.map((child) => (
                  <List component="div" disablePadding key={child.name}>
                    <ListItemButton
                      sx={{ pl: 4, height: 36, padding: "0 10px" }}
                    >
                      <Link to={child.path} style={subNavStyle}>
                        <ListItemText
                          primary={child.name}
                          style={{ fontSize: "0.9rem" }}
                          disableTypography={true}
                        />
                      </Link>
                    </ListItemButton>
                  </List>
                ))}
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default AppSideNav;
