import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

const LoadingPage = () => {
  return (
    <div>
      <CircularProgress />
      <Typography variant="h6">Loading...</Typography>
    </div>
  );
};

export default LoadingPage;
