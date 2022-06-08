import React, {useEffect} from 'react';
import {getContractData} from './store/action-creators/near';
import {useAppDispatch} from './hooks/useAppDispatch';
import {useAppSelector} from './hooks/useAppSelector';
import {Box, Button} from '@mui/material';
import Loading from './components/UI/Loading';

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
                    <h2>{contractData.currentUser.accountId}</h2>
                    :
                    <>
                        <p>Please, login to use the app!</p>
                        <Button variant='contained'>Sign in</Button>
                    </>
            }
        </Box>
    );
}

export default App;
