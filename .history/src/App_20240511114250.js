import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import HeaderBar from './components/HeaderBar';
import MainBody from './components/MainBody';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <HeaderBar />
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