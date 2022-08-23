import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpensesForm = (props) => {
  const [enteredTtile, setEnteredTtile] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTtile(e.target.value);
  };

  const AmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const DateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTtile,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTtile("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTtile}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={AmountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2022-12-31"
              value={enteredDate}
              onChange={DateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpensesForm;
