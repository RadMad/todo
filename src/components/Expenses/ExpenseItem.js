import { useContext } from 'react';
import AmountsContext from '../../store/amounts-context';

import React from 'react';

import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const amountsCtx = useContext(AmountsContext);

  const onDelete = () => {
    amountsCtx.removeAmount(props.id);
  }

  const onEdit = (event) => {
    amountsCtx.editAmount(props.id, event.target.value);
  }

  return (
    <li>
      <Card className='expense-item'>
        <div className='expense-item__description'>
          <input type="number" value={props.amount} onChange={onEdit}/>
        </div>
        <button onClick={onDelete}>Delete</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
