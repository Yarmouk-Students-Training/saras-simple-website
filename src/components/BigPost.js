import React from 'react'
import { Box, makeStyles, Grid } from '@material-ui/core';
import Reply from './Reply'
import Cases from './Case'
import Comment from './Cases/Comment.js'
import Post from './Cases/Post.js'
const useStyles = makeStyles({
    root: {

        backgroundColor:"white",
        display: 'flex',
        flexDirection: 'column',
        padding:'0',
        margin: '4% 0% 4% 0%',
        boxShadow: "rgba(128,128,128, 0.40) -3px 5px 8px;",
        minWidth: "500px"
    }

});
const Case = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.root}>
            <Post />
            <hr />
            <Comment />
            <hr />
            <Reply />
        </Grid>
    )
}

export default Case
