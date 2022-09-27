import './modal.css'
import { useState, useEffect } from 'react'
import CloseModal from '/src/assets/cerrar.svg'
import { Message } from './Message'

export const Modal = ({setModal, 
    modalAnimation, 
    setModalAnimation,
    saveExpense,
    expenseEdit,
    setExpenseEdit
}) => {

    const [formValues, setFormValues] = useState({
        name: '',
        quantity: '',
        category: ''
    });

    const [message, setMessage] = useState('');

    useEffect(()=>{
        if (Object.keys(expenseEdit).length > 0){
            setFormValues({
                name: expenseEdit.name,
                quantity: expenseEdit.quantity,
                category: expenseEdit.category,
                id: expenseEdit.id,
                date: expenseEdit.date
            })
        }
    },[expenseEdit])

    const handleSubmit = (e) => {
        setMessage('');
        e.preventDefault();
        if (Object.values(formValues).includes('') || Object.values(formValues).includes(0)){
            setMessage('Todos los campos son obligatorios');
            return
        } else {
            saveExpense(formValues);
            handleClose();
        }
    }

    const handleClose = () => {
        setModalAnimation(false);
        setExpenseEdit({});
        setTimeout(()=>{
            setModal(false);
        },500)  
    }

  return (
    <div className='modal'>
        <div className='modal__close' onClick={handleClose}>
            <img src={CloseModal} alt="Close icon"/>
        </div>
        <form className={`modal__form ${modalAnimation && 'animated'}`} onSubmit={handleSubmit}>
            <legend>{Object.keys(expenseEdit).length > 0 ? 'Edit Expense' : 'New Expense'}</legend>
            <fieldset className='modal__formField'>
                <label htmlFor='expenseName'>Name</label>
                <input type="text" id='expenseName' value={formValues.name} autoComplete="off" onChange={(e)=>{
                    setFormValues({
                        ...formValues,
                        name: e.target.value
                    })
                }}/>
            </fieldset>
            <fieldset className='modal__formField expenseQuant'>
                <label htmlFor='expenseQuant'>Quantity</label>
                <input type="number" id="expenseQuant" value={formValues.quantity} onChange={(e)=>{
                    setFormValues({
                        ...formValues,
                        quantity: Number(e.target.value)
                    })
                }}/>
            </fieldset>
            <fieldset className='modal__formField'>
                <label htmlFor='expenseCat'>Category</label>
                <select id='expenseCat' value={formValues.category} onChange={(e)=>{
                    setFormValues({
                        ...formValues,
                        category: e.target.value
                    })
                }}>
                    <option>-- Select --</option>
                    <option value="saving">Saving</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="various">Various</option>
                    <option value="leisure">Leisure</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </fieldset>
            <input type="submit" value={Object.keys(expenseEdit).length > 0 ? 'EDIT EXPENSE' : 'ADD EXPENSE'} className='modal__formSubmit'/>
            { message && 
            <Message type='error'>
                {message}
            </Message>}
        </form>
    </div>
  )
}
