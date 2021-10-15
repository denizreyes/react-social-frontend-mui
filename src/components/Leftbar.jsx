import React from 'react'
import {
  Container,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Home as HomeIcon,
} from '@mui/icons-material';

const Content= styled(Container)(({theme}) => ({
  paddingTop: theme.spacing(10),
  background: '#FFF',
  height: '100vh',
  borderRight: '1px solid #ECE7E7',
  position: 'sticky',
  top: 0,
  [theme.breakpoints.down('sm')]: {
    background: theme.palette.primary.main,
    color: '#FFF',
    border: 'none'
  }
}));

const Item= styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(3)
  },
  '& > svg': {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]:{
      fontSize: 18
    }
   },
  '& > p': {
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

const Leftbar = () => {
  return (
    <Content>
      <Item>
        <HomeIcon/>
        <Typography>Inicio</Typography>
      </Item>
      <Item>
        <HomeIcon/>
        <Typography>Inicio</Typography>
      </Item>
      <Item>
        <HomeIcon/>
        <Typography>Inicio</Typography>
      </Item>
      <Item>
        <HomeIcon/>
        <Typography>Inicio</Typography>
      </Item>
      <Item>
        <HomeIcon/>
        <Typography>Inicio</Typography>
      </Item>
      <Item>
        <HomeIcon/>
        <Typography>Inicio</Typography>
      </Item>
    </Content>
  )
}

export default Leftbar
