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


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavigationIcon from '@mui/icons-material/Navigation';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const emails = ['aaa11@naver.com', 'b2b2@gmail.com'];

const useStyles = makeStyles((theme) => ({
  help_1: {
    border: "0.5px solid",
    borderColor: "#d0d0d0",
    margin: "2%",
    float: "left",
  },
  help_2: {
    border: "0.5px solid",
    borderColor: "#d0d0d0",
    margin: "2%",
    float: "left",
  },
  help_3: {
    border: "0.5px solid",
    borderColor: "#d0d0d0",
    margin: "2%",
    float: "left",
  },
  email_: {
    marginLeft: "7%",
  },
  but1: {
    marginBottom: "6%",
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  alert: {
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
      <DialogTitle id="simple-dialog-title">???????????? ???????????????.</DialogTitle>
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


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const nodemailer = require('nodemailer');
  const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1f7b6c31a85129",
      pass: "a5251a75e930fa"
    }
  };
  
  const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(info);
        return info.response;
      }
    });
  };
  
  let email_data = {
    from: 'wkdgyrud833@naver.com',
    to: 'wkdgyrud833@naver.com',
    subject: '?????? ?????????',
    text: '????????? ?????????.....?'
  }

  // send(email_data);

  return (
    <div className={classes.email_}>
      <Typography variant="subtitle1">A ??????: {selectedValue}</Typography><br />
      <Button className={classes.but1} variant="outlined" color="primary" onClick={handleClickOpen}>
        ????????? ??????
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      <div>
        <Card className={classes.help_1} sx={{ maxWidth: 365 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                A
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <NavigationIcon />
              </IconButton>
            }
            title="A??????"
            subheader="????????? ??????"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://cdn.xxl.thumbs.canstockphoto.co.kr/%EB%8F%84%EC%9B%80-%ED%81%B4%EB%A6%BD%EC%95%84%ED%8A%B8_csp14031319.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <center>?????? ?????? ????????????</center>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <button type="button" onClick={handleClick}>
                {show ? '?????? ??????' : '?????? ??????'}
              </button>
              <div className={classes.alert}>
                ?????? '???'??? ????????? '???'??? ??????????
                {show ? (
                  <Portal container={container.current}>
                    <span>'???'??? ???????????? ????????????. ?????? ??????????????? ?????? '??????', '??????'??? ???????????? ????????? ?????? ???????????? ?????? ???????????? ???????????? ???????????? ????????????.</span>
                  </Portal>
                ) : null}
              </div>
              <div className={classes.alert} ref={container} />
            </CardContent>
          </Collapse>
        </Card>
      </div>

      <div>
        <Card className={classes.help_2} sx={{ maxWidth: 365 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                B
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <NavigationIcon />
              </IconButton>
            }
            title="B??????"
            subheader="????????? ??????"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://cdn.xxl.thumbs.canstockphoto.co.kr/%EB%8F%84%EC%9B%80-%ED%81%B4%EB%A6%BD%EC%95%84%ED%8A%B8_csp14031319.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <center>?????? ?????? ????????????</center>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {/* <Typography paragraph>Method:</Typography> */}
              {/* <Typography paragraph>
              </Typography>
              <Typography paragraph>
              </Typography> */}
              <button type="button" onClick={handleClick}>
                {show ? '?????? ??????' : '?????? ??????'}
              </button>
              <div className={classes.alert}>
                '??????'??? ????????? ????????????????
                {show ? (
                  <Portal container={container.current}>
                    <span>??????????????? ???????????? ????????? ^^</span>
                  </Portal>
                ) : null}
              </div>
              <div className={classes.alert} ref={container} />
            </CardContent>
          </Collapse>
        </Card>
      </div>


      <div>
        <Card className={classes.help_2} sx={{ maxWidth: 365 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                C
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <NavigationIcon />
              </IconButton>
            }
            title="C??????"
            subheader="????????? ??????"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://cdn.xxl.thumbs.canstockphoto.co.kr/%EB%8F%84%EC%9B%80-%ED%81%B4%EB%A6%BD%EC%95%84%ED%8A%B8_csp14031319.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <center>?????? ?????? ????????????</center>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {/* <Typography paragraph>Method:</Typography> */}
              {/* <Typography paragraph>
              </Typography>
              <Typography paragraph>
              </Typography> */}
              <button type="button" onClick={handleClick}>
                {show ? '?????? ??????' : '?????? ??????'}
              </button>
              <div className={classes.alert}>
                '?????????/?????????'??? ?????? ????????? ????????????????
                {show ? (
                  <Portal container={container.current}>
                    <span>'?????????'??? ?????? ???????????????. '-???'??? ?????? ?????? ?????? ?????? '???'??? ?????? ????????? ?????????????????? '?????????'?????? ?????? ?????? ????????????.</span>
                  </Portal>
                ) : null}
              </div>
              <div className={classes.alert} ref={container} />
            </CardContent>
          </Collapse>
        </Card>
      </div>

    </div>
  );
};

export default Help;