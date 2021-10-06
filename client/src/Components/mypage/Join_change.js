import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      flexGrow: 1,
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
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
    minWidth: 100,
  },
  paper1: {
    border: "0.5px solid",
    padding: theme.spacing(1),
    height: 420,
    textAlign: "center",
  },
  change: {
    size: "medium",
  },
}));

const Join_change = () => {
  const classes = useStyles();

  return (
    <div style={{ marginLeft: "25%" }} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper1}>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                id='standard-multiline-flexible'
                label='ID : wkdgyrud833'
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
            <Button
              variant='outlined'
              style={{ marginTop: "15%", marginLeft: "80%", width: " 22%" }}
            >
              <a href='http://localhost:3000'>수정하기</a>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Join_change;