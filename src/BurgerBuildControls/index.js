import React from "react";
import classes from "./style.css";
import BurgerBuildControl from "../BurgerBuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BurgerBuildControls = props => (
  <div className={classes.BurgerBuildControls}>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map(control => (
      <BurgerBuildControl
        key={control.label}
        label={control.label}
        add={() => props.ingredientAdded(control.type)}
        subtract={() => props.ingredientSubtracted(control.type)}
        disabled={props.dasabled[control.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      <strong>checkout~</strong>
    </button>
  </div>
);

export default BurgerBuildControls;
