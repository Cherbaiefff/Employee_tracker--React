import { Component } from "react";
import "./emplyers-add-form.css";

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", salary: "" };
  }

  changeValueHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createNewEmployeeHandler = (e) => {
    e.preventDefault();
    const newEmployeeInfo = { ...this.state };
    if (newEmployeeInfo.name === "" && newEmployeeInfo.salary === "") {
      return;
    }
    this.props.onAddNewEmployee(newEmployeeInfo);
    this.setState({ name: "", salary: "" });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.createNewEmployeeHandler}
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What's employee's name?"
            name="name"
            value={name}
            onChange={this.changeValueHandler}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            name="salary"
            value={salary}
            onChange={this.changeValueHandler}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
