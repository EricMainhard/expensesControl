import './addExpenseButton.css'
import addExpenseIcon from '/src/assets/nuevo-gasto.svg'
export const AddExpenseButton = ({handleNewExpense}) => {
  return (
    <div className="addExpense__button" onClick={handleNewExpense}>
        <img src={addExpenseIcon} alt="Add expense"/>
    </div>
  )
}
