import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTags } from '../../../redux/tagsRedux';

const TagsTable = () => {
  const tags = useSelector(getTags);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#1976D2' }}>
            <TableCell>
              <Typography variant="h6" style={{ color: 'white', fontWeight: 'bold' }}>#</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" style={{ color: 'white', fontWeight: 'bold' }}>Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" style={{ color: 'white', fontWeight: 'bold' }}>Count</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{tag.name}</TableCell>
              <TableCell>{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TagsTable;
