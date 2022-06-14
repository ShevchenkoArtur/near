import React from 'react';
import {Box, Typography} from '@mui/material';
import {absoluteCenterStyle} from '../../styles/common';

const NotFound = () => {
    return (
        <Box sx={absoluteCenterStyle}>
           <Typography variant='h6'>404 Not Found</Typography>
        </Box>
    );
};

export default NotFound;