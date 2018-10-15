import React from "react";

function renderPizzaList(pizzaList = []) {
  return pizzaList.map(res => {
    return <li key={res}>{res}</li>;
  });
}

const PizzaList = props => {
  return <div className="pizzaList">{renderPizzaList(props.pizzaList)}</div>;
};
export default PizzaList;
