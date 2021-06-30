import { ExpenseDate, Card } from "../";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};
