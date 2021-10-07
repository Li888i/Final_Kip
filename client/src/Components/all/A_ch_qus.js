//소개 카드
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './A_ch_qus.css';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { useEffect } from 'react'



const { kakao } = window;

const A_ch_qus = (props) => {

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
  }, []);



  return (
    <div className='A_ch_box'>
      <div className='A_ch_qus_'>
        <div className='intro_card'>
          <Card className='cardContent' sx={{ width: 735 }}>
            {/* <CardMedia
              component="img"
              height="450"
              image="https://images.chosun.com/resizer/ynIYRm82UlrMWf7Hg_2rIEV0Og8=/600x498/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/ADOM24EME5HWHGLN4HN4GGWNHI.jpg"
              alt="위치"
            /> */}
            <CardMedia height="450">
              <div id='myMap' style={{
                width: '735px',
                height: '450px'
              }}></div>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                A채널
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - 이메일 문의 : qqq11@naver.com<br></br>
                - 이메일 문의 : b2b2@google.com<br></br>
                - 전화 문의 : 02-1111-1111<br></br>
                - 서울특별시 노원구 OO동 A학원
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="http://localhost:3000/A_ch_intro" size="small">소개</Button>
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
            <div className='kip'>
              <p className='kip_good'>
                &nbsp;&nbsp;KIP 수강 인원<br />
                &nbsp;&nbsp;780명<br /><br />
                &nbsp;&nbsp;KIP 총 좋아요 수<br />
                &nbsp;&nbsp;1593<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default A_ch_qus;