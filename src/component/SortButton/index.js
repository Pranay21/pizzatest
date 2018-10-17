import React from "react";

class SortButton extends React.Component {
  handleSortButton = e => {
    e.preventDefault();
    this.props.handleSortButton();
  };

  render() {
    return (
      <form align="center" className="sortbutton">
        <br />
        <button className="pizzaSort" onClick={this.handleSortButton}>
          Sort
        </button>
      </form>
    );
  }
}
export default SortButton;
