import { useState } from 'react';
import { HeaderCard } from './components';
import { Box } from '@mui/material';
import InputFileds from './components/InputFileds';
import Transactions from './components/Transactions';
import Footer from './components/Footer';

function App() {
  return (
    <Box className='header-bg-gradient'>
      <HeaderCard />
      <InputFileds />
      <Transactions />
      <Footer />
    </Box>
  );
}

export default App;
