import React from 'react';

// import pour rendre le tableau responsive en le mettant dans un composant Box
// import Box from '@mui/material/Box';

// import pour le tableau
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell}  from '@mui/material';
import Paper from '@mui/material/Paper';

function TableAction (props) {

  // on reecupere le tableau avec le cours des actions en bourse
  const actionTab = props.actionTab;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 380 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                {/* <TableCell align="center">Evolution</TableCell> */}
                <TableCell align="center">Cours Action</TableCell>
                <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { 
              actionTab.map(row => (
                <TableRow
                    key={row[0]}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{row[1]}</TableCell>
                    <TableCell align="center">{row[0]}</TableCell>
                    {/* <TableCell align="center">{row[2]}</TableCell> */}
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TableAction;