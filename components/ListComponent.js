import {
  ListItem,
  TableFooter,
  TablePagination,
  IconButton,
} from "@material-ui/core";
import { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ListComponent = ({ movies, results, page, TableActions, getMovies }) => {
    //getting count all films
  const numberOfMovies = results.totalResults;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          style={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>{" "}
              <TableCell align="left">Poster</TableCell>
              <TableCell align="left">Year</TableCell>
              <TableCell align="left">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies != undefined
              ? movies.map((row, index) => (
                  // render row for every element from ARRAY moves
                  <TableRow key={index}>
                    <TableCell align="left" component="th" scope="row">
                      {row.Title}
                    </TableCell>
                    <TableCell align="left">
                      <a href={row.Poster} target="_blank">
                        Poster!
                      </a>
                    </TableCell>
                    <TableCell align="left">{row.Year}</TableCell>
                    <TableCell align="left">{row.Type}</TableCell>
                  </TableRow>
                ))
              : ""}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                page={parseFloat(page)}
                rowsPerPage={10}
                rowsPerPageOptions={[10]}
                ActionsComponent={TableActions}
                count={parseFloat(numberOfMovies)}
                onChangePage={getMovies}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ListComponent;
