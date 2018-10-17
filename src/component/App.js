import React from "react";
import { fetchPizza } from "../pizza";
import PizzaList from "../../src/component/PizzaList";
import SortButton from "../../src/component/SortButton";
import FilterList from "../../src/component/FilterList";

class App extends React.Component {
  state = {
    pizzaList: [],
    filterPizzaList: [],
    loading: true
  };

  componentDidMount() {
    fetchPizza().then(res => {
      this.setState({
        pizzaList: res.pizzas,
        filterPizzaList: res.pizzas,
        loading: false
      });
    });
  }

  handleSortButton = () => {
    const sortedPizzaList = [...this.state.pizzaList].sort();
    this.setState({ pizzaList: sortedPizzaList });
  };

  handleFilter = searchText => {
    const inputlowerCase = searchText.toLowerCase();
    const filtered = [...this.state.filterPizzaList].filter(res =>
      res.toLowerCase().includes(inputlowerCase)
    );
    this.setState({ pizzaList: filtered });
  };

  render() {
    if (this.state.loading) {
      return <main>Loading...</main>;
    } else {
      return (
        <main>
          <FilterList handleFilter={this.handleFilter} />
          <SortButton handleSortButton={this.handleSortButton} />
          <PizzaList pizzaList={this.state.pizzaList} />
        </main>
      );
    }
  }
}

export default App;
