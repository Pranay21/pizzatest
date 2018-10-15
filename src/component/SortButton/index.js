import React from "react";

class SortButton extends React.Component {
  handleSortButton = e => {
    e.preventDefault();
    this.props.handleSortButton();
  };

  render() {
    return (
      <form className="sortbutton">
        <button className="pizzaSort" onClick={this.handleSortButton}>
          Sort
        </button>
      </form>
    );
  }
}
export default SortButton;
