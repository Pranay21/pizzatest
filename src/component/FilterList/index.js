import React from "react";

class FilterList extends React.Component {
  state = {
    searchText: ""
  };

  handleFilter = e => {
    this.setState({ searchText: e.target.value });
    this.props.handleFilter(e.target.value);
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
