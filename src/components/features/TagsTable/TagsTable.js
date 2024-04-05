import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTags } from '../../../redux/tagsRedux';

const TagsTable = () => {
  const tags = useSelector(getTags);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#1976D2', color: 'white', fontWeight: 'bold' }}>
            <TableCell style={{ borderRight: '1px solid white' }}>ID</TableCell>
            <TableCell style={{ borderRight: '1px solid white' }}>Name</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag, index) => (
            <TableRow key={index}>
              <TableCell style={{ borderRight: '1px solid #ddd' }}>{index + 1}</TableCell>
              <TableCell style={{ borderRight: '1px solid #ddd' }}>{tag.name}</TableCell>
              <TableCell>{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TagsTable;
