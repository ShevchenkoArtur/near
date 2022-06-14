import React, {useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {signIn} from '../../utils';
import {absoluteCenterStyle} from '../../styles/common';
import Loading from '../UI/Loading';

const SignIn = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSignIn = async () => {
        try {
            setIsLoading(true);
            await signIn();
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    }

    return (
        <>
            {isLoading ?
                <Loading/>
                :
                <Box sx={absoluteCenterStyle}>
                    <Typography variant='h5'>Please, login to use the app!</Typography>
                    <Box display='flex'>
                        <Button onClick={handleSignIn} sx={{margin: '16px auto'}} variant='contained'>Sign in</Button>
                    </Box>
                </Box>
            }
        </>
    );
};

export default SignIn;