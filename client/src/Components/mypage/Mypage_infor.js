import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import {
  Typography,
  Container,
} from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
//개인정보 수정
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  write_option_div: {
    marginLeft: '60%',
  },
  option_div_input: {
    marginLeft: '35%',
    padding: '3px 7px 3px 7px',
    borderRadius: '2px',
    border: 'solid 1px #ababab',
    background: 'white',
  },
  option_div_input_a: {
    marginLeft: '70%',
    padding: '3px 7px 3px 7px',
    borderRadius: '2px',
    border: 'solid 1px #ababab',
    background: 'white',
  },
  address: {
    marginLeft: '8%',
  }
}));

const Mypage_infor = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div>
      <Container>
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '30vh',
            width: '50vh',
            marginTop: '3%',
            marginLeft: '25%',
          }}
          variant="h5"
        >
          <PersonIcon />
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox">아이디</InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">권한</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>강사</MenuItem>
              <MenuItem value={2}>학습자</MenuItem>
            </Select>
          </FormControl>
          <br></br>
          <FormControl className={classes.address}>
            <InputLabel htmlFor="demo-customized-textbox">비밀번호</InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
          </FormControl>
          <br></br>
          <br></br>
          <div className={classes.write_option_div}>
            <a href="http://localhost:3000/join_change">
              <input className={classes.option_div_input_a} type='button' value='수정' />
            </a>
            <a href="http://localhost:3000">
              <input className={classes.option_div_input} type='button' value='비밀번호 찾기' />
            </a>
          </div>
        </Typography>
      </Container>
    </div>
  );
};

export default Mypage_infor;