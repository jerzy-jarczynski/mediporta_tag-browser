import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

const LoadingPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
    >
      <CircularProgress />
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};

export default LoadingPage;
