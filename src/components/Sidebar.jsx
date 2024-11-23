import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <Drawer
    variant="permanent"
    anchor="left"
    sx={{
      width: 240,
      "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
    }}
  >
    <List>
      <ListItem component={NavLink} to="/" exact>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider />
      <ListItem component={NavLink} to="/users">
        <ListItemText primary="User Management" />
      </ListItem>
      <ListItem component={NavLink} to="/roles">
        <ListItemText primary="Role Management" />
      </ListItem>
      <ListItem component={NavLink} to="/permissions">
        <ListItemText primary="Permission Management" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
