import React from 'react'
import {Box , makeStyles } from '@material-ui/core';
import Comment  from './Comment.js'
import Post  from './Post.js'
const useStyles = makeStyles({
    root:{
        backgroundColor:'#ffffff',
        borderRadius: '12px',
        display:'flex',
        flexDirection:'column',
        padding:'0',
        margin:'4% 0% 4% 0%',
        boxShadow: "rgba(128,128,128, 0.40) -3px 5px 8px;",
        minWidth:"450px"
    }

});
const Case = () => {
    const classes = useStyles()
    return (
            <Box className = {classes.root}>
                <Post language = 'En'/>
                <hr/>
                <Comment language = 'En'/>
            </Box>
    )
}

export default Case
