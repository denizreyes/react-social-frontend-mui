import React from 'react'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  
} from '@mui/icons-material';

const CardPost= styled(Card)(({theme}) => ({
  marginBottom: theme.spacing(5),
  '& .media': {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 150
    }
  }
}));

const Post = () => {
  return (
    <CardPost>
      <CardActionArea>
        <CardMedia
          component="image"
          image="https://wallpapershome.com/images/pages/pic_h/23243.jpg"
          title="My Post"
          className="media"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            My first post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ipsam deleniti maxime ratione veritatis, ut quod laudantium reprehenderit quas tempore beatae corrupti ea excepturi, voluptatem neque ab temporibus asperiores commodi.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ipsam deleniti maxime ratione veritatis, ut quod laudantium reprehenderit quas tempore beatae corrupti ea excepturi, voluptatem neque ab temporibus asperiores commodi.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </CardPost>
  )
}

export default Post
