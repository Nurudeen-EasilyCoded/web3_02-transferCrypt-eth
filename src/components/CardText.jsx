import React, { useContext } from 'react';
import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { shortenAddress } from '../utils/shortenAddress';
import { TransactionContext } from '../context/TransactionContext';

const CardText = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: { sm: '40px' },
      }}
    >
      <Box
        sx={{
          marginBottom: { md: '50px', sm: '60px' },
          marginTop: { md: '60px' },
        }}
      >
        <Typography
          variant={isMobile ? 'h6' : 'h3'}
          sx={{ fontWeight: isMobile ? '900' : 'bold' }}
          className='text-gradient'
        >
          Transfer Quick <br />
          Across The Blockchain
        </Typography>
      </Box>
      <Box sx={{ marginBottom: { lg: '200px', md: '80px', sm: '50px' } }}>
        <Stack direction='row' spacing={isMobile ? 0 : 4} sx={{}}>
          <Chip
            size={isMobile ? 'small' : 'large'}
            color='primary'
            variant='outlined'
            label='Reliable'
            sx={{ color: '#D8D8D8', fontSize: isMobile ? '14px' : '23px',
            }}
          />
          <Chip
            size={isMobile ? 'small' : 'medium'}
            color='primary'
            variant='outlined'
            label='Secure'
            sx={{ color: '#D8D8D8', fontSize: isMobile ? '14px' : '23px' }}
          />
          <Chip
            size={isMobile ? 'small' : 'medium'}
            color='primary'
            variant='outlined'
            label='Low Gas Fee'
            sx={{ color: '#D8D8D8', fontSize: isMobile ? '14px' : '23px' }}
          />
        </Stack>
      </Box>
      <Box sx={{ py: 2 }}>
        <Typography
          sx={{ color: '#819FF7', fontSize: isMobile ? '12px' : '20px' }}
        >
          Wallet address:
        </Typography>
        {currentAccount ? (
          <Typography
            sx={{
              color: '#819FF7',
              fontSize: isMobile ? '12px' : '20px',
              letterSpacing: 5,
            }}
          >
            {shortenAddress(currentAccount)}
          </Typography>
        ) : (
          <Button
            variant='outlined'
            onClick={connectWallet}
            sx={{
              fontSize: isMobile ? '14px' : '20px',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            Connect a wallet
          </Button>
        )}
      </Box>
    </Box>
  );
};
export default CardText;
