import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initContract} from './utils';

(async () => {
    try {
        const {contract, walletConnection, nearConfig, currentUser} = await initContract();
        const root = ReactDOM.createRoot(
            document.getElementById('root') as HTMLElement
        );
        root.render(
            <React.StrictMode>
                <App
                    contract={contract}
                    walletConnection={walletConnection}
                    nearConfig={nearConfig}
                    currentUser={currentUser}
                />
            </React.StrictMode>
        );
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
})();
