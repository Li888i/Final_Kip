import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styled from 'styled-components';
//문의 아이콘
import CallIcon from '@material-ui/icons/Call';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
//소개 아이콘
import InfoIcon from '@material-ui/icons/Info';
//강사가 채널 추가 하는 버튼
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const StyledTableDiv = styled.div`
       margin-left: 4vw;
       width: 70vw;
    position: absolute;
    border: 0.5px solid #444444;
    margin-top: 2vw;
`;

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '78%',
    },
}));


const All = (props) => {
    const { download } = props;
    const classes = useStyles();

    return (
        <div>

            <Tooltip title="채널 등록">
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<CloudUploadIcon aria-label="채널 등록"/>}
                    >
                        <a href="https://www.youtube.com/channel/UCuHozKOJixLypq6EV8lHhaw">채널 등록</a>
                    </Button>
            </Tooltip>
            <div>
                <StyledTableDiv>
                    <Paper>
                        <Table>
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
                                            <TableCell>{s.c_name}</TableCell>
                                            <TableCell align="center">
                                                {s.go}
                                            </TableCell>
                                            <TableCell align="center">
                                                {s.intro}
                                                <Tooltip title="introduce">
                                                    <IconButton aria-label="introduce">
                                                        <InfoIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell align="center">
                                                {s.qus}
                                                <Tooltip title="question">
                                                    <IconButton aria-label="question">
                                                        <CallIcon />
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

export default All;