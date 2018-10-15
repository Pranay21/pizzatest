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

  handleSortButton = () => {
    const sortedPizzaList = [...this.state.pizzaList].sort();
    this.setState({ pizzaList: sortedPizzaList });
  };

  render() {
    return (
      <main>
        <SortButton handleSortButton={this.handleSortButton} />
        <PizzaList pizzaList={this.state.pizzaList} />
      </main>
    );
  }
}

export default App;
