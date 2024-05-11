import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
import HeaderBar from './components/HeaderBar';
import MainBody from './components/MainBody';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <HeaderBar />
                <h3 className='mt-3'>Allocation</h3>
                <MainBody />
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;