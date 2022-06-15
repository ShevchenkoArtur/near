import {Post, Donation} from './model';

export function findAllPosts(): Post[] {
    return Post.findAllPosts();
}

export function newPost(desc: string, imgUrl: string): void {
    Post.newPost(desc, imgUrl);
}

export function findPostDonations(postId: u32): Donation[] {
    return Donation.findPostDonations(postId);
}

export function sendFunds(postId: u32, message: string): void {
    Donation.sendFunds(postId, message);
}
