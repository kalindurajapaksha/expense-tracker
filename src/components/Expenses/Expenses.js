import React, { useState } from 'react';

import Card from "../UI/Card"
import ExpensesFilter from '../UI/ExpensesFilter';
import ExpensesList from './ExpensesList';
import "./Expenses.css"

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020")
  const yearChangeHandler = year => {
    setSelectedYear(year)
  }
  const fiteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear)





  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter selected={selectedYear} onYearChange={yearChangeHandler} />
      </div>
      <div>
        <ExpensesList expenses={fiteredExpenses} />
      </div>
    </Card>
  )
}

export default Expenses