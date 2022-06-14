import React, {FC} from 'react';
import {Avatar, Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

interface UserBarProps {
    userId: string
}

const UserBar: FC<UserBarProps> = ({userId}) => {
    return (
        <Box mb={1} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
            <Avatar sx={{width: 24, height: 24}}>{userId[0]}</Avatar>
            <Box ml={1}>
                <Typography variant='subtitle1'>
                    <Link style={{color: 'black', textDecoration: 'none'}} to={`/profile/${userId}`}>{userId}</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default UserBar;