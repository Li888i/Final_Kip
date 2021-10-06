import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "./a.css";

const StyledTableDiv = styled.div`
  width: 70vw;
  margin-left: 4vw;
  position: absolute;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  paper: {
    width: 300,
    height: 330,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const Mypage_go = (props) => {
  const { download } = props;

  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <Paper className={classes.paper}>
      <List dense component='div' role='list'>
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role='listitem'
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`채널 ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <div>
      <div className='book'>
        <h3>책갈피 설정</h3>
      </div>

      <Grid
        container
        spacing={8}
        justify='center'
        alignItems='center'
        className={classes.root}
      >
        <Grid item>{customList(left)}</Grid>
        <Grid item>
          <Grid container direction='column' alignItems='center'>
            <Button
              variant='outlined'
              size='medium'
              className={classes.button}
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label='move all right'
            >
              ≫
            </Button>
            <Button
              variant='outlined'
              size='medium'
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label='move selected right'
            >
              &gt;
            </Button>
            <Button
              variant='outlined'
              size='medium'
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label='move selected left'
            >
              &lt;
            </Button>
            <Button
              variant='outlined'
              size='medium'
              className={classes.button}
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label='move all left'
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right)}</Grid>
      </Grid>
    </div>
  );
};

export default Mypage_go;