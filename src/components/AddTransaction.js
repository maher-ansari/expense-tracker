import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [errMsg, setErrMsg] = useState('');
  const [amount, setAmount] = useState('  ');

  const { addTransaction,removeTransaction } = useContext(GlobalContext);

  const onInputChange=(e) => {
      setAmount(e.target.value);
      setErrMsg('');
  }

  const onAddHandler = e => {
    e.preventDefault();
    let dateTime = new Date();
    if(amount !=0){
      const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      dateTime:dateTime.toISOString(),
      amount: +amount
      }
      addTransaction(newTransaction);
      setAmount('');
    }else{
      setErrMsg('Please enter the INCOME');
    }

  }
  const onRemoveHandler =e=>{
    e.preventDefault();
    if(amount !=0){
    let dateTime = new Date();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      dateTime:dateTime.toISOString(),
      amount: -amount
    }
    removeTransaction(newTransaction);
    setAmount('');
    }else{
      setErrMsg('Please enter the EXPENSE');
    }
  }
 

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount</label>
          <input type="number" value={amount} onChange={onInputChange} placeholder="Enter amount..." />
          <label className="errLable">{amount==0?errMsg:''}</label>
        </div>
        <div className="btn-div">
        <button className="btn" onClick={onAddHandler}>Add</button>
        <button className="btn" onClick={onRemoveHandler}>Remove</button>
        </div>
      </form>
    </>
  )
}
