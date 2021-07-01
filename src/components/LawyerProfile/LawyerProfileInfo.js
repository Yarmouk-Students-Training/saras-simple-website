
import React from 'react';
//import {Box , Avatar, makeStyles ,Button,Typography,Link, Grid } from '@material-ui/core';
import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import HoverRating from "../RatingStars";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import Profile from "./Profile.js";
// import ProfileNav from "./ProfileNav.js";

const useStyles = makeStyles({
    // root: {
    //     flexGrow: "1",
    // },
    Blue: {
        color: 'Blue',
    },
    Sizet: {
        fontSize: "1.5rem",
    },
    // Info: {

    //     padding: "4rem  2rem 0 0",
    // },

    B: {
        fontSize: "2rem",
    },
    A: {
        fontSize: "0.8rem",
        marginLeft: "0.5rem",
    },
    flex: {
        display: "flex",
        alignItems: 'baseline',
    },
    down: {
        alignItems: 'baseline',
    },
    icon: {
        fontSize: "1rem",
        color: "#003d66",
    },
    FiberManualRecordIcon: {
        fontSize: "small",
        color: "#72bb53",
        align: 'baseline',
    }
});

const LawyerProfileInfo = () => {
    const classes = useStyles();
    return (
        // <div className={classes.root}>
        //     <Grid container xs={12} >
        //         <Profile />
        //         <Grid item container sm={6} xs={6} md={6} lg={6} className={classes.Info} >
        <div>
            <Grid item container direction="column" >
                <Box display="flex" className={classes.down}>
                    <Typography gutterBottom variant="body2" className={classes.B}>
                        Bushra Assi
                    </Typography>
                    <Typography gutterBottom variant="body2" className={[classes.A, classes.flex]} >
                        <LocationOnIcon className={classes.icon} /> <Typography color="textSecondary" variant="body2">Amman</Typography>
                    </Typography>
                </Box>
                <Typography variant="body2" gutterBottom className={classes.Blue}>
                    regular lawyer and lawful
                </Typography>
                <Box display="flex" flexDirection="row" justifyContent="space-betweeen">
                    <Box display="flex" flexDirection="column">
                        <Typography variant="body2" color="textSecondary">
                            Ratting
                        </Typography>
                        <Box display="flex" flexDirection="row" marginTop="0.5rem" alignItems='center' >
                            <Box className={classes.Sizet}>
                                4.5
                            </Box>
                            <HoverRating />
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" >
                        <Typography variant="body2" color="textSecondary">
                            Contribution
                        </Typography>
                        <Box display="flex" flexDirection="row" paddingLeft={2} borderLeft={1} marginTop="0.5rem"  >
                            <Box className={classes.Sizet}>
                                250
                            </Box>
                            <Box >
                                <FiberManualRecordIcon className={classes.FiberManualRecordIcon} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Typography variant="body2" color="textSecondary" borderButtom={10}  >
                    by 122 review
                </Typography>

                {/* <ProfileNav /> */}

            </Grid>
            {/*                
               </Grid> 
            </Grid>  */}

        </div>


    );
}

export default LawyerProfileInfo;