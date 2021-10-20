import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      flexGrow: 1,
      marginLeft: "17rem",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper2: {
    padding: theme.spacing(3),
    paddingTop: 140,
    height: 370,
    textAlign: "center",
  },
}));

const Login = () => {
  const classes = useStyles();

  useEffect(() => {
    axios.get("/");
  }, []);

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
        <Grid item xs={5}>
          <Paper className={classes.paper2}>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                id='standard-multiline-flexible'
                label='ID'
                multiline
                rowsMax={4}
              />
            </form>

            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                id='standard-multiline-flexible'
                label='Password'
                multiline
                rowsMax={2}
              />
            </form>
            <div className={classes.root}>
              <Button variant='contained' color='secondary'>
                LOGIN
              </Button>
            </div>
          </Paper>
        </Grid>
    </div>
  );
};
export default Login;