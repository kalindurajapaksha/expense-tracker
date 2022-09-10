import React, { useState } from "react";

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [newExpense, setNewExpense] = useState({
        title: "",
        amount: "",
        date: ""
    })
    const titleChangeHandler = (event) => {
        // setNewExpense({ ...newExpense, title: event.target.value })
        // if your state update depends on previous state then use below method
        setNewExpense((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }

    const amountChangeHandler = (event) => {
        // setNewExpense({ ...newExpense, amount: event.target.value })
        setNewExpense((prevState) => {
            return { ...prevState, amount: event.target.value }
        })
    }

    const dateChangeHandler = (event) => {
        // setNewExpense({ ...newExpense, date: event.target.value })
        setNewExpense((prevState) => {
            return { ...prevState, date: event.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmitExpenseData({ ...newExpense, date: new Date(newExpense.date) })
        setNewExpense(
            {
                title: "",
                amount: "",
                date: ""
            }
        )
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newExpense.title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={newExpense.amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={newExpense.date} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel} >Cancel</button>
                    <button type="submit" >Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm