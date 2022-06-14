import React, {useEffect, useState} from 'react';
import {Post as PostType} from '../../types/post';
import Post from '../Post';
import Loading from '../UI/Loading';
import {Box} from '@mui/material';
import {flexGridStyle} from '../../styles/common';
import NothingYet from '../UI/NothingYet';

const Posts = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            const data = await window.contract.findAllPosts();
            setPosts(data);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            {isLoading ?
                <Loading/>
                :
                <Box sx={flexGridStyle}>
                    {posts.length ?
                        posts.map(el => <Post key={el.id} post={el}/>)
                        :
                        <NothingYet/>
                    }
                </Box>
            }
        </>
    );
};

export default Posts;