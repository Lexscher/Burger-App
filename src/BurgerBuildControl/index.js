import React from "react";
import classes from "./style.css";

const BurgerBuildControl = props => (
  <div className={classes.BurgerBuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.subtract}
      disabled={props.disabled}
    >
      -
    </button>
    <button className={classes.More} onClick={props.add}>
      +
    </button>
  </div>
);

export default BurgerBuildControl;
