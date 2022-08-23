import Card from "../UI/Card";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Get Filterd Years
  const filterdExpenses = props.items.filter((prop) => {
    return prop.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filterdExpenses} />
        {<ExpensesList items={filterdExpenses} />}
      </Card>
    </div>
  );
};

export default Expenses;
