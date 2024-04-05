import React from 'react';
import { Typography, Box } from '@mui/material';

const ErrorPage = ({ errorMessage }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
    >
      <Typography variant="h3">Error</Typography>
      <Typography variant="body1">{errorMessage}</Typography>
    </Box>
  );
};

export default ErrorPage;
