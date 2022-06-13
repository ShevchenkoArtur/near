import {connect, Contract, keyStores, WalletConnection} from 'near-api-js';
import getConfig from './config';

const nearConfig = getConfig(process.env.NODE_ENV || 'development');

export async function initContract() {
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const near = await connect({keyStore, ...nearConfig});

    window.walletConnection = new WalletConnection(near, 'near-app');

    window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
        viewMethods: ['findAllPosts', 'findPostDonations'],
        changeMethods: ['newPost', 'newDonation']
    });
}

export function signOut() {
    window.walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
}

export async function signIn() {
    await window.walletConnection.requestSignIn(nearConfig.contractName, 'near-app', 'http://localhost:3000/');
}
