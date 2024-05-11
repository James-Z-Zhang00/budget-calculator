import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import HeaderBar from './components/HeaderBar';
import MainBody from './components/MainBody';
import FooterBar from './components/FooterBar';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <HeaderBar />
                <MainBody />
                <>
            </div>
        </AppProvider>
    );
};

export default App;