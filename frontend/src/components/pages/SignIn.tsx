import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {signIn} from '../../utils';
import {absoluteCenterStyle} from '../../styles/common';

const SignIn = () => {
    return (
        <Box sx={absoluteCenterStyle}>
            <Typography variant='h5'>Please, login to use the app!</Typography>
            <Box display='flex'>
                <Button onClick={() => signIn()} sx={{margin: '16px auto'}} variant='contained'>Sign in</Button>
            </Box>
        </Box>
    );
};

export default SignIn;