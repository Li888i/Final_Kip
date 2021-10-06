import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Portal from '@material-ui/core/Portal';


const emails = ['aaa11@naver.com', 'b2b2@gmail.com'];

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  alert: {
    marginLeft: '20%',
    width: '50%',
    padding: theme.spacing(3),
    margin: theme.spacing(1, 0),
    border: '1px solid',
  },
}));


function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">이메일을 선택하세요.</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const Help = () => {
  const classes = useStyles();//Portal
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };//Portal
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  //portal <div - />
  return (
    <div>
      <Typography variant="subtitle1">A 채널: {selectedValue}</Typography><br/>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        이메일 선택
      </Button> 
      
      
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />

      <br></br>
      <br></br>
      <button type="button" onClick={handleClick}>
        {show ? '정답 접기' : '정답 확인'}
      </button>
      <div className={classes.alert}>
        '국물'은 어떻게 발음하나요?
        {show ? (
          <Portal container={container.current}>
            <span>궁물이라고 발음하면 됩니다 ^^</span>
          </Portal>
        ) : null}
      </div>
      <div className={classes.alert} ref={container} />


    </div>
  );
};

export default Help;