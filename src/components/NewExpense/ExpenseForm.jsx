import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { onSaveExpenseData, onCancel } = props;
  const [enteredTitle, setEnteredTitle] = useState("");
  const [amount, setAmount] = useState(0.01);
  const [date, setDate] = useState("");
  // const [userInput, setUSerInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: 0.0,
  //   enteredDate: "",
  // });

  const titleChangedHandler = (e) => {
    setEnteredTitle(e.target.value);
    // in this way we depend to the previous state and is dangerous because react does not change state immediately
    // setUSerInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    // setUSerInput((prevSate) => {
    //   return { ...prevSate, enteredTitle: e.target.value };
    // });
  };

  const amountChangedHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangedHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expense = {
      amount: +amount,
      title: enteredTitle,
      date: new Date(date),
    };

    onSaveExpenseData(expense);

    setEnteredTitle("");
    setAmount(0);
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangedHandler}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={amountChangedHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            onChange={dateChangedHandler}
            type="date"
            min="2020-01-01"
            max="2021-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
