import { useState } from "react";
import { Message } from "./Message";
import './newBudget.css';

export const NewBudget = ({
        budget, 
        setBudget, 
        setValidBudget
    }) => {

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setBudget(Number(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (budget < 0){
            setMessage("Error while updating budget");
        } else if (budget == 0){
            setMessage("You're budget can't be 0");
        } else {
            setValidBudget(true);
        }
    }

  return (
    <div className="newBudget__container">
        <form className="newBudget__form" onSubmit={handleSubmit}>
            <div className="newBudget__formField">
                <label>Define your Budget</label>
                <input type="number" onChange={handleChange}/>
                <button type="submit">
                    Add  
                </button>
            </div>
        </form>
        {message &&
             <Message type='error'>
                {message}
            </Message>}
    </div>
  )
}
