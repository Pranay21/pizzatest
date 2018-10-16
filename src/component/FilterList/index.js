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
      </form>
    );
  }
}
export default FilterList;
