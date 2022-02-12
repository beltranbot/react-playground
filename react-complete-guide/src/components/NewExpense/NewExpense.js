import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  // the onSaveExpenseData property is up to you
  // you can name it whatever you want
  const SaveExpenseDataHandler= (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
