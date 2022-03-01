import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Collapse, Drawer, List, ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NAV_LIST } from "../../constants/side-nav-list";
import "../../styles/login.css";
import { makeStyles } from "@mui/styles";

const drawerWidth = 225;

const useStyles = makeStyles({
  subNav: {
    textDecoration: "none",
    color: "#fff",
    marginLeft: "35px",
    fontSize: "80%",
  },
  sideNavFooter: {
    marginTop: "auto",
    padding: "0.65rem 1rem",
    background: "#a5380d",
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: 600,
    textTransform: "capitalize",
  },
  small: {
    fontSize: "70%",
    textTransform: "none",
    fontWeight: 400
  }
});

interface IProps {
  open: boolean;
}

/**
 * @author
 * @function @AppSideNav
 **/

export const AppSideNav: FC<IProps> = ({ open }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { loggedInfo } = useSelector((state: any) => state.commonReducer);
  const [navLinks, setNavLinks] = useState(NAV_LIST);

  const handleOpenMenu = (index: number) => {
    const links: any = [...navLinks];
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
          height: "calc(100% - 56px)",
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
        {navLinks.map((item: any, index) => (
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
                item.children.map((child: any) => (
                  <List component="div" disablePadding key={child.name}>
                    <ListItemButton
                      sx={{ pl: 4, height: 38, padding: "0 10px" }}
                    >
                      <Link to={child.path} className={classes.subNav}>
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

      <div className={classes.sideNavFooter}>
        <div className={classes.small}>Logged in as</div>
        {loggedInfo?.account?.name}
      </div>
    </Drawer>
  );
};

export default AppSideNav;
