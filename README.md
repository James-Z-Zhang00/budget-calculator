# React Budget Calculator

## Introduction

This project based on IBM open source project: https://github.com/ibm-developer-skills-network/ejtos-react_budget_app

I fixed the warning windows bug to display appropriate message according to the error and reinforced currency switching system.

*To run on local machines, terminal enter: `npm install` then `npm start`*

## Tech Stack

- Calculate remaining budget amount after enter spendings for each department
- Built on top of React framework using modularized components
- Improve components appearance by CSS
- Implemented onState and onContext method to tranfer and save data

## New Features

- Set limits for the maximum budget (20000), proper warning message will show up if exceeded
- Adjust spendings by clicking add/reduce button or submit a new allocation form
- Lock the allocation form that only accepts numbers for the amount of money
- Change currency used for the budget calculation by a drop down menu and the change will be applied everywhere on the page

## Screenshot

<img width="1203" alt="Screen Shot 2024-05-10 at 11 31 41 PM" src="https://github.com/James-Z-Zhang00/budget-calculator/assets/144994336/12e4d5bc-e8c0-40a3-8866-771f0e700064">

## Program Structure

The app was made by 3 main parts:
- HeaderBar
- MainBody
- FooterBar

```javascript
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
                <FooterBar />
            </div>
        </AppProvider>
    );
};

export default App;
```

File hierarchy

<img width="244" alt="Screen Shot 2024-05-30 at 7 27 38 PM" src="https://github.com/James-Z-Zhang00/budget-calculator/assets/144994336/39022566-e5da-44bd-b657-9dddc2eedbf8">

## Data Processing

Data was simply saved by `useContext` and `appContext`

`Provider` was used to pass data to components

```javascript
return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                currency: state.currency
            }}
        >
```
