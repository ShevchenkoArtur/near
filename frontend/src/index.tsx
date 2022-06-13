import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {initContract} from './utils';

(async () => {
    try {
        await initContract();
        const root = ReactDOM.createRoot(
            document.getElementById('root') as HTMLElement
        );
        root.render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    } catch (err) {
        console.error(err);
    }

})();
