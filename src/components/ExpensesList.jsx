import { Expense } from './Expense';
import './expensesList.css'

export const ExpensesList = ({
  expenses,
  filterExpenses, 
  setExpenseEdit, 
  expenseEdit, 
  handleDelete,
  filter
}) => {
  return (
    <div className='expensesList'>
        <h2>
            {expenses?.length > 0 ? 'Expenses' : 'No expenses yet'}
        </h2>
        {
          filter && filterExpenses.length == 0 && 
          <div style={{width: "100%", textAlign: "center"}}>
            <p>
              No expenses for this category
            </p>
          </div>
        }
        { filter ? filterExpenses.map((exp)=>{
          return <Expense expense={exp} 
          key={exp.id}
          setExpenseEdit={setExpenseEdit}
          handleDelete={handleDelete}/>
      }) : expenses.map((exp)=>{
          return <Expense expense={exp} 
          key={exp.id}
          setExpenseEdit={setExpenseEdit}
          handleDelete={handleDelete}/>
      }) }
    </div>
  )
}
