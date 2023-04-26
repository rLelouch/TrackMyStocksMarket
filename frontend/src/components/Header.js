import {React, useState} from 'react';

import {Box, AppBar, Toolbar, IconButton, Typography, Drawer }  from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// volet du menu burger
import DrawerRight from '../components/DrawerRight';

function Header () {

  // etat pour l'ouverture du volet du menu burger ( DrawerRight )
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    
    // ouvrir le volet du menu burger
    setOpen(true);
  };

  const handleDrawerClose = () => {

    // fermer le volet du menu burger
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" width="100%"  sx={{ backgroundColor: '#2a4252' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            onClick={() => {window.location.href="/home"}}
            variant="h6"
            component="div"
            color="white">
            Stocks Market Share
          </Typography>

          <IconButton
            size="large"
            edge="end"
            color="white"
            aria-label="account"
            sx={{ ml: 2 }}>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        >
        <DrawerRight />
      </Drawer>
    </Box>
  );
};

export default Header;