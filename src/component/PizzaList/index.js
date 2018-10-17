import React from "react";

function renderPizzaList(pizzaList = []) {
  if (Array.isArray(pizzaList)) {
    return pizzaList.map(res => {
      return (
        <li align="center" key={res}>
          {res}
        </li>
      );
    });
  } else {
    return <p>Invalid Pizza</p>;
  }
}
const PizzaList = props => {
  return <div className="pizzaList">{renderPizzaList(props.pizzaList)}</div>;
};
export default PizzaList;
