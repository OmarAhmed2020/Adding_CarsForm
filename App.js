/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import { useState } from "react";
import ExpenseItem from "./Components/NewExpense/ExpenseItem";
import ExpenseForm from "./Components/NewExpense/ExpenseForm.js";
import Expenses from "./Components/NewExpense/Expenses.js";
import NewExpense from "./Components/NewExpense/NewExpense.js";
const Const_expenses = [
  {
    id: 1,
    title: "mercedes",
    amount: "1000000",

    date: new Date(Date.UTC(2021, 5, 11)),
  },

  { id: 2, title: "Bmw", amount: "780000", date: new Date(2021, 8, 5) },
  { id: 3, title: "Chevrolet", amount: "430000", date: new Date(2021, 8, 11) },
  { id: 4, title: "Fiat", amount: "300000", date: new Date(2021, 2, 4) },
];

function App() {
  const [expenses, setExpenses] = useState(Const_expenses);

  const ExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="cont">
      <NewExpense EH={ExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
