import {Contract, WalletConnection} from 'near-api-js';
import {CurrentUser} from './currentUser';
import {ConfigConnect} from './configConnect';

export interface InitialContract {
    contract: Contract,
    currentUser: CurrentUser | null,
    nearConfig: ConfigConnect,
    walletConnection: WalletConnection
}