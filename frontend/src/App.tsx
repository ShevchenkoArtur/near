import React, {useEffect} from 'react';
import {getContractData, signOut} from './store/action-creators/near';
import {useAppDispatch} from './hooks/useAppDispatch';
import {useAppSelector} from './hooks/useAppSelector';
import {Box, Button, Typography} from '@mui/material';
import Loading from './components/UI/Loading';
import SignIn from './components/pages/SignIn';

const App = () => {
    const {contractData, error, isLoading} = useAppSelector(state => state.near);
    const dispatch = useAppDispatch();
    const centeredStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    useEffect(() => {
        dispatch(getContractData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return (
            <Box sx={centeredStyle}>
                <Loading />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={centeredStyle}>
                {error}
            </Box>
        );
    }

    return (
        <Box sx={centeredStyle}>
            {
                contractData?.currentUser?.accountId
                    ?
                    <>
                        <Typography>{contractData.currentUser.accountId}</Typography>
                        <Button onClick={() => dispatch(signOut())}>out</Button>
                    </>
                    :
                    <SignIn />
            }
        </Box>
    );
}

export default App;
