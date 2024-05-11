import ExpenseList from './ExpenseList';

const MainBody = () => {
    return (
        <div></div>
        <h3 className='mt-3'>Allocation</h3>
        <div className='row '>
            <div className='col-sm'>
                <ExpenseList />
            </div>
        </div>
    );
}

export default MainBody;