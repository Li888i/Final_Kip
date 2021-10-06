import React from "react";
import { Typography, CssBaseline, Grid, Container } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";


const StyledTableDiv = styled.div`
  width: 70vw;
  margin-left: 4vw;
  position: absolute;
`;

const useStyles = makeStyles((theme) => ({
  alert: {
    marginRight: "50%",
    position: "relative",
    width: "50%",
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: "1px solid",
  },
}));

const A_ch_ot = (props) => {
  const { download } = props;
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div align='center'>
      <CssBaseline />

      <h1 align='left'>A채널 - A학원 OT 영상</h1>

      <br></br>
      <div>
        <ReactPlayer
          style={{ position: "absolute" }}
          url='https://www.youtube.com/watch?v=IH58CcDxMv8'
        />
      </div>
      <Container>
        <Typography
          component='div'
          style={{
            backgroundColor: "#cfe8fc",
            height: "50vh",
            width: "50vh",
            marginLeft: "50%",
          }}
          variant='h5'
        >
          A학원이 학생들한테 하고 싶은 말*^^*
          <br />-------------------------------------------------------------
          <br /><br /><br />우리 학원에서 이런걸 배워갈 수
          <br />있으니 많은 사람들이 이 강의를 통해 <br />어쩌구 저쩌구 했으면 좋겠어요 호호
        </Typography>
      </Container>
    </div>
  );
};

export default A_ch_ot;