import {ContractWithMethods} from './contractWithMethods';
import {WalletConnection} from 'near-api-js';

export {};

declare global {
    interface Window {
        contract: ContractWithMethods;
        walletConnection: WalletConnection;
    }
}