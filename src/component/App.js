import React from "react";
import { fetchPizza } from "../pizza";

class App extends React.Component {
  state = {
    PizzaList: []
  };

  componentDidMount() {
    fetchPizza().then(res => {
      this.setState({ PizzaList: res });
    });
  }

  render() {
    return <main>Hello</main>;
  }
}

export default App;
