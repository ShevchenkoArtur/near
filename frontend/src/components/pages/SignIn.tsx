import React, {useEffect} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {signIn} from '../../store/action-creators/near';
import {useNavigate} from 'react-router-dom';

const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('near-app_wallet_auth_key')) {
            navigate('/');
        }
    }, []);

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