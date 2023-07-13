import React, { useContext } from 'react';
import {
  Box,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { TransactionContext } from '../context/TransactionContext';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <TextField
    hiddenLabel
    focused
    id='filled-hidden-label-small'
    variant='filled'
    size='small'
    placeholder={placeholder}
    type={type}
    name={name}
    step='0.0001'
    value={value}
    onChange={(e) => handleChange(e, name)}
    sx={{
      color: 'whit',
      '& label': {
        color: 'white',
      },
      '& .MuiFilledInput-input': {
        color: 'white',
      },
      '& .Mui-focused .MuiFilledInput-input': {
        color: 'white',
      },
      '& .Mui-focused label': {
        color: 'white',
      },
    }}
  />
);

const InputFileds = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
    handleFormInputChange,
    sendTransaction,
    isLoading,
    transactionSent
  } = useContext(TransactionContext);

  const submitTransaction = (event) => {
    const { addressTo, amount, message } = formData;
    event.preventDefault();

    if (!addressTo || !amount || !message) {
      alert('All form fields are required');
    } else {
      sendTransaction();

      setFormData({ addressTo: '', amount: '', message:'' })
    }
  };
  return (
    <Box
      sx={{ mt: 2, px: 1, maxWidth: '1440px', ml: 'auto', mr: 'auto', mb: 5 }}
    >
      <Grid
        container
        display='flex'
        justifyContent='center'
        alignItems='center'
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={7} sx={{}}>
          <Paper
            elevation={12}
            sx={{ borderRadius: 5, maxWidth: '650px', m: 'auto' }}
            className='eth-bg'
          >
            <Stack
              //component='form'
              sx={{ padding: '12px', m: 1 }}
              spacing={isMobile ? 1 : 4}
              noValidate
              autoComplete='off'
            >
              <Input
                placeholder='Address to'
                name='addressTo'
                type='text'
                handleChange={handleFormInputChange}
              />
              <Input
                placeholder='Amount (ETH)'
                name='amount'
                type='number'
                handleChange={handleFormInputChange}
              />
              <Input
                placeholder='Enter message'
                name='message'
                type='text'
                handleChange={handleFormInputChange}
              />
              {<Divider orientation='horizontal' flexItem />}
              {!isLoading ? (
                <button
                  type='button'
                  className='button'
                  onClick={currentAccount ? submitTransaction : connectWallet}
                >
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      padding: '5px',
                    }}
                  >
                    {currentAccount ? 'Send' : 'Connect a wallet first'}
                  </div>
                </button>
              ) : (
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                  <LinearProgress color='secondary' />
                  <LinearProgress color='success' />
                  <LinearProgress color='primary' />
                  <Typography>
                    ...Sending <small>(please do not refresh)</small>
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: 'center', mr: 'auto' }}>
            <Typography
              fontWeight='900'
              sx={{ fontSize: isMobile ? '30px' : '50px' }}
              className='text-gradient2'
            >
              Quick and Secure Transaction
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default InputFileds;
