import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  TablePagination,
  IconButton,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { getTags } from '../../../redux/tagsRedux';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { orderBy } from 'lodash';

const TagsTable = () => {
  const tags = useSelector(getTags);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (field) => {
    if (field === sortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };

  const sortedTags = orderBy(tags, sortBy, sortDirection);

  const startIndex = page * rowsPerPage + 1;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#1976D2' }}>
              <TableCell>
                <Typography
                  variant="h6"
                  style={{ color: 'white', fontWeight: 'bold' }}
                >
                  #
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      marginLeft: '8px',
                      marginRight: '8px',
                    }}
                  >
                    Name
                  </Typography>
                  <IconButton
                    onClick={() => handleSort('name')}
                    style={{ color: 'white', width: '24px' }}
                  >
                    {sortBy === 'name' ? (
                      sortDirection === 'asc' ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      )
                    ) : (
                      <React.Fragment>
                        <ArrowUpwardIcon />
                        <ArrowDownwardIcon />
                      </React.Fragment>
                    )}
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      marginLeft: '8px',
                      marginRight: '8px',
                    }}
                  >
                    Count
                  </Typography>
                  <IconButton
                    onClick={() => handleSort('count')}
                    style={{ color: 'white', width: '24px' }}
                  >
                    {sortBy === 'count' ? (
                      sortDirection === 'asc' ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      )
                    ) : (
                      <React.Fragment>
                        <ArrowUpwardIcon />
                        <ArrowDownwardIcon />
                      </React.Fragment>
                    )}
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedTags
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((tag, index) => (
                <TableRow
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'inherit',
                  }}
                >
                  <TableCell>{startIndex + index}</TableCell>
                  <TableCell>{tag.name}</TableCell>
                  <TableCell>{tag.count}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={sortedTags.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TagsTable;
