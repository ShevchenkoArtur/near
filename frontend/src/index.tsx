import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {setupStore} from './store';
import {BrowserRouter} from 'react-router-dom';
import {initContract} from './utils';

(async () => {
    const contractData = await initContract();
    const store = setupStore();
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App contractData={contractData}/>
            </BrowserRouter>
        </Provider>
    );
})();


