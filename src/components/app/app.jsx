import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import EmployersList from "../employers-list/employers-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchedEmployee: "",
      filtered: "all",
      idCounter: 4,
    };
  }

  deleteItemHandler = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((elem) => elem.id !== id);
      return {
        data: newData,
      };
    });
  };

  addNewEmployeeHandler = (employee) => {
    this.setState((state) => {
      const newEmployee = {
        ...employee,
        increase: false,
        rise: false,
        id: state.idCounter,
      };
      console.log(newEmployee);
      return {
        data: [...state.data, newEmployee],
        idCounter: (state.idCounter += 1),
      };
    });
  };

  toggleIncreaseHandler = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        return item.id === id ? { ...item, increase: !item.increase } : item;
      }),
    }));
  };

  toggleRiseHandler = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        return item.id === id ? { ...item, rise: !item.rise } : item;
      }),
    }));
  };

  searchEmployeeHandler = (items, searchedEmployee) => {
    if (searchedEmployee.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(searchedEmployee) > -1;
    });
  };

  updateSearchHandler = (searchedEmployee) => {
    this.setState({ searchedEmployee });
  };

  filterSelectHandler = (filtered) => {
    this.setState({ filtered });
  };

  filteredEmployees = (items, filtered) => {
    switch (filtered) {
      case "rise":
        return items.filter((item) => item.rise);
      case "increase":
        return items.filter((item) => item.increase);
      case "moreThan1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  render() {
    const { data, searchedEmployee, filtered } = this.state;
    const employees = this.state.data.length;

    const bonus = this.state.data.filter(
      (employee) => employee.increase
    ).length;

    const visibleData = this.filteredEmployees(
      this.searchEmployeeHandler(data, searchedEmployee),
      filtered
    );

    return (
      <div className="app">
        <AppInfo amount={employees} bonus={bonus} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.updateSearchHandler} />
          <AppFilter
            filtered={this.state.filtered}
            onFilteredEmployee={this.filterSelectHandler}
          />
        </div>

        <EmployersList
          data={visibleData}
          onDeleteItem={this.deleteItemHandler}
          onToggleIncrease={this.toggleIncreaseHandler}
          onToggleRise={this.toggleRiseHandler}
        />
        <EmployersAddForm onAddNewEmployee={this.addNewEmployeeHandler} />
      </div>
    );
  }
}

export default App;
