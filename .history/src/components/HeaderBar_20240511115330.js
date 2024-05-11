import Budget from './header_components/Budget';
import Remaining from './header_components/Remaining';
import ExpenseTotal from './header_components/ExpenseTotal';
import Currency from './header_components/Currency';

const HeaderBar = () => {
    return (
        <div>
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
        </div>
    );
};

export default HeaderBar;