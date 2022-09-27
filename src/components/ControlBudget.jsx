import { useEffect, useState } from 'react';
import './controlBudget.css';
import { formatCurrenty } from '../helpers';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlBudget = ({budget, expenses, handleResetApp}) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(()=>{
        const totalSpent = expenses.reduce((total, expense)=>{
            return expense.quantity + total
        }, 0)
        const totalAvailable = budget - totalSpent;
        setSpent(totalSpent);
        setAvailable(totalAvailable);
    },[expenses])

  return (


    <div className="controlBudget">
        <div className="controlBudget__graphic">
            <div style={{width: "200px"}}>
                <CircularProgressbar styles={buildStyles({
                    textSize: "13px",
                    textColor: "black"
                })}
                value={available} 
                maxValue={budget} 
                text={`${spent / 10}% spent`} />
            </div>
        </div>
        <div className="controlBudget__content">
            <button className="controlBudget__reset" onClick={handleResetApp}>Reset App</button>
            <p>
                <span>Budget: </span> {formatCurrenty(budget)}
            </p>
            <p>
                <span className={available < 0 && 'negative'}>Available: </span> {formatCurrenty(available)}
            </p>
            <p>
                <span>Spent: </span> {formatCurrenty(spent)}
            </p>
        </div>
    </div>
  )
}
