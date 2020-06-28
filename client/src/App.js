import React from 'react';
import Header from './components/Header';
import Tracker from './components/Tracker';
import './styles/app.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <div>
            <Provider store={store}>
                <Header />
                <Tracker />
            </Provider>
        </div>
    );
}

export default App;
