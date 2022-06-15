import {findAllPosts, findPostDonations} from '../index';
import {Donation, Post} from '../model';

describe('contract methods', () => {
    it('findAllPosts - should return posts ', () => {
        Post.newPost('desc', 'imgUrl');
        const postsArr = findAllPosts();
        expect(postsArr.length).toBe(1);
    });

    it('newPost - should create post ', () => {
        Post.newPost('desc', 'imgUrl');
        const postsArr = findAllPosts();
        expect(postsArr.length).toBe(1);
        expect(postsArr[0].desc).toStrictEqual('desc');
        expect(postsArr[0].imgUrl).toStrictEqual('imgUrl');
    });

    it('findPostDonations - should return posts', () => {
        Donation.newDonation(1, 'msg');
        const donationArr = findPostDonations(1);
        expect(donationArr.length).toBe(1);
    });

    it('newDonation - create donation', () => {
        Donation.newDonation(1, 'msg');
        const donationArr = findPostDonations(1);
        expect(donationArr.length).toBe(1);
        expect(donationArr[0].postId).toStrictEqual(1);
        expect(donationArr[0].message).toStrictEqual('msg');
    });
});
