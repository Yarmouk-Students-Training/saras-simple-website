import React from 'react';
//import {Box , Avatar, makeStyles ,Button,Typography,Link, Grid } from '@material-ui/core';
import { Box, Typography, makeStyles, Grid, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
const useStyles = makeStyles({


    image: {
        margin: 'auto',
        display: 'block',
        // maxWidth: '100%',
        // maxHeight: '100%',
        padding: "3rem 0 0 3rem",
        position: ' relative',
        backgroundSize: 'cover',
        

    },
    img:{
        width:"16em",
        height:"16rem",

    },
    margin:{
        margin:"0 0 0 0",
        position: 'absolute',
        right: "8%",
        bottom: "9%",
        backgroundColor:"white",
        },

});

const Profile = () => {
    const classes = useStyles();
    return (

        <div className={classes.root} >

            <Grid item className={classes.image}>
                <img alt="complex" src='/Sandi.jpeg' className={classes.img}/>
                <div>
                    <Button variant="contained" size="small"  className={classes.margin}>
                            Edit
                    </Button>
                </div>
            </Grid>
         

        </div>

    );
}

export default Profile;







