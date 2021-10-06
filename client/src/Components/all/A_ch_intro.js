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

const A_ch_intro = (props) => {
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
              <a href="http://localhost:3000/A_ch_qus">문의</a>
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
          <br></br>- 국어, 영어 전문 학원!
          <br></br> - 각 분야의 최고 선생님들이 가르치는 수업
          <br></br> - 상담선생님도 따로 계시니까 저희 학원으로 전화주세요 ^^
          <br></br> - 서울특별시 노원구 OO동 A학원
        </Typography>
      </Container>
    </div>
  );
};

export default A_ch_intro;