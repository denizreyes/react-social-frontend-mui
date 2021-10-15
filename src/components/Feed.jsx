import React from 'react'
import {
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  
} from '@mui/icons-material';

import Post from './Post';

const Content= styled(Container)(({theme}) => ({
  paddingTop: theme.spacing(10),
}));

const Feed = () => {
  return (
    <Content>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Content>
  )
}

export default Feed
