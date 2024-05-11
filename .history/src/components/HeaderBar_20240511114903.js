import Budget from './Budget';
import Remaining from './header_components/Remaining';
import ExpenseTotal from './ExpenseTotal';
import Currency from './Currency';

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