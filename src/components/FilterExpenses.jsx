import './filterExpenses.css';

export const FilterExpenses = ({setFilter}) => {

  return (
    <div className='filterBox'>
        <label>
            Filter by category
        </label>
        <select onChange={(e)=>{
            setFilter(e.target.value)
        }}>
            <option checked> All </option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="various">Various</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
        </select>
    </div>
  )
}
