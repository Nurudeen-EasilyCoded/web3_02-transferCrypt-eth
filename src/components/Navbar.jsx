import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import logo1 from '../assets/logo1.png';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position='static'
        sx={{ backgroundColor: 'transparent' }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img
              style={{ height: isMobile ? '30px' : '50px', width: isMobile ? '60px' : '100px' }}
              src={logo1}
              alt='Image'
            />
          </Box>
          <Button
            sx={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: isMobile ? '16px' : '20px',
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
