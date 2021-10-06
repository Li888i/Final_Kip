import React from "react";
import "./Main.css";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "../cards/Hidden";
import Magazine from "../cards/Magazine";
import Popular from "../cards/Popular";


class Main extends React.Component {
  render() {
    return (
      <div className='app-body'>
        <Popular />
        <Hidden />
        <Magazine />
      </div>
    );
  }
}

export default withStyles()(Main);
