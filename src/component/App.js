import React from "react";
import { fetchPizza } from "../pizza";
import PizzaList from "../../src/component/PizzaList";

class App extends React.Component {
  state = {
    pizzaList: []
  };

  componentDidMount() {
    fetchPizza().then(res => {
      this.setState({ pizzaList: res.pizzas });
    });
  }

  render() {
    return (
      <main>
        <PizzaList pizzaList={this.state.pizzaList} />
      </main>
    );
  }
}

export default App;
