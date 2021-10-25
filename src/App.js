import React from 'react';
import { useContext } from 'react';
import AmountsContext from './store/amounts-context';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const App = () => {
  const amountsCtx = useContext(AmountsContext);

  return (
    <div>
      <NewExpense/>
      <Expenses items={amountsCtx.amounts} />
    </div>
  );
};

export default App;
