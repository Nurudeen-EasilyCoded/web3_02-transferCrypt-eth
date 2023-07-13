import React from 'react';
import { Box, Paper } from '@mui/material';
import Navbar from './Navbar';
import CardText from './CardText';

const HeaderCard = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Paper
        elevation={12}
        className='header-bg'
        sx={{
          mt: 2,
          px: 1,
          borderRadius: 5,
          height: { lg: '700px' },
          maxWidth: '1440px',
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <Navbar />
        <CardText />
      </Paper>
    </Box>
  );
};

export default HeaderCard;
