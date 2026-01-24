import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../assects/logo.jpeg";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1000)); // Custom breakpoint at 1000px
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navigationItems = ["Home", "About", "Services", "Projects", "Contact"];

  const drawerList = (
    <List>
      {navigationItems.map((page) => (
        <ListItem button key={page} component={Link} to={page === "Home" ? "/" : `/${page.toLowerCase()}`} onClick={toggleDrawer(false)}>
          <ListItemText primary={page} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <img src={logo} alt="EMP Softech Logo" style={{ height: '40px', marginRight: '10px' }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EMP Softech Pvt Ltd
        </Typography>
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          navigationItems.map((page) => (
            <Button
              key={page}
              color="inherit"
              component={Link}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
            >
              {page}
            </Button>
          ))
        )}
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </AppBar>
  );
};

export default Header;
