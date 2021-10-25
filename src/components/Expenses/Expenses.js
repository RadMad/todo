import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredAmount, setfilteredAmount] = useState('');

  const filterChangeHandler = (enteredAmount) => {
    setfilteredAmount(enteredAmount);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.amount.includes(filteredAmount);
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          filtered={filteredAmount}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
