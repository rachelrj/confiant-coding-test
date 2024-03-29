import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ResultTable = (props) => {
  const resultsFound = props.results &&
    props.results.length > 0;

  return (
    <>
      {
        resultsFound &&
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Path</TableCell>
                <TableCell align="right">Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.results.map((result) => (
                <TableRow key={result.name}>
                  <TableCell align="right">{result.name}</TableCell>
                  <TableCell align="right">{result.path}</TableCell>
                  <TableCell align="right">
                    <a href={result.html_url}
                      target='_blank'
                      rel='noreferrer'>Link</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
      {
        !resultsFound && props.results.error
      }
    </>
  );
};

ResultTable.propTypes = {
  children: PropTypes.node,
  results: PropTypes.array.isRequired,
};
export default ResultTable;
