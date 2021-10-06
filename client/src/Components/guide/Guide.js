import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const tutorialSteps = [
  {
    label: "'전체 채널'이 뭔가요??",
    imgPath: "https://i.ibb.co/8KZyT45/28-2.jpg",
  },
  {
    label: "'My 클래스'가 뭔가요?",
    imgPath: "https://i.ibb.co/TB0fsfr/28-3.jpg",
  },
  {
    label: "'Help 클래스'가 뭔가요?",
    imgPath: "https://i.ibb.co/vDcdFDk/28-4.jpg",
  },
  {
    label: "'KIP 챌린지'가 뭔가요?",
    imgPath: "https://i.ibb.co/ss1nCzL/28-5.jpg",
  },
  {
    label: "'영상 랭킹'이 뭔가요?",
    imgPath: "https://i.ibb.co/FqrtVcz/28-6.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
    marginLeft: 300,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 355,
    maxWidth: 500,
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
}));

const Guide = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position='static'
        variant='text'
        activeStep={activeStep}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Guide;