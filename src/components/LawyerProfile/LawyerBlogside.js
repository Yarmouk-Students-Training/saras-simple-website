import {Box , Avatar, makeStyles ,Button,Typography,Link ,Grid,Card ,CardHeader ,CardContent ,IconButton} from '@material-ui/core';
import React from 'react';
import LawyerBlog from './LawyerBlog'

const useStyles = makeStyles(() => ({
    root:{
        backgroundColor:"#ffffff"
    },
    text:{
        fontSize:"0.9rem",
        margin:"0.1rem",
        marginBottom:"1rem",
        maxWidth:"20%",
        minWidth:"17rem",
    }
 })); 
 
 const LawyerBlogside =()=> {
    const classes = useStyles();
    return(
        <Grid className={classes.root} spacing={2}> 
            <LawyerBlog/>
            <LawyerBlog/>
            <LawyerBlog/>
        </Grid>
    );
}

export default LawyerBlogside;