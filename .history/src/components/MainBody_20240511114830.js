import ExpenseList from './body_components/ExpenseList';

const MainBody = () => {
    return (
        <div>
            <h3 className='mt-3'>Allocation</h3>
            <div className='row '>
                <div className='col-sm'>
                    <ExpenseList />
                </div>
            </div>
        </div>
    );
};

export default MainBody;