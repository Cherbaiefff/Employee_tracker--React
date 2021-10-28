import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { searchedEmployee: "" };
  }

  updateSearchHandler = (e) => {
    const searchedEmployee = e.target.value;
    this.setState({ searchedEmployee });
    this.props.onUpdateSearch(searchedEmployee);
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.searchedEmployee}
        onChange={this.updateSearchHandler}
        className="form-control search-input"
        placeholder="Find an employee"
      />
    );
  }
}

export default SearchPanel;
