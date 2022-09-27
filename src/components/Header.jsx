import './header.css';
import { NewBudget } from "./NewBudget"
import { ControlBudget } from "./ControlBudget"

export const Header = ({
        budget, 
        setBudget, 
        validBudget, 
        setValidBudget,
        expenses,
        setExpenses
    }) => {

      const handleResetApp = () => {
        setExpenses([]);
        setBudget(0);
        setValidBudget(false);
      }
    return (
      <header>
        <h1> Expense Control </h1>
        {validBudget ? (
            <ControlBudget budget={budget} expenses={expenses} handleResetApp={handleResetApp}/>
        ) : (
            <NewBudget budget={budget} setBudget={setBudget} setValidBudget={setValidBudget}/>
        )}
      </header>
    )
  }
  