import {connect, Contract, keyStores, WalletConnection, Near} from 'near-api-js';
import getConfig from './config';
import {ConfigConnect} from './types/configConnect';
import {KeyStore} from 'near-api-js/lib/key_stores';
import {CurrentUser} from './types/currentUser';
import {InitialContract} from './types/initialContract';

export const initContract = async (): Promise<InitialContract> => {
    const nearConfig: ConfigConnect = getConfig(process.env.NODE_ENV || 'development');

    const keyStore: KeyStore = new keyStores.BrowserLocalStorageKeyStore();

    const near: Near = await connect({keyStore, ...nearConfig, headers: {}});

    const walletConnection: WalletConnection = new WalletConnection(near, 'near-app');

    let currentUser: CurrentUser | null;
    if (walletConnection.getAccountId()) {
        currentUser = {
            accountId: walletConnection.getAccountId(),
            balance: (await walletConnection.account().state()).amount
        };
    } else {
        currentUser = null;
    }

    const contract: Contract = await new Contract(walletConnection.account(), nearConfig.contractName, {
        viewMethods: [],
        changeMethods: []
    })

    return {contract, currentUser, nearConfig, walletConnection};
}
