import React from "react";
import { ExpenseItem } from "..";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul>
      {props.items.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ExpensesList;
