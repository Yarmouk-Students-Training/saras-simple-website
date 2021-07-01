import { Box, Avatar, makeStyles, Button, Typography, Link, Grid} from '@material-ui/core';
import Comment from '../Cases/Comment.js';
import CommentForNav from './CommentForNav'
import React, { useState } from 'react'


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#ffffff",
        padding: "0.5rem 0 0 3rem",
        overflowX: "hidden",
        overflowY: "scroll",
        height: "36rem"
    },

}));

const Commentnav = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <CommentForNav/>
            <CommentForNav/>
            <CommentForNav/>
            <CommentForNav/>
            <CommentForNav/>
        </Grid>
    );
}

export default Commentnav;