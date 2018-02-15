/**
 * Considering that all data provided by the server
 * is static (hard coded, not stored in a database)
 * there is no problem in hard code all expectation data
 * instead of mocking http requests. To reset the data
 * you just need to restart the server.
 */

import * as API from './readableAPI';

describe('Readable API calls', () => {
    it('Should get all categories', async () => {
        const categories = await API.getCategories();
        expect(categories).toEqual({
            categories: [
                {
                    name: 'react',
                    path: 'react',
                },
                {
                    name: 'redux',
                    path: 'redux',
                },
                {
                    name: 'udacity',
                    path: 'udacity',
                },
            ],
        });
    });

    it('Shoul get the right posts by category', async () => {
        const posts = await API.getPostsByCategory('react');
        expect(posts).toEqual([
            {
                id: '8xf0y6ziyjabvozdd253nd',
                timestamp: 1467166872634,
                title: 'Udacity is the best place to learn React',
                body: 'Everyone says so after all.',
                author: 'thingtwo',
                category: 'react',
                voteScore: 6,
                deleted: false,
                commentCount: 2,
            },
        ]);
    });

    it('Should get all posts', async () => {
        const posts = await API.getPosts();
        expect(posts).toEqual([
            {
                id: '8xf0y6ziyjabvozdd253nd',
                timestamp: 1467166872634,
                title: 'Udacity is the best place to learn React',
                body: 'Everyone says so after all.',
                author: 'thingtwo',
                category: 'react',
                voteScore: 6,
                deleted: false,
                commentCount: 2,
            },
            {
                id: '6ni6ok3ym7mf1p33lnez',
                timestamp: 1468479767190,
                title: 'Learn Redux in 10 minutes!',
                body:
                    'Just kidding. It takes more than 10 minutes to learn technology.',
                author: 'thingone',
                category: 'redux',
                voteScore: -5,
                deleted: false,
                commentCount: 0,
            },
        ]);
    });

    it('Should add a post', async () => {
        const time = Date.now();
        const postObj = {
            id: '35435sd46',
            timestamp: time,
            title: 'teste',
            body: 'testando',
            author: 'weder',
            category: 'react',
        };
        // const post = JSON.stringify(...postObj);
        const response = await API.addPost(postObj);

        expect(response).toEqual({
            commentCount: 0,
            voteScore: 1,
            deleted: false,
            id: '35435sd46',
            timestamp: time,
            title: 'teste',
            body: 'testando',
            author: 'weder',
            category: 'react',
        });
    });

    it('Shoud get a specific post', async () => {
        const id = '6ni6ok3ym7mf1p33lnez';
        const post = await API.getPost(id);
        expect(post).toEqual({
            id: '6ni6ok3ym7mf1p33lnez',
            timestamp: 1468479767190,
            title: 'Learn Redux in 10 minutes!',
            body:
                'Just kidding. It takes more than 10 minutes to learn technology.',
            author: 'thingone',
            category: 'redux',
            voteScore: -5,
            deleted: false,
            commentCount: 0,
        });
    });
});
