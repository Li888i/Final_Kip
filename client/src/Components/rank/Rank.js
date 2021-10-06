import React from 'react';
import './Rank.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const StyledTableDiv = styled.div`
    width: 60vw;
    margin-left: 2vw;
    position: absolute;
`;


const Rank = (props) => {
    const { download } = props;

    return (
        <div>
            <div>
                <StyledTableDiv>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">순위</TableCell>
                                    <TableCell align="center">강의</TableCell>
                                    <TableCell align="center">강의명</TableCell>
                                    <TableCell align="center">좋아요</TableCell>
                                    <TableCell align="center">
                                        그냥 그래요
                                    </TableCell>
                                    <TableCell align="center">
                                        별로에요
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {download.map((s) => {
                                    return (
                                        <TableRow>
                                            <TableCell align="center">
                                                {s.id}
                                            </TableCell>
                                            <TableCell align="center">
                                                <img
                                                    src={s.image}
                                                    alt="profile"
                                                />
                                            </TableCell>
                                            <TableCell>{s.name}</TableCell>
                                            <TableCell align="center">
                                                {s.good}
                                            </TableCell>
                                            <TableCell align="center">
                                                {s.soso}
                                            </TableCell>
                                            <TableCell align="center">
                                                {s.bad}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </StyledTableDiv>
            </div>
            <div>
                <input
                    class="search-bar"
                    type="text"
                    placeholder="  #수학 #탄젠트"
                />

                <Button class="button" variant="contained">
                    search
                </Button>
            </div>
        </div>
    );
};

export default Rank;