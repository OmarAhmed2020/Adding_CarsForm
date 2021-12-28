/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Home/Css/ExpenseItem.css";
import "../Home/Css/ExpenseData.css";
import Card from "./Card";

function ExpenseItem(props) {
  // const [Title, setTitel] = useState(props.title);

  // const ChangeHandler = () => {
  //   setTitel("Updated");
  //   console.log(Title);
  // };
  return (
    <ul>
      <Card>
        <div className="expense-item">
          {props.date.toDateString()}

          <div className="expense-item__description ">
            <h2>{props.title}</h2>

            <div className="expense-item__price ">${props.amount}</div>
          </div>
          {/* <button onClick={ChangeHandler}> Chanege</button> */}
        </div>
      </Card>
    </ul>
  );
}

export default ExpenseItem;
// const month = props.date.toLocalString("en-US", { month: "long" });
// const day = props.date.toLocalString("en-US", { day: "2-digit" });
// const year = props.date.getFullYear();
