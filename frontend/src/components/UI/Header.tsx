import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {IconButton, Stack, Typography} from '@mui/material';
import {NavLink, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import {signOut} from '../../utils';
import {flexCenter, navLinkItemStyle} from '../../styles/common';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();

    return (
        <>
            {
                window.walletConnection.getAccountId() &&
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant='h6' sx={{flexGrow: 1}}>Ⓝ Donation Near App</Typography>
                        <Stack direction='row' spacing={2}>
                            <Box sx={navLinkItemStyle}>
                                <NavLink
                                    to='/'
                                    style={
                                        ({isActive}) => ({
                                            color: '#fff',
                                            textDecoration: isActive ? 'underline' : 'none'
                                        })
                                    }
                                >
                                    Posts
                                </NavLink>
                            </Box>
                            <Box sx={navLinkItemStyle}>
                                <NavLink
                                    to='/new'
                                    style={({isActive}) => ({
                                        color: '#fff',
                                        textDecoration: isActive ? 'underline' : 'none'
                                    })}
                                >
                                    New
                                </NavLink>
                            </Box>
                            <Box sx={flexCenter}>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ml: 2}}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{
                                            width: 32,
                                            height: 32
                                        }}>{window.walletConnection.getAccountId()[0]}</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                            >
                                <MenuItem
                                    onClick={() => navigate(`/profile/${window.walletConnection.getAccountId()}`)}>
                                    <Avatar>{window.walletConnection.getAccountId()[0]}</Avatar> Profile
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={() => signOut()}>
                                    <ListItemIcon>
                                        <Logout fontSize="small"/>
                                    </ListItemIcon>
                                    Sign Out
                                </MenuItem>
                            </Menu>
                        </Stack>
                    </Toolbar>
                </AppBar>
            }
        </>
    );
}

export default Header;
