import React from "react";
import "./My.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import styled from "styled-components";
//삭제 아이콘
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";


const StyledTableDiv = styled.div`
  width: 60vw;
  margin-left: 8vw;
  position: absolute;
  border: 0.5px solid #444444;
`;

const My = (props) => {
  const { download } = props;

  return (
    <div>
      <div>
        <StyledTableDiv>
          <Paper>
            <Table>
              <TableBody>
                {download.map((s) => {
                  return (
                    <TableRow>
                      <TableCell align='center'>{s.id}</TableCell>
                      <TableCell>
                        <img src={s.image} alt='profile' />
                      </TableCell>
                      <TableCell>{s.c_name}</TableCell>
                      <TableCell align='right'>
                        {s.del}
                        <Tooltip title='Delete'>
                          <IconButton aria-label='delete'>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </StyledTableDiv>
      </div>
    </div>
  );
};

export default My;
