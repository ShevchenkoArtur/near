import React, {FormEvent, useState} from 'react';
import {Box, Button, FormLabel, Paper, TextField, Typography} from '@mui/material';
import Loading from '../UI/Loading';
import {absoluteCenterStyle} from '../../styles/common';

const NewPost = () => {
    const [imgUrl, setImgUrl] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await window.contract.newPost({desc, imgUrl});
        setDesc('');
        setImgUrl('')
        setIsLoading(false);
    }

    return (
        <>
            {isLoading ?
                <Loading/>
                :
                <Box sx={absoluteCenterStyle}>
                    <Paper elevation={3} sx={{padding: '30px'}}>
                        <form onSubmit={handleSubmit}>
                            <FormLabel component='div' sx={{marginBottom: '16px'}}>
                                <Typography>Image URL</Typography>
                                <TextField
                                    value={imgUrl}
                                    onChange={({target}) => setImgUrl(target.value)}
                                    sx={{paddingTop: '8px'}}
                                />
                            </FormLabel>
                            <FormLabel>
                                <Typography>Description</Typography>
                                <TextField
                                    value={desc}
                                    onChange={({target}) => setDesc(target.value)}
                                    sx={{paddingTop: '8px'}}
                                />
                            </FormLabel>
                            <FormLabel component='div' sx={{display: 'flex'}}>
                                <Button type='submit'
                                        disabled={!imgUrl || !desc}
                                        variant='contained'
                                        sx={{margin: '16px auto'}}
                                >
                                    Create
                                </Button>
                            </FormLabel>
                        </form>
                    </Paper>
                </Box>
            }
        </>
    );
};

export default NewPost;