import React from 'react';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <div>
      <Box
        sx={{
          py: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: '#64B5F6',
          },
        }}
      >
        <a
          href="https://www.mediporta.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="Mediporta_LOGO.png"
            alt="Mediporta Logo"
            style={{ width: '200px', marginRight: '10px' }}
          />
        </a>
      </Box>
    </div>
  );
};

export default Header;
