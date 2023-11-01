import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WalletIcon from "@mui/icons-material/Wallet";
import HexagonIcon from "@mui/icons-material/Hexagon";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from '@mui/icons-material/Logout';
import './Drawer.css'
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const DrawerComp = () => {
  return (
    <Box sx={{position:"relative"}}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        
        <Box sx={{ overflow: "auto" }}>
          <List>
            {/* Home Section */}
            <ListItem disablePadding>
              <ListItemButton>
                <HomeIcon sx={{ mr: "20px" }} /> Home
              </ListItemButton>
            </ListItem>
            {/* Notification Section */}
            <ListItem disablePadding>
              <ListItemButton>
                <NotificationsNoneIcon sx={{ mr: "20px" }} /> Notification
              </ListItemButton>
            </ListItem>
            {/* Shoping Section */}
            <ListItem disablePadding>
              <ListItemButton>
                <FavoriteBorderIcon sx={{ mr: "20px" }} /> Shop
              </ListItemButton>
            </ListItem>
            {/* Conversation Section */}
            <ListItem disablePadding>
              <ListItemButton>
                <MailOutlineIcon sx={{ mr: "20px" }} /> Conversation
              </ListItemButton>
            </ListItem>
            {/* Wallet Section */}
            <ListItem disablePadding>
              <ListItemButton>
                <WalletIcon sx={{ mr: "20px" }} /> Wallet
              </ListItemButton>
            </ListItem>
            {/* Subscription Section */}
            <ListItem disablePadding>
              <ListItemButton>
                <HexagonIcon sx={{ mr: "20px" }} /> Subscription
              </ListItemButton>
            </ListItem>
            {/* My Account/Profile section */}
            <ListItem disablePadding>
              <ListItemButton>
                <PersonIcon sx={{ mr: "20px" }} /> My Profile
              </ListItemButton>
            </ListItem>
            {/* Setting Section */}
            <ListItem disablePadding>
              <ListItemButton>
                <SettingsIcon sx={{ mr: "20px" }} /> Setting
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      
      <Box sx={{mt:"90%", color:"#88C2BB"}}>
        <List>
          {/* Log out from the app/site */}
        <ListItem disablePadding>
              <ListItemButton>
                <LogoutIcon sx={{ mr: "20px" }} /> 
                <NavLink to={"/signup"}>LogOut</NavLink>
              </ListItemButton>
            </ListItem>
        </List>
      </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerComp;
