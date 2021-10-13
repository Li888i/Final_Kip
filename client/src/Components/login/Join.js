import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      flexGrow: 1,
      marginLeft: "13rem",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper1: {
    padding: theme.spacing(3),
    height: 480,
    textAlign: "center",
  },
}));

const Join = () => {
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
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper1}>
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

            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                id='standard-multiline-flexible'
                label='Name'
                multiline
                rowsMax={2}
              />
            </form>
            <Grid container justify='center'>
              <form className={classes.container} noValidate>
                <TextField
                  id='date'
                  label='Birthday'
                  type='date'
                  defaultValue='2000-01-01'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <form className={classes.root} noValidate autoComplete='off'>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor='grouped-select'>+82</InputLabel>
                <Select defaultValue='' id='grouped-select'>
                  <MenuItem value={1}>010</MenuItem>
                  <MenuItem value={2}>011</MenuItem>
                  <MenuItem value={3}>02</MenuItem>
                  <MenuItem value={4}>070</MenuItem>
                </Select>
              </FormControl>
              <TextField label=' ' id='standard-size-normal' />
            </form>

            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                id='standard-multiline-flexible'
                label='Email'
                multiline
                rowsMax={2}
              />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor='grouped-select'>@직접입력</InputLabel>
                <Select defaultValue='' id='grouped-select'>
                  <MenuItem value={1}>@gmail.com</MenuItem>
                  <MenuItem value={2}>@naver.com</MenuItem>
                  <MenuItem value={3}>@hanmail.net</MenuItem>
                </Select>
              </FormControl>
            </form>

            <FormControl component='fieldset'>
              <RadioGroup
                aria-label='Role'
                name='Role'
                value={value}
                onChange={handleChange}
              >
                {" "}
                <div>
                  <FormControlLabel
                    value='student'
                    control={<Radio />}
                    label='student'
                  />
                  <FormControlLabel
                    value='teacher'
                    control={<Radio />}
                    label='teacher'
                  />
                </div>
              </RadioGroup>{" "}
            </FormControl>

            <div className={classes.root}>
              <Button variant='outlined' color='secondary'>
                JOIN
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Join;