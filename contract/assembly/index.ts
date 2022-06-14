import {Post, Donation} from './model';

// Post section start
export function findAllPosts(): Post[] {
  return Post.findAllPosts();
}

export function newPost(desc: string, imgUrl: string): Post {
  return Post.newPost(desc, imgUrl);
}

// Donation section start
export function findPostDonations(postId: u32): Donation[] {
  return Donation.findPostDonations(postId);
}

export function newDonation(postId: u32, message: string): Donation {
  return Donation.newDonation(postId, message);
}
