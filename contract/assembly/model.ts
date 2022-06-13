import {Context, math, PersistentUnorderedMap, PersistentVector, u128} from 'near-sdk-as';

export const posts = new PersistentUnorderedMap<u32, Post>("posts");
export const donations = new PersistentVector<Donation>('donations');

@nearBindgen
export class Donation {
    postId: u32;
    amount: u128;
    sender: string;
    message: string

    constructor(postId: u32, message: string) {
        this.postId = postId;
        this.amount = Context.attachedDeposit;
        this.sender = Context.sender;
        this.message = message;
    }

    static newDonation(postId: u32, message: string): Donation {
        const donation = new Donation(postId, message);
        donations.push(donation);
        return donation;
    }

    static findPostDonations(postId: u32): Donation[] {
        const result: Donation[] = [];
        for (let i = 0; i < donations.length; i++) {
            if (donations[i].postId === postId) {
                result.push(donations[i]);
            }
        }
        return result;
    }
}

@nearBindgen
export class Post {
    id: u32;
    publisher: string;
    desc: string;
    imgUrl: string;

    constructor(desc: string, imgUrl: string) {
        this.id = Post.generateUniqueID();
        this.publisher = Context.sender;
        this.desc = desc;
        this.imgUrl = imgUrl;
    }

    static newPost(desc: string, imgUrl: string): Post {
        const post = new Post(desc, imgUrl);
        posts.set(post.id, post);
        return post;
    }

    static findAllPosts(): Post[] {
        return posts.values(0);
    }

    private static generateUniqueID(): u32 {
        return math.hash32(Context.sender + "-" + Context.blockIndex.toString());
    }
}
