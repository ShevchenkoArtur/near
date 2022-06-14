import React from 'react';
import {Box, Typography} from '@mui/material';
import {absoluteCenterStyle} from '../../styles/common';

const NothingYet = () => {
    return (
        <Box sx={absoluteCenterStyle}>
            <Typography variant='h5'>There's nothing yet</Typography>
        </Box>
    );
};

export default NothingYet;