import {connect, Contract, keyStores, WalletConnection} from 'near-api-js';
import getConfig from './config';

const nearConfig = getConfig(process.env.NODE_ENV || 'development');

// Initializing contract and set global variables
export async function initContract() {
    // create a keyStore for signing transactions using the user's key
    // which is located in the browser local storage after user logs in
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();

    // Initializing connection to the NEAR testnet
    const near = await connect({keyStore, ...nearConfig});

    // Initialize wallet connection
    window.walletConnection = new WalletConnection(near, 'near-app');

    // Initializing our contract APIs by contract name and configuration
    window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
        // View methods are read-only – they don't modify the state
        viewMethods: ['findAllPosts', 'findPostDonations'],
        // Change methods can modify the state
        changeMethods: ['newPost', 'newDonation']
    });
}

export function signOut() {
    // signOut from account
    window.walletConnection.signOut();
    // reload the page
    window.location.replace(window.location.origin + window.location.pathname);
}

export async function signIn() {
    //contract requesting access
    await window.walletConnection.requestSignIn(
        nearConfig.contractName, // Near account where contract is deployed
        'near-app', // optional title
        process.env.REACT_APP_SUCCESSS_URL || 'http://localhost:3000/' // redirect to URL upon success
    );
}
