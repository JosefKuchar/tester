import React from 'react';
import { Typography, Link, Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer, Button } from '@material-ui/core';
import { Page } from '..';
import { words } from '../../words';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

interface IWord {
  name?: string;
  en?: string[],
  cs?: string[],
  audio?: number[],
  words?: IWord[],
  uuid?: string,
}

function tree(array: IWord[], depth: number) {
  let rows: any[] = [];

  array.forEach((node, index) => {
    if (typeof node.name !== 'undefined') {
      rows.push(<TableRow>
        <TableCell colSpan={2}>
          <Typography variant={depth === 0 ? 'h4' : depth === 1 ? 'h5' : 'h6'}>{node.name}</Typography>
        </TableCell>
      </TableRow>);
    }

    if (typeof node.cs !== 'undefined') {
      rows.push(<TableRow>
        <TableCell>{node.cs!.join(', ')}</TableCell>
        <TableCell>{node.en!.join(', ')}</TableCell>
      </TableRow>);
    }

    if (typeof node.words !== 'undefined') {
      rows.push(...tree(node.words, depth + 1));
    }
  });

  return rows;
}

function genRows() {
  return tree(words, 0).map((row, index) => React.cloneElement(row, { key: index }));
}

export class WordbankPage extends React.Component<{}, {}> {
  render() {
    genRows();

    return <Page title="Word bank">
      <Button color="primary" variant="contained" startIcon={<SwapHorizIcon></SwapHorizIcon>}>Swap order</Button>
      <Paper>
        <TableContainer style={{ maxHeight: 500 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Czech</TableCell>
                <TableCell>English</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {genRows()}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Page>;
  }
}
