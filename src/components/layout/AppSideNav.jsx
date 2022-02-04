import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
//import Divider from '@material-ui/core/Divider';
import Collapse from '@mui/material/Collapse';
 import IconExpandLess from "@mui/icons-material/ExpandLess";
 import IconExpandMore from "@mui/icons-material/ExpandMore";
 import PropTypes from 'prop-types'
// import IconExpandLess from '@material-ui/icons/ExpandLess'
// import IconExpandMore from '@material-ui/icons/ExpandMore'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { NAV_LIST } from "../../constants/side-nav-list";
import { Link } from 'react-router-dom';
import "../../styles/login.css"

const drawerWidth = 225;
// React runtime PropTypes


const AppSideNav = ({ open }) => {
  const theme = useTheme();
  const [openIcon, setOpenIcon] = useState(false);
  const handleClick = () => {
    setOpenIcon(!openIcon);
  };
  // function handleClick() {
  
  //   setOpenIcon=!setOpenIcon;
  // }
  // state = {
  //   open: true,
  // };

 /**
  * SubNav styles
  */
  const subNavStyle = {
    textDecoration:"none",
    color:"#fff", 
    marginLeft: '40px'
  }

  /**
   * Icon Color
   */
  const iconColor = {
    color: '#fff',
    fontSize: 'bold'
  }


  return (
    
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          mt: "56px",
          backgroundColor: "#f77440",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div className="sidenav-menu-heading">
        <div className="small">Logged in as:</div>ADMIN
      </div>
      <List>
        {/* {NAV_LIST.map((item, index) => (
          <ListItem button key={item.name}>
            <ListItemIcon sx={{minWidth: "30px"}}>
            {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
         
            {item.children ? <IconExpandMore /> : <IconExpandLess />}

          
          </ListItem>

        ))} */}


<ListItem button >
        <ListItemIcon>
          <DashboardIcon  htmlColor="#fff" />
        </ListItemIcon>
    
        <Link to="/app/dashboard" style={{textDecoration:"none",color:"#fff"}}>
        <ListItemText primary="Dash Board" />
          
          </Link>

      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <PersonIcon  htmlColor="#fff" />
        </ListItemIcon>
        <Link to="/app/library" style={{textDecoration:"none",color:"#fff"}} >
        <ListItemText primary="Role Management" />
        </Link>
      </ListItem>


      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <LocalLibraryIcon  htmlColor="#fff"/>
        </ListItemIcon>
        <Link to="/app/library" style={{textDecoration:"none",color:"#fff"}} >
        <ListItemText primary="Library Management" />     
          </Link>
      
        {openIcon ? <IconExpandLess  style={iconColor}/> : <IconExpandMore style={iconColor}/>}
      </ListItem>
      <Collapse in={openIcon} timeout="auto" unmountOnExit style={{color:"#fff"}}  >
        <List component="div" disablePadding>
          <ListItem
            button>
            {/* <ListItemIcon>
              <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/addBook" style={subNavStyle} >
        <ListItemText primary="Add Items" />     
          </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <ListItem button>
            {/* <ListItemIcon>
            <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/displayBooks" style={subNavStyle} >
              <ListItemText primary="List Items" />     
            </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <ListItem button>
            {/* <ListItemIcon>
            <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/searchItem" style={subNavStyle} >
              <ListItemText primary="Search Items" />     
            </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <ListItem button>
            {/* <ListItemIcon>
            <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/itemTypesManagement" style={subNavStyle} >
              <ListItemText primary="Item Types Management" />     
            </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <ListItem button>
            {/* <ListItemIcon>
            <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/biblioItem" style={subNavStyle} >
              <ListItemText primary="Biblio Item" />     
            </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <ListItem button>
            {/* <ListItemIcon>
            <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/checkIn" style={subNavStyle} >
              <ListItemText primary="Check-In Process" />     
            </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <ListItem button>
            {/* <ListItemIcon>
            <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/checkOut" style={subNavStyle} >
              <ListItemText primary="Check-Out Process" />     
            </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <ListItem button>
            {/* <ListItemIcon>
            <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/checkOutSummery" style={subNavStyle} >
              <ListItemText primary="Check-Out Summery" />     
            </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <ListItem button>
            {/* <ListItemIcon>
            <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/transactionSummary" style={subNavStyle} >
              <ListItemText primary="Transaction Summary" />     
            </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <ListItem button>
            {/* <ListItemIcon>
            <LocalLibraryIcon  htmlColor="#fff"/>
            </ListItemIcon> */}
            <Link to="/app/itemHistory" style={subNavStyle} >
              <ListItemText primary="Item History Details" />     
            </Link>
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>



          </List>
          </Collapse>

          {/* <ListItem button  onClick={handleClick}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Library Management" />
        {openIcon ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem> */}
      {/* <Collapse in={openIcon} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Lib Report" />
            
          </ListItem>

          <ListItem
            button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Lib Report12233" />
           
          </ListItem>



          </List>
          </Collapse> */}

      </List>
    </Drawer>
  );
};

export default AppSideNav;
