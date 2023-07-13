import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import logo1 from '../assets/logo1.png';

const Footer = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Box
        sx={{ border: '1px solid gray', mt: 8, mx: { xs: 5, sm: 5, md: 30 } }}
      />
      <Grid
        container
        sx={{ p: 2, justifyContent: 'center' }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} textAlign='center' sx={{ mb: 2 }}>
          <Box
            component='img'
            src={logo1}
            alt='logo'
            sx={{ width: { xs: '50%', sm: '15%', md: '20%' } }}
          />
        </Grid>
        <Grid item xs={3} textAlign='center'>
          <Typography variant='overline' color='#D8D8D8'>
            Market
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign='center'>
          <Typography variant='overline' color='#D8D8D8'>
            Exchange
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign='center'>
          <Typography variant='overline' color='#D8D8D8'>
            Spot
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign='center'>
          <Typography variant='overline' color='#D8D8D8'>
            Wallet
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign='center' sx={{ mt: 5 }}>
          <Typography variant='caption' color='#F6CED8'>
            @ Copyright 
            <Link href='https://nurudeen.it' sx={{ textDecoration: 'none', color: 'cyan'}}> nurudeen.it</Link> -
            Experimental Project
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
