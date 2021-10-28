import "./app-filter.css";

const AppFilter = (props) => {
  const btnsData = [
    { name: "all", label: "All Employees" },
    { name: "rise", label: "Promotion" },
    { name: "moreThan1000", label: "Salary more than > 1000$" },
  ];

  const btnsList = btnsData.map(({ name, label }) => {
    const active = props.filtered === name;
    const classN = active ? "btn btn-light" : "btn btn-outline-light";
    return (
      <button
        type="button"
        className={classN}
        key={name}
        onClick={() => props.onFilteredEmployee(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{btnsList}</div>;
};

export default AppFilter;
