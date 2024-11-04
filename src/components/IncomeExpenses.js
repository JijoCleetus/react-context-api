import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const incomeTotal = transactions
  .filter(item=>item.amount>=0)
  .reduce((acc, item) => (acc += item.amount), 0)
  .toFixed(2);

  const expenseTotal = transactions
  .filter(item=>item.amount<0)
  .reduce((acc, item) => (acc += item.amount), 0)
  .toFixed(2);

  console.log(incomeTotal)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">£{incomeTotal}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">£{Math.abs(expenseTotal)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
