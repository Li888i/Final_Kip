import React from "react";
import { Typography, CssBaseline, Grid, Container } from "@material-ui/core";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
//+눌렀을때
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
//진도 퍼센트
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box position='relative' display='inline-flex'>
      <CircularProgress variant='determinate' {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography
          variant='caption'
          component='div'
          color='textSecondary'
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const StyledTableDiv = styled.div`
  width: 70vw;
  margin-left: 4vw;
  position: absolute;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(27),
    },
  },
}));

function TransitionUp(props) {
  return <Slide {...props} direction='up' />;
}

const A_ch = (props) => {
  const { download } = props;

  /*체크박스*/
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  /*정렬방식 조정 슬라이드*/
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //퍼센트
  const classes = useStyles();
  const [progress, setProgress] = React.useState(100);
  const [progress_2, setProgress_2] = React.useState(90);
  const [progress_3, setProgress_3] = React.useState(70);
  const [progress_4, setProgress_4] = React.useState(10);
  const [progress_5, setProgress_5] = React.useState(0);

  return (
    <div align='center'>
      <CssBaseline />

      <div>
        <Container>
          <Typography variant='h4' align='left' color='textPrimary'>
            A채널
          </Typography>
        </Container>

        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "10%",
          }}
        >
          <Checkbox
            size='medium'
            defaultChecked
            color='primary'
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <Grid item>
            <Button variant='contained' color='primary'>
              <a href='http://localhost:3000/A_ch_intro'>소개</a>
            </Button>
          </Grid>
          <Grid item>
            <Button variant='outlined' color='primary'>
              <a href='http://localhost:3000/A_ch_ot'>OT</a>
            </Button>
          </Grid>

          <Grid item>
            <Button variant='contained' color='primary'>
              메모장
            </Button>
          </Grid>
        </Grid>
      </div>

      <Container style={{ marginleft: "10%" }}>
        <Typography
          component='div'
          style={{
            backgroundColor: "#f0f2f9",
            height: "37vh",
            width: "130vh",
            marginTop: "3%",
            marginRight: "30%",
          }}
          variant='h5'
        >
          <br></br>
          <img
            style={{ marginRight: "8%" }}
            width='180'
            height='140'
            src='https://i.ibb.co/48Yn1Fg/image.png'
          />
          <img
            style={{ marginRight: "8%" }}
            width='180'
            height='140'
            src='https://i.ibb.co/31t9zh4/2.png'
          />
          <img
            style={{ marginRight: "8%" }}
            width='180'
            height='140'
            src='https://i.ibb.co/JkfxQy1/3.png'
          />
          <img width='180' height='140' src='https://i.ibb.co/gVbC8bM/4.png' />
          <br></br>

          <a
            style={{ marginRight: "1%" }}
            href='http://localhost:3000/MyA_ch_video'
          >
            국어 때려잡기1
          </a>
          <Fab
            style={{ marginRight: "5%" }}
            color='primary'
            aria-label='add'
            size='small'
          >
            <Button onClick={handleClick(TransitionUp)}>
              <AddIcon />
            </Button>
          </Fab>

          <a
            style={{ marginRight: "1%" }}
            href='http://localhost:3000/MyA_ch_video'
          >
            국어 때려잡기2
          </a>
          <Fab
            style={{ marginRight: "5%" }}
            color='primary'
            aria-label='add'
            size='small'
          >
            <Button onClick={handleClick(TransitionUp)}>
              <AddIcon />
            </Button>
          </Fab>

          <a
            style={{ marginRight: "1%" }}
            href='http://localhost:3000/MyA_ch_video'
          >
            국어 때려잡기3
          </a>
          <Fab
            style={{ marginRight: "5%" }}
            color='primary'
            aria-label='add'
            size='small'
          >
            <Button onClick={handleClick(TransitionUp)}>
              <AddIcon />
            </Button>
          </Fab>

          <a
            style={{ marginRight: "1%" }}
            href='http://localhost:3000/MyA_ch_video'
          >
            국어 때려잡기4
          </a>
          <Fab color='primary' aria-label='add' size='small'>
            <div>
              <Button onClick={handleClick(TransitionUp)}>
                <AddIcon />
              </Button>

              <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message="'국어 때려잡기1' 강의가 플레이리스트에 추가되었습니다."
                key={transition ? transition.name : ""}
              />
            </div>
          </Fab>
          <br></br>
          <div style={{ marginLeft: "7.5%" }} className={classes.root}>
            <CircularProgressWithLabel size={60} value={progress} />
            <CircularProgressWithLabel size={60} value={progress} />
            <CircularProgressWithLabel size={60} value={progress_2} />
            <CircularProgressWithLabel size={60} value={progress_3} />
          </div>
        </Typography>
      </Container>

      <Container style={{ marginleft: "10%" }}>
        <Typography
          component='div'
          style={{
            backgroundColor: "#f0f2f9",
            height: "37vh",
            width: "130vh",
            marginTop: "3%",
            marginRight: "30%",
          }}
          variant='h5'
        >
          <br></br>
          <img
            style={{ marginRight: "8%" }}
            width='180'
            height='140'
            src='https://i.ibb.co/Gs5gZSf/English-lecture1.jpg'
          />
          <img
            style={{ marginRight: "8%" }}
            width='180'
            height='140'
            src='https://i.ibb.co/hYjdQw8/English-lecture2.jpg'
          />
          <img
            style={{ marginRight: "8%" }}
            width='180'
            height='140'
            src='https://i.ibb.co/g3MH578/English-lecture3.jpg'
          />
          <img
            width='180'
            height='140'
            src='https://i.ibb.co/qMgjzKZ/English-lecture4.jpg'
          />
          <br></br>

          <a
            style={{ marginRight: "1%" }}
            href='http://localhost:3000/MyA_ch_video'
          >
            English lecture1
          </a>
          <Fab
            style={{ marginRight: "5%" }}
            color='primary'
            aria-label='add'
            size='small'
          >
            <Button onClick={handleClick(TransitionUp)}>
              <AddIcon />
            </Button>
          </Fab>

          <a
            style={{ marginRight: "1%" }}
            href='http://localhost:3000/MyA_ch_video'
          >
            English lecture2
          </a>
          <Fab
            style={{ marginRight: "5%" }}
            color='primary'
            aria-label='add'
            size='small'
          >
            <Button onClick={handleClick(TransitionUp)}>
              <AddIcon />
            </Button>
          </Fab>

          <a
            style={{ marginRight: "1%" }}
            href='http://localhost:3000/MyA_ch_video'
          >
            English lecture3
          </a>
          <Fab
            style={{ marginRight: "5%" }}
            color='primary'
            aria-label='add'
            size='small'
          >
            <Button onClick={handleClick(TransitionUp)}>
              <AddIcon />
            </Button>
          </Fab>

          <a
            style={{ marginRight: "1%" }}
            href='http://localhost:3000/MyA_ch_video'
          >
            English lecture4
          </a>
          <Fab color='primary' aria-label='add' size='small'>
            <div>
              <Button onClick={handleClick(TransitionUp)}>
                <AddIcon />
              </Button>

              <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message="'국어 때려잡기1' 강의가 플레이리스트에 추가되었습니다."
                key={transition ? transition.name : ""}
              />
            </div>
          </Fab>
          <br></br>
          <div style={{ marginLeft: "7.5%" }} className={classes.root}>
            <CircularProgressWithLabel size={60} value={progress_2} />
            <CircularProgressWithLabel size={60} value={progress_3} />
            <CircularProgressWithLabel size={60} value={progress_5} />
            <CircularProgressWithLabel size={60} value={progress_5} />
          </div>
        </Typography>
      </Container>
    </div>
  );
};

export default A_ch;