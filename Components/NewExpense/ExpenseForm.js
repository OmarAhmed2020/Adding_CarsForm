/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Home/Css/ExpenseForm.css";
function ExpenseForm(props) {
  const [EnterTitel, SetEnterdTitel] = useState("");
  const [EnterAmount, SetEnterAmount] = useState("");
  const [EnterDate, SetEnterDate] = useState("");
  /////////////////////////////////////////////////////////////
  //   const [UserInput, setUserInput] = useState({
  //     EnterdName: "",
  //     EnterdAmount: "",
  //     EnterdDate: "",
  //   });
  const CarChangeHandler = (event) => {
    SetEnterdTitel(event.target.value);
    /////////////////////////////////
    // setUserInput({
    //   ...this,
    //   EnterdAmount: event.target.value,
    // });
    //////////////////////////////////////////
    // setUserInput((prevStat) => {
    //     return { ...prevStat, EnterdAmount: event.target.value };
    //   });
  };
  const AmountChangeHandler = (event) => {
    SetEnterAmount(event.target.value);
    ////////////////////
    //     setUserInput({
    //       ...this,
    //       EnterdName: event.target.value,
    //     });
    //////////////////////////////////////////
    // setUserInput((prevStat) => {
    //   return { ...prevStat, EnterdName: event.target.value };
    // });
  };

  const DateChangeHandler = (event) => {
    SetEnterDate(event.target.value);
    ////////////////////////////////
    // setUserInput({
    //   ...this,
    //   EnterdDate: event.target.value,
    // });
    //////////////////////////////////////
    // setUserInput((prevStat) => {
    //     return { ...prevStat, EnterdDate: event.target.value };
    //   });
  };
  const FormHandler = (event) => {
    event.preventDefault();
    const data = {
      title: EnterTitel,
      amount: EnterAmount,
      date: new Date(EnterDate),
    };
    props.onsaveData(data);
    SetEnterdTitel("");
    SetEnterAmount("");
    SetEnterDate("");
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>CarName</label>
          <input type="text" value={EnterTitel} onChange={CarChangeHandler} />
        </div>
      </div>

      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="10000000 "
          step="100000"
          value={EnterAmount}
          onChange={AmountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01 "
          max="2022-01-01"
          value={EnterDate}
          onChange={DateChangeHandler}
        />
      </div>
      <div className="new-expense__actions ">
        <button type="submit" onClick={FormHandler}>
          Add Car
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
