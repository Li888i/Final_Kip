import React from 'react';
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
} from '@material-ui/core';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const StyledTableDiv = styled.div`
  width: 70vw;
  margin-left: 4vw;
  position: absolute;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const A_ch_qus = (props) => {
  const { download } = props;

  return (
    <div align="center">
      <CssBaseline />
      <div>
        <Container>
          <Typography variant="h4" align="left" color="textPrimary">
            A채널
          </Typography>
        </Container>
        <Grid
          container
          spacing={2}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '18%',
          }}
        >
          <Grid item>
            <Button variant="contained" color="primary">
              <a href="http://localhost:3000/A_ch">채널 바로가기</a>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              <a href="http://localhost:3000/A_ch_intro">소개</a>
            </Button>
          </Grid>
        </Grid>
      </div>
      <Container style={{ marginleft: '10%' }}>
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '35vh',
            width: '130vh',
            marginTop: '3%',
            marginRight: '30%',
          }}
          variant="h5"
        >
          <br></br>
          --------------------------------------------------------------A채널--------------------------------------------------------------
          <br></br>
          <br></br>- 이메일 문의 : qqq11@naver.com
          <br></br>- 이메일 문의 : b2b2@google.com
          <br></br> - 전화 문의 : 02-1111-1111
          <br></br> - 서울특별시 노원구 OO동 A학원
        </Typography>
      </Container>
    </div>
  );
};

export default A_ch_qus;