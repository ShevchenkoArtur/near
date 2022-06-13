import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {absoluteCenterStyle} from '../../styles/common';

const Loading = () => {
    return (
        <Box sx={absoluteCenterStyle}>
            <CircularProgress />
        </Box>
    );
}

export default Loading;