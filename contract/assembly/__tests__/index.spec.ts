import {findAllPosts, findPostDonations, newDonation, newPost} from '../index';
import {Donation, donations, Post, posts} from '../model';

describe('contract methods', () => {
    it('newPost - should create post ', () => {
        const post = newPost('desc', 'imgUrl');
        expect(posts.getSome(post.id)).toStrictEqual(post);
    });

    it('findAllPosts - should return posts ', () => {
        const arr = new Array<number>(posts.length)
            .fill(0)
            .map<Post>((_, i) => Post.newPost('desc' + i.toString(), 'imgUrl' + i.toString()))
        expect(findAllPosts()).toStrictEqual(arr);
    });

    it('newDonation - should create donation', () => {
        const donation = newDonation(1);
        expect(donations[donations.length - 1]).toStrictEqual(donation);
    });

    it('findPostDonations - should return post donations ', () => {
        const array: Donation[] = [];
        for (let i = 0; i < donations.length; i++) {
            const donate = newDonation(1);
            array.push(donate);
        }
        expect(findPostDonations(1)).toStrictEqual(array);
    });
});
