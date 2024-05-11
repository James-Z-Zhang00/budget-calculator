import AllocationForm from './footer_components/AllocationForm';

const FooterBar = () => {
    return (
        <div>
            <h3 className='mt-3'>Change allocation</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <AllocationForm/>
                </div>
            </div>
        </div>
    );
};

export default FooterBar;
