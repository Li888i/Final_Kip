import React from "react";
import { Typography, CssBaseline, Container } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";


const StyledTableDiv = styled.div`
  width: 70vw;
  margin-left: 4vw;
  position: absolute;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
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
}));

const Mypage_memo = (props) => {
  const { download } = props;
  const classes = useStyles();

  return (
    <div align='center'>
      <CssBaseline />
      <Container style={{ marginleft: "10%" }}>
        <Typography
          component='div'
          style={{
            backgroundColor: "#cfe8fc",
            height: "50vh",
            width: "130vh",
            marginTop: "3%",
            marginRight: "30%",
            padding: "2vw",
          }}
          variant='h5'
        >
          - 메모장 -
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
          >
            <TreeItem nodeId='1' label='채널 A'>
              <TreeItem nodeId='2' label='국어 따라잡기 1' />
              <TreeItem nodeId='3' label='국어 따라잡기 2' />
              <TreeItem nodeId='4' label='국어 따라잡기 3' />
            </TreeItem>
            <TreeItem nodeId='5' label='채널 B'>
              <TreeItem nodeId='6' label='영어 한달 정복 1' />
              <TreeItem nodeId='7' label='영어 한달 정복 2' />
            </TreeItem>
            <TreeItem nodeId='9' label='채널 C'>
              <TreeItem nodeId='10' label='과학은 정말 신기해요 1' />
              <TreeItem nodeId='11' label='과학은 정말 신기해요 2' />
              <TreeItem nodeId='12' label='과학은 정말 신기해요 3' />
              <TreeItem nodeId='13' label='과학은 정말 신기해요 4' />
            </TreeItem>
            <TreeItem nodeId='14' label='채널 D'>
              <TreeItem nodeId='15' label='역사 바로 알기 1'></TreeItem>
            </TreeItem>
          </TreeView>
        </Typography>
      </Container>
    </div>
  );
};

export default Mypage_memo;