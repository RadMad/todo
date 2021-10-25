import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const inputChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by amount</label>
        <input type="number" value={props.filtered} onChange={inputChangeHandler}/>
      </div>
    </div>
  );
};

export default ExpensesFilter;
