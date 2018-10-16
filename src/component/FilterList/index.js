import React from "react";

class FilterList extends React.Component {
  state = {
    searchText: ""
  };

  handleFilter = e => {
    const searchText = e.target.value;
    this.setState({ searchText });
  };
  render() {
    return (
      <form>
        <input value={this.state.searchText} onChange={this.handleFilter} />
        <button>Search</button>
      </form>
    );
  }
}
export default FilterList;
