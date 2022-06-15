import React, {FC, useEffect, useState} from 'react';
import {Post as PostType} from '../types/post';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Box, Button, CardActions, Divider, TextField} from '@mui/material';
import {utils} from 'near-api-js';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import UserBar from './UI/UserBar';
import PostImage from './PostImage';

interface PostProps {
    post: PostType,
}

export const DEFAULT_GAS = '100000000000000';

const Post: FC<PostProps> = ({post}) => {
    const [value, setValue] = useState<string>('0');
    const [message, setMessage] = useState<string>('');
    const [sumOfDonation, setSumOfDonation] = useState<number>(0);

    const computeDonationAmount = async () => {
        try {
            let sum = 0;
            const data = await window.contract.findPostDonations({postId: post.id});
            data.forEach(el => {
                sum += Number(utils.format.formatNearAmount(el.amount));
            });
            setSumOfDonation(Number(sum.toFixed(2)));
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        computeDonationAmount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sendFunds = async () => {
        try {
            await window.contract.sendFunds(
                {postId: post.id, message},
                DEFAULT_GAS,
                utils.format.parseNearAmount(value)
            );
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Box sx={{padding: '0 0 20px 0'}}>
            <Card sx={{minWidth: 275, maxWidth: 275, padding: '16px'}} elevation={3}>
                <UserBar userId={post.publisher}/>
                <PostImage postId={post.id} imgUrl={post.imgUrl}/>
                <CardContent>
                    <Typography variant="body2">
                        {post.desc}
                    </Typography>
                    <Divider sx={{margin: '8px 0'}}/>
                    <Typography variant="body2">
                        Donation: {sumOfDonation} Ⓝ
                    </Typography>
                </CardContent>
                <CardActions>
                    <MailOutlineIcon/>
                    <TextField
                        sx={{paddingLeft: '8px'}}
                        placeholder='Type your message...'
                        value={message}
                        onChange={({target}) => setMessage(target.value)}
                        fullWidth
                    />
                </CardActions>
                <CardActions>
                    <Box>
                        <Typography fontWeight='bold'>Ⓝ</Typography>
                    </Box>
                    <TextField
                        fullWidth
                        sx={{paddingLeft: '8px'}}
                        value={value}
                        onChange={({target}) => setValue(target.value)}
                        inputProps={{
                            type: 'number',
                            min: 0,
                            step: 0.01
                        }}
                    />
                </CardActions>
                <CardActions>
                    <Button
                        sx={{margin: '0 auto'}}
                        onClick={sendFunds}
                        variant='contained'
                    >
                        Send
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Post;