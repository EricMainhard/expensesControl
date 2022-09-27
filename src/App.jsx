import { useState, useEffect } from 'react'
import { Header } from './components/Header';
import { AddExpenseButton } from "./components/AddExpenseButton"
import { NewBudget } from './components/NewBudget';
import { Modal } from './components/Modal';
import { idGenerator } from './helpers';
import { dateFormater } from './helpers';
import { ExpensesList } from './components/ExpensesList';
import {FilterExpenses} from './components/FilterExpenses';
import './App.css'

function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [validBudget, setValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem('expenses')) ?? []
  );
  const [filterExpenses, setFilterExpenses] = useState([]);
  const [expenseEdit, setExpenseEdit] = useState({});
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    if (Object.keys(expenseEdit).length > 0){
        setModal(true);
        setTimeout(()=>{
          setModalAnimation(true);
        },500)
    }
},[expenseEdit])

  useEffect(()=>{
    localStorage.setItem('budget', budget ?? 0);
  },[budget])

  useEffect(()=>{
    const budgetLS = Number(localStorage.getItem('budget'));
    if (budgetLS > 0){
      setValidBudget(true);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  },[expenses])

  useEffect(()=>{
    if (filter == 'All'){
      let filteredExpenses = expenses.filter((exp)=>{
        return exp.category.toLowerCase() != ''
      });
      setFilterExpenses(filteredExpenses);
    } else {
      let filteredExpenses = expenses.filter((exp)=>{
        return exp.category.toLowerCase() == filter.toLowerCase();
      });
      setFilterExpenses(filteredExpenses);
    }
  },[filter])

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(()=>{
      setModalAnimation(true);
    },500)
  }

  const saveExpense = (newExpense) => {
    if (newExpense.id){
      let updatedExpenses = expenses.map((expense) => expense.id === newExpense.id ? 
      newExpense : expense);
      setExpenses(updatedExpenses);
    } else {
      newExpense.id = idGenerator();
      newExpense.date = dateFormater(Date.now());
      setExpenses([...expenses, newExpense]);
    }
  }

  const handleDelete = (expense) => {
    let deleteTitle = expense.name;
    let deleteId = expense.id;
    if (confirm(`Are you sure you want to delete ${deleteTitle}?`)){
      let updatedExpenses = expenses.filter((exp) => {
        return exp.id != deleteId
      });
      setExpenses(updatedExpenses);
    } else {
      return
    }
  }

  return (
    <div className={`App ${modal && 'fixed'}`}>
      <Header budget={budget} 
      setBudget={setBudget} 
      validBudget={validBudget} 
      setValidBudget={setValidBudget}
      expenses={expenses}
      setExpenses={setExpenses}/>

      { validBudget && 
        <>
          <FilterExpenses setFilter={setFilter}/>
          <ExpensesList expenses={expenses}
          filterExpenses={filterExpenses}
          filter={filter} 
          setExpenseEdit={setExpenseEdit}
          handleDelete={handleDelete}/>
          <AddExpenseButton handleNewExpense={handleNewExpense}/>
        </>
      }
      {
        modal && 
        <Modal setModal={setModal} 
        modalAnimation={modalAnimation} 
        setModalAnimation={setModalAnimation}
        saveExpense={saveExpense}
        expenseEdit={expenseEdit}
        setExpenseEdit={setExpenseEdit}/>
      }
    </div>
  )
}

export default App
