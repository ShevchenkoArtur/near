import {Context, math, PersistentUnorderedMap, PersistentVector, u128} from 'near-sdk-as';

// Initializing an unordered map structure for saving posts collection to storage,
export const posts = new PersistentUnorderedMap<u32, Post>("posts"); // unique storage prefix

//Initializing a persistent vector structure for saving donation collection to storage,
export const donations = new PersistentVector<Donation>("donations"); // unique storage prefix

// Exporting Donation class, that define entity types and provide methods to work with donations collection
@nearBindgen // Decorator used to make classes serializable.
export class Donation {
    postId: u32;
    amount: u128;
    sender: string;
    message: string

    constructor(postId: u32, message: string) {
        this.postId = postId;
        // the amount of tokens received with this execution call.
        this.amount = Context.attachedDeposit;
        // Account ID of transaction sender.
        this.sender = Context.sender;
        this.message = message;
    }

    static newDonation(postId: u32, message: string): Donation {
        // Create donation to certain post, and add it to the end of the donations collection
        const donation = new Donation(postId, message);
        donations.push(donation);
        return donation;
    }

    static findPostDonations(postId: u32): Donation[] {
        // Returns donations that belong to a specific post
        const result: Donation[] = [];
        for (let i = 0; i < donations.length; i++) {
            if (donations[i].postId === postId) {
                result.push(donations[i]);
            }
        }
        return result;
    }
}

//Exporting Post class, that define entity types and provide methods to work with posts collection
@nearBindgen // Decorator used to make classes serializable.
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

    // Create post, and add it to posts collection with unique ID
    static newPost(desc: string, imgUrl: string): Post {
        const post = new Post(desc, imgUrl);
        posts.set(post.id, post);
        return post;
    }

    // Returns all posts
    static findAllPosts(): Post[] {
        return posts.values(0);
    }

    // Helper method for generation unique IDs
    private static generateUniqueID(): u32 {
        return math.hash32(Context.sender + "-" + Context.blockIndex.toString());
    }
}
