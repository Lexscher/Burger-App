import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Burger from "../Burger";
import BurgerBuildControls from "../BurgerBuildControls";
import Modal from "../Modal";
import OrderSummary from "../OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false
    };
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    this.updatePurchaseState = this.updatePurchaseState.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
    this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);
    this.setState({
      purchasable: sum > 0
    });
  }

  addIngredientHandler = type => {
    const previousCount = this.state.ingredients[type];
    const newCount = previousCount + 1;
    const updatedIndredients = {
      ...this.state.ingredients
    };
    updatedIndredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIndredients
    });
    this.updatePurchaseState(updatedIndredients);
  };

  removeIngredientHandler = type => {
    const previousCount = this.state.ingredients[type];
    if (previousCount <= 0) {
      return;
    }
    const newCount = previousCount - 1;
    const updatedIndredients = {
      ...this.state.ingredients
    };
    updatedIndredients[type] = newCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIndredients
    });
    this.updatePurchaseState(updatedIndredients);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    // {salad: true, meat: false, etc...}
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerBuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientSubtracted={this.removeIngredientHandler}
          dasabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
