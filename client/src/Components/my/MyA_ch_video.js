import React from "react";
import { Typography, CssBaseline, Container } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
//Q&A
import Portal from "@material-ui/core/Portal";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Box from "@material-ui/core/Box";


const StyledTableDiv = styled.div`
  width: 70vw;
  margin-left: 4vw;
  position: absolute;
`;

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

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

const MyA_ch_video = (props) => {
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

      <h1 align='left'>A채널 - 국어 때려잡기 재생목록</h1>

      <br></br>
      <div>
        <ReactPlayer
          style={{ position: "absolute" }}
          url='https://www.youtube.com/watch?v=HCoxGvyXz-0'
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
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>Memo
        </Typography>
      </Container>

      <Container>
        <Typography variant='h5' align='left' color='textPrimary'>
          국어 때려잡기 1 (국어 기초 강의 : 1강 문법)
        </Typography>
        <br></br>{" "}
      </Container>
      <div>
        <div>
          <h1 style={{ marginRight: "95%" }}>Q&A</h1>
          <button
            type='button'
            onClick={handleClick}
            style={{ marginRight: "95%" }}
          >
            {show ? "정답 접기" : "정답 확인"}
          </button>
          <div className={classes.alert}>
            '국물'은 어떻게 발음하나요?
            {show ? (
              <Portal container={container.current}>
                <span>궁물이라고 발음하면 됩니다 ^^</span>
              </Portal>
            ) : null}
          </div>
        </div>
        <div className='review'>
          <Box component='fieldset' mb={3} borderColor='transparent'>
            <div>
              <Typography component='legend'>- 평점 -</Typography>
              <Rating
                name='customized-icons'
                defaultValue={4}
                getLabelText={(value) => customIcons[value].label}
                IconContainerComponent={IconContainer}
              />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MyA_ch_video;