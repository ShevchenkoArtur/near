import {ContractWithMethods} from './contractWithMethods';
import {WalletConnection} from 'near-api-js';

export {};

// Define types for window
declare global {
    interface Window {
        contract: ContractWithMethods;
        walletConnection: WalletConnection;
    }
}