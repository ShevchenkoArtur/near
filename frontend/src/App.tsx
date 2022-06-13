import React from 'react';
import Header from './components/UI/Header';
import Router from './components/router/Router';
import {Box} from '@mui/material';

const App = () => {
    return (
        <>
            <Header />
            <Box sx={{padding: '20px'}}>
                <Router />
            </Box>
        </>
    );
}

export default App;
