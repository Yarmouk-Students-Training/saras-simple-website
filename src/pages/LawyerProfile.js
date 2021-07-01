import React from "react";
import { makeStyles, Box } from '@material-ui/core';
import Profile from "../components/LawyerProfile/Profile.js";
import LawyerProfileInfo from "../components/LawyerProfile/LawyerProfileInfo.js";
import SimpleTabs from "../components/LawyerProfile/nav.js";
import Componentside from "../components/LawyerProfile/Componentside.js";


const useStyles = makeStyles({
    root: {
        flexGrow: "1",
        background:"white"
    },
    Info: {

        padding: "3rem  0 0 2rem",
    },
    Info2: {

        padding: "0  1rem 5rem 0",
    },



});



const LawyerProfile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box display="flex"  >
                <Box display="flex" flexDirection="column" className={classes.Info2}>
                    <Profile />
                    <Componentside />
                </Box>

                <Box display="flex" sm={6} md={6} lg={6} className={classes.Info} flexDirection="column" >
                    <LawyerProfileInfo />
                    < SimpleTabs />
                </Box>
            </Box>
        </div>
    );
}

export default LawyerProfile;