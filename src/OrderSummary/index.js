import React from "react";

import Aux from "../hoc/Aux";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
        {props.ingredients[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <button>
        <strong>YES</strong>
      </button>
      <button>
        <strong>CANCEL</strong>
      </button>
    </Aux>
  );
};

export default OrderSummary;
