import EmployersListItem from "../employers-list-item/empployers-list-item";
import "./employers-list.css";

const EmployersList = ({
  data,
  onDeleteItem,
  onToggleRise,
  onToggleIncrease,
}) => {
  return (
    <ul className="app-list list-group">
      {data.map((employee) => {
        return (
          <EmployersListItem
            {...employee}
            key={employee.id}
            onDelete={() => onDeleteItem(employee.id)}
            onToggleIncrease={() => onToggleIncrease(employee.id)}
            onToggleRise={() => onToggleRise(employee.id)}
          />
        );
      })}
    </ul>
  );
};

export default EmployersList;
