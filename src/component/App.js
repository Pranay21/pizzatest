import React from "react";
import { fetchPizza } from "../pizza";
import PizzaList from "../../src/component/PizzaList";
import SortButton from "../../src/component/SortButton";

class App extends React.Component {
  state = {
    pizzaList: []
  };

  componentDidMount() {
    fetchPizza().then(res => {
      this.setState({ pizzaList: res.pizzas });
    });
  }

  sortButton = () => {};

  render() {
    return (
      <main>
        <PizzaList pizzaList={this.state.pizzaList} />
        <SortButton SortButton={this.sortButton} />
      </main>
    );
  }
}

export default App;
