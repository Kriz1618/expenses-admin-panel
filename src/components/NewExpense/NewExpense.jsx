import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDataHandler = (enteredExpenseData) => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
