import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initContract} from './utils';
import {Provider} from 'react-redux';
import {setupStore} from './store';

(async () => {
    const store = setupStore();
    const {contract, walletConnection, nearConfig, currentUser} = await initContract();
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                    contract={contract}
                    walletConnection={walletConnection}
                    nearConfig={nearConfig}
                    currentUser={currentUser}
                />
            </Provider>
        </React.StrictMode>
    );
})();
