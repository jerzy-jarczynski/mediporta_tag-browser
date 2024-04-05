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
} from '@mui/material';
import { useSelector } from 'react-redux';
import { getTags } from '../../../redux/tagsRedux';

const TagsTable = () => {
  const tags = useSelector(getTags);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Obliczanie początkowego indeksu dla aktualnej strony
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
                <Typography
                  variant="h6"
                  style={{ color: 'white', fontWeight: 'bold' }}
                >
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="h6"
                  style={{ color: 'white', fontWeight: 'bold' }}
                >
                  Count
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tags
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((tag, index) => (
                <TableRow key={index}>
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
        count={tags.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TagsTable;
