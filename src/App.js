import React from 'react'
import { 
  ThemeProvider,
  Grid
 } from '@mui/material';
import theme from './assets/css/theme';
import './assets/css/styles.css';

import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Add from './components/Add';

const sxGrid= {
  display: {
    xs: 'none',
    sm: 'flex'
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed/>
        </Grid>
        <Grid item sm={3} sx={sxGrid}>
          <Rightbar/>
        </Grid>
      </Grid>
      <Add/>
    </ThemeProvider>
  )
}

export default App
