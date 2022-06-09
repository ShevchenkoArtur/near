import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useAppSelector} from '../../hooks/useAppSelector';
import {IconButton, Stack, Typography} from '@mui/material';

const Header = () => {
    const {contractData} = useAppSelector(state => state.near);

    return (
        <>
            {
                contractData?.currentUser &&
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size='small' edge='start' color='inherit' sx={{marginRight: '8px'}}>
                            N
                        </IconButton>
                        <Typography component='div' variant='h6' sx={{flexGrow: 1}}>NearApp</Typography>
                        <Stack direction='row' spacing={2}>
                            <Button color='inherit'>Charity List</Button>
                            <Button color='inherit'>List</Button>
                            <Button color='inherit'>List</Button>
                            <Button color="inherit">
                                {contractData?.currentUser?.accountId}
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            }
        </>
    );
}

export default Header;
