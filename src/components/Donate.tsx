import React, {FC} from 'react';
import {Box, Paper, Typography} from '@mui/material';
import UserBar from './UI/UserBar';
import {utils} from 'near-api-js';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Donation} from '../types/donation';

interface DonateProps {
    donate: Donation
}

const Donate: FC<DonateProps> = ({donate}) => {
    return (
        <Box sx={{padding: '0 0 20px 0'}} width={400}>
            <Paper elevation={3} sx={{padding: '16px'}}>
                <UserBar userId={donate.sender}/>
                <Typography>Donated: {utils.format.formatNearAmount(donate.amount)} Ⓝ</Typography>
                <Box sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                    <MailOutlineIcon/>
                    <Box ml={1}>
                        <Typography>{donate.message ? donate.message : '...'}</Typography></Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default Donate;