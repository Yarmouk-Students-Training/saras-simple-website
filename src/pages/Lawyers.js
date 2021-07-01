import React from 'react';
import CardsInfo from '../components/Lawyer/CardInfo';
import Cards from '../components/Lawyer/Cards';
import LawyerSidebar from '../components/Lawyer/LawyerSidebar';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    scrolling: {
        height: '86vh',
        overflowY: 'scroll',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    center: {
        [theme.breakpoints.only('md')]: {
          margin: "0 2%"
        },
      },
}));
const Lawyers = () => {
    const classes = useStyles();
    return (
        <Grid container direction='row' justify="center" >
            <Hidden only={['md', 'sm', 'xs']}>
                <Grid item lg={2} md ={3} className={classes.scrolling} style={{ marginTop: '1rem' }}>
                    <LawyerSidebar />
                </Grid>
            </Hidden>
            <CardsInfo />
            <Hidden only={["sm", "xs"]}>
                <Grid item lg={3} md={5} sm={5} className={classes.scrolling}>
                    <Cards />
                </Grid>
            </Hidden>

        </Grid>

    );
}

export default Lawyers;