import { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // title is a pointer to the managed value
  // setTitle is the setter function for the value
  // useState always return 2 values
  const [title, setTitle] = useState(props.title) // using a react hook, should be called at this level

  const amount = '$' + props.amount
  const clickHandler = () => {
    // you must call the set function to update the UX
    setTitle('Updated!')
    console.log(title) // the title would still be the original
    // setTitle schedules the title to update, but doesn't update it right away
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem
