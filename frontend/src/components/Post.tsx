import React, {FC, useEffect, useState} from 'react';
import {Post as PostType} from '../types/post';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Button, CardActionArea, CardActions, Divider, TextField} from '@mui/material';
import placeholder from '../images/placeholder-image.png';
import {utils} from 'near-api-js';
import {useNavigate} from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import UserBar from './UI/UserBar';

interface PostProps {
    post: PostType,
}

const Post: FC<PostProps> = ({post}) => {
    const [value, setValue] = useState<string>('0');
    const [message, setMessage] = useState<string>('');
    const [img, setImg] = useState<string>();
    const [sumOfDonation, setSumOfDonation] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(post.imgUrl);
                const imageBlob = await res.blob();
                if (imageBlob.type === 'image/jpeg') {
                    const imageObjectURL = URL.createObjectURL(imageBlob);
                    setImg(imageObjectURL);
                } else {
                    setImg(placeholder);
                }
            } catch (err) {
                console.error(err);
                setImg(placeholder);
            }
        })();
        (async () => {
            let sum = 0;
            const data = await window.contract.findPostDonations({postId: post.id});
            data.forEach(el => {
                sum += Number(utils.format.formatNearAmount(el.amount));
            });
            setSumOfDonation(sum);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSend = async () => {
        try {
            await window
                .contract
                .newDonation(
                    {postId: post.id, message},
                    "100000000000000",
                    utils.format.parseNearAmount(value)
                )
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Box sx={{padding: '0 0 20px 0'}}>
            <Card sx={{minWidth: 275, maxWidth: 275, padding: '16px'}} elevation={3}>
                <UserBar userId={post.publisher}/>
                <CardActionArea>
                    <CardMedia
                        onClick={() => navigate(`/history/${post.id}`)}
                        component="img"
                        height="140"
                        image={img}
                        sx={{objectFit: 'cover'}}
                    />
                </CardActionArea>
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
                        onClick={handleSend}
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