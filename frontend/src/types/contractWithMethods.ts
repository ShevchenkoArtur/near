import {Contract} from 'near-api-js';
import {Post} from './post';
import {Donation} from './donation';

export interface ContractWithMethods extends Contract {
    findAllPosts: () => Promise<Post[]>;
    newPost: (params: {desc: string, imgUrl: string}) => Promise<Post>;
    findPostDonations: (params: {postId: number}) => Promise<Donation[]>;
    newDonation: (params: {postId: number, message: string}, gas: string, deposit: string) => Promise<Donation>;
}