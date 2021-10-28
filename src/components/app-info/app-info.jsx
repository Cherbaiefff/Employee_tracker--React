import "./app-info.css";

const AppInfo = (props) => {
  const amount = props.amount === 0 ? " Nobody works for you" : props.amount;
  const bonus = props.bonus === 0 ? " Nobody gets bonus" : props.bonus;
  return (
    <div className="app-info">
      <h1>Employees</h1>
      <h2>Amout of employees: {amount}</h2>
      <h2>Get bonus: {bonus}</h2>
    </div>
  );
};

export default AppInfo;
