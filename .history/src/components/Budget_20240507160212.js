import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
        {/* <span>Old Budget: {budget} </span> <br/> */}
        <span>Budget: </span>
        <input type="number" step="1" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
