import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseInt(amount),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransction;
