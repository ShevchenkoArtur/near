import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {signIn} from '../../store/action-creators/near';

const SignIn = () => {
    const dispatch = useAppDispatch();

    return (
        <Box display='flex' flexDirection='column'>
            <Typography>Please, login to use the app!</Typography>
            <Button
                onClick={() => dispatch(signIn())}
                style={{margin: '16px auto'}}
                variant='contained'
            >
                Sign in
            </Button>
        </Box>
    );
};

export default SignIn;