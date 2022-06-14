import React, {FC, useEffect, useState} from 'react';
import {CardActionArea} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import {useNavigate} from 'react-router-dom';
import placeholder from '../images/placeholder-image.png';

interface PostImageProps {
    postId: number;
    imgUrl: string;
}

const PostImage: FC<PostImageProps> = ({postId, imgUrl}) => {
    const navigate = useNavigate();
    const [img, setImg] = useState<string>();

    const loadImage = async (imageUrl) => {
        try {
            const data = await fetch(imageUrl);
            const imageBlob = await data.blob();
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
    }

    useEffect(() => {
        loadImage(imgUrl);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CardActionArea>
            <CardMedia
                onClick={() => navigate(`/history/${postId}`)}
                component="img"
                height="140"
                image={img}
                sx={{objectFit: 'cover'}}
            />
        </CardActionArea>
    );
};

export default PostImage;