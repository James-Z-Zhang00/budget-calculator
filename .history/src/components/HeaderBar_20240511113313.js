import Remaining from './components/Remaining';
import Currency from './components/Currency';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';

const HeaderBar = () => {
    return (
        <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                      <Currency />
                    </div>
                </div>
    );
}

export default HeaderBar;