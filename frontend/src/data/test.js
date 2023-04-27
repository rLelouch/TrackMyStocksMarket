import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function createData(name, code) {
  return { name, code};
}

const rows = [
  createData('India', 'IN'),
  createData('China', 'CN'),
  createData('Italy', 'IT'),
  createData('United States', 'US'),
  createData('Canada', 'CA'),
  createData('Australia', 'AU'),
  createData('Germany', 'DE'),
  createData('Ireland', 'IE'),
  createData('Mexico', 'MX'),
  createData('Japan', 'JP',)
];

export default function StickyHeadTable() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align="center">Cours Action</TableCell>
                <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}