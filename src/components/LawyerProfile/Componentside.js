import { Box, Avatar, makeStyles, Button, Typography, Link, Grid, Card, CardHeader, CardContent, IconButton } from '@material-ui/core';
import React from 'react';
import Reviews from './Reviews'
import Reviews2 from './Reviews2';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#ffffff",
        maxWidth: "17rem",
        minWidth: "17rem",
        padding: "0.9rem 0 0 3rem",
        width: "17rem",
        height: "30rem",
    },
    text: {
        fontSize: "0.8rem",
        margin: "0.1rem",
        marginBottom: "1rem",
        maxWidth: "18%",
        minWidth: "17rem",
        fontFamily:"Helvetica",
    },
   scroll:{
    overflowX:"hidden", 
    overflowY: "scroll",
    maxWidth:"25rem",
    minWidth:"17rem",
    height:"32rem"
    }
}));

const Componentside = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Typography color="textSecondary" className={classes.text}>  reviews ____________________________</Typography>
            <div className={classes.scroll}>
                <Reviews />
                <Reviews2 />
                <Reviews2 />
                <Reviews2 />
                <Reviews2 />
                <Reviews2 />
            </div>
        </Grid>
    );
}

export default Componentside;