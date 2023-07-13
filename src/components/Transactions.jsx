import React, { useContext, useState } from 'react';
import { Box, Chip, Grid, Pagination, Paper, Stack, Typography } from '@mui/material';

import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
import dummyData from '../utils/dummyData';

const paginationStyles = {
  '& .MuiPaginationItem-root': {
    color: 'white',
  },
};

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionPerPage] = useState(10);
  const indexOfLastProject = currentPage * transactionPerPage;
  const indexOfFirstProject = indexOfLastProject - transactionPerPage;
  const recentTransaction = transactions.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (event, value) => {
    event.preventDefault();
    setCurrentPage(value);
  };
  return (
    <Box sx={{ mt: 2, px: 1, maxWidth: '1440px', ml: 'auto', mr: 'auto' }}>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <Box sx={{ mb: 2 }}>
            {currentAccount ? (
              <Box>
                <Typography
                  variant='h5'
                  fontWeight='bold'
                  sx={{ color: '#2A120A', textAlign: 'center', mb: 2, mt: 3 }}
                >
                  Recent Transactions
                </Typography>
              </Box>
            ) : (
              <Box sx={{ px: 5 }}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                  sx={{ color: '#F1F8E0', textAlign: 'center', mb: 5, mt: 3 }}
                >
                  Connect Your Account To See Recent Transactions
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
        {recentTransaction.reverse().map((transaction, index) => (
          <Grid item xs={6} sm={6} md={3}>
            <Paper key={index} {...transaction} sx={{ p: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <a
                  href={`https://goerli.etherscan.io/address/${transaction.addressFrom}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'green'}}
                >
                  From: {shortenAddress(transaction.addressFrom)}
                </a>
                <a
                  href={`https://goerli.etherscan.io/address/${transaction.addressTo}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'red'}}
                >
                  To: {shortenAddress(transaction.addressTo)}
                </a>
                <a>Amount: {transaction.amount} ETH</a>
                <a> Message: {transaction.message}</a>
                <Chip
                  size='small'
                  sx={{ fontSize: '10px', mt: 0.5, }}
                  label={transaction.timestamp}
                />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ alignItems: 'center', mt: 2, }}>
        {transactions.length > 10 && (
          <Pagination
            color='primary'
            variant='outlined'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(transactions.length / transactionPerPage)}
            page={currentPage}
            onChange={paginate}
            size='medium'
            sx={paginationStyles}
          />
        )}
      </Stack>
    </Box>
  );
};
export default Transactions;
