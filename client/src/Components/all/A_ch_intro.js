//소개 카드
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './A_ch_intro.css';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



const A_ch_intro = (props) => {
  return (
    <div className='A_ch_box'>
    <div className='A_ch_intro_'>
      <div className='intro_card'>
        <Card className='cardContent' sx={{ width: 735 }}>
          <CardMedia
            component="img"
            height="450"
            image="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMDFfMjk0/MDAxNTY5OTE4MTQ2NDcz.aUuJGWLNdtMp15AD_KtgC-WR6HA3icxGXU2-UCqHgYEg.ohDYnHHNgMin5xjvoh94YLFOeS9EBlwwr0Fa163tcwcg.PNG.ipsimania3159/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-10-01_%EC%98%A4%ED%9B%84_5.14.51.png?type=w800"
            alt="정승제"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              A채널
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - 수학, 영어 전문 학원!<br></br>
              - 각 분야의 최고 선생님들이 가르치는 수업<br></br>
              - 상담선생님도 따로 계시니까 저희 학원으로 전화주세요 ^^<br></br>
              - 서울특별시 노원구 OO동 A학원
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="http://localhost:3000/A_ch_qus" size="small">문의</Button>
            <Button href="http://localhost:3000/A_ch" size="small">채널 바로가기</Button>
          </CardActions>
        </Card>
        <div className='intro_timeline_div'>
          <Timeline position="alternate" className='intro_timeline'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Hope</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Pass</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Keypoint</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Fun</TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
    </div>
  );
}



export default A_ch_intro;

// import React from 'react';
// import {
//   Typography,
//   CssBaseline,
//   Grid,
//   Container,
// } from '@material-ui/core';
// import styled from 'styled-components';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';


// const StyledTableDiv = styled.div`
//   width: 70vw;
//   margin-left: 4vw;
//   position: absolute;
// `;

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// const A_ch_intro = (props) => {
//   const { download } = props;

//   return (
//     <div align="center">
//       <CssBaseline />
//       <div>
//         <Container>
//           <Typography variant="h4" align="left" color="textPrimary">
//             A채널
//           </Typography>
//         </Container>
//         <Grid
//           container
//           spacing={2}
//           style={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             paddingRight: '18%',
//           }}
//         >
//           <Grid item>
//             <Button variant="contained" color="primary">
//               <a href="http://localhost:3000/A_ch">채널 바로가기</a>
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button variant="outlined" color="primary">
//               <a href="http://localhost:3000/A_ch_qus">문의</a>
//             </Button>
//           </Grid>
//         </Grid>
//       </div>
//       <Container style={{ marginleft: '10%' }}>
//         <Typography
//           component="div"
//           style={{
//             backgroundColor: '#cfe8fc',
//             height: '35vh',
//             width: '130vh',
//             marginTop: '3%',
//             marginRight: '30%',
//           }}
//           variant="h5"
//         >
//           <br></br>
//           --------------------------------------------------------------A채널--------------------------------------------------------------
//           <br></br>
//           <br></br>- 국어, 영어 전문 학원!
//           <br></br> - 각 분야의 최고 선생님들이 가르치는 수업
//           <br></br> - 상담선생님도 따로 계시니까 저희 학원으로 전화주세요 ^^
//           <br></br> - 서울특별시 노원구 OO동 A학원
//         </Typography>
//       </Container>
//     </div>
//   );
// };

// export default A_ch_intro;