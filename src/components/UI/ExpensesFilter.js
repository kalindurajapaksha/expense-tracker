import React from "react";

import "./ExpensesFilter.css"

const ExpensesFilter = (props) => {
    const years = ["2019", "2020", "2021", "2022"]
    const yearChangeHandler = (event) => {
        props.onYearChange(event.target.value)
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    {years.map(year => {
                        return (
                            <option key={years.indexOf(year)} value={year}>
                                {year}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter