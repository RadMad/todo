import { createContext, useState } from 'react';

const AmountsContext = createContext({
  amounts: [],
  totalAmounts: 0,
  addAmount: (amount) => {},
  removeAmount: (id) => {},
  editAmount: (id, newValue) => {},
});

export function AmountsContextProvider(props) {
  const [userAmounts, setUserAmounts] = useState([]);

  function addAmountHandler(amount) {
    setUserAmounts((prevUserAmounts) => {
      return prevUserAmounts.concat(amount);
    });
  }

  function removeAmountHandler(id) {
    setUserAmounts(prevUserAmounts => {
      return prevUserAmounts.filter(el => el.id !== id);
    });
  }

  function editAmountHandler(id, newValue) {
    setUserAmounts(prevUserAmounts => {
      let newArr = [...prevUserAmounts];
      let el = prevUserAmounts.find( elem => elem.id === id);
      el.amount = newValue;

      return newArr;
    });
  }

  const context = {
    amounts: userAmounts,
    totalAmounts: userAmounts.length,
    addAmount: addAmountHandler,
    removeAmount: removeAmountHandler,
    editAmount: editAmountHandler,
  };

  return (
    <AmountsContext.Provider value={context}>
      {props.children}
    </AmountsContext.Provider>
  );
}

export default AmountsContext;
