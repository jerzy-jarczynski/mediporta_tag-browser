import React from 'react';
import { Typography } from '@mui/material';

const ErrorPage = ({ errorMessage }) => {
  return (
    <div>
      <Typography variant="h3">Error</Typography>
      <Typography variant="body1">{errorMessage}</Typography>
    </div>
  );
};

export default ErrorPage;
