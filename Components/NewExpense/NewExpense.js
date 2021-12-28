/* eslint-disable no-undef */
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "../Home/Css/NewExpense.css";
const NewExpense = (props) => {
  const SaveData = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };

    props.EH(expenseData);
  };
  return (
    <div className="new-expense ">
      <ExpenseForm onsaveData={SaveData} />
    </div>
  );
};

export default NewExpense;
