import React  from 'react';
import BigPost from '../components/BigPost'

import {Grid, Hidden, makeStyles } from '@material-ui/core';
import Cards from '../components/Lawyer/Cards';

const useStyles = makeStyles((theme) => ({
    center: {
      [theme.breakpoints.only('md')]: {
        margin:"0 2%"
      }
      
    },
  }));
const Post = () => {
    const classes = useStyles()
    return (
        <Grid container direction='row' justify="center" spacing={6}>
        <Grid item xl={8} lg={8} md={8} xs={8} className={classes.center}>
         <BigPost/>
         </Grid>
         <Hidden only={["sm", "xs"]}>
         <Grid item lg={3} md={5} sm={5} >
             <Cards/>
         </Grid>
         </Hidden>

     </Grid>



    )

}
export default Post;