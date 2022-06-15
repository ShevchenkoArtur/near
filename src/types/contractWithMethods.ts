import {Contract} from 'near-api-js';
import {Post} from './post';
import {Donation} from './donation';

// Define types for contract with change and view methods
export interface ContractWithMethods extends Contract {
    findAllPosts: () => Promise<Post[]>;
    newPost: (params: {desc: string, imgUrl: string}) => Promise<void>;
    findPostDonations: (params: {postId: number}) => Promise<Donation[]>;
    sendFunds: (params: {postId: number, message: string}, gas: string, deposit: string) => Promise<void>;
}