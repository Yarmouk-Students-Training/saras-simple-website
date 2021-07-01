import React, { Component } from 'react';
import More from '../components/blogCard'
import { Grid, Hidden } from '@material-ui/core';
import Cards from '../components/Lawyer/Cards';



const Blogs = () => {
    const msg1 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat facere architecto quae, dignissimos molestiae cupiditate quos repellendus, aspernatur, nisi facilis odio animi quas. Tempora culpa vitae corporis excepturi nostrum quis?"
    const msg2 = "HO"
    const title = "Security refers a person to the public Prosecutor on suspicion of killing his sister 20 years ago"
    const title2 = "Zain"
    return (
        <Grid container justify="center">
            <Grid container item
                justify="center"
                spacing={6}
                lg={9} md={6} xs={10}
                style={{ marginTop: "2%" }}
            >
                <Grid item lg={5} xs={10}>
                    <More title={title} img="1.jpg" text={msg1} />
                </Grid>
                <Grid item lg={5} xs={10}>
                    <More title={title2} img="m2.jpg" text={msg2} />
                </Grid>
                <Grid item lg={5} xs={10}>
                    <More img="LW7.jpg" text={msg2} />
                </Grid>
                <Grid item lg={5} xs={10}>
                    <More img="W6.jpg" text={msg2} />
                </Grid>
                <Grid item lg={5} xs={10}>
                    <More />
                </Grid>
                <Grid item lg={5} xs={10}>
                    <More />
                </Grid>
            </Grid>
            <Hidden only={['sm', 'xs']}>
                <Grid item lg={3} xs={4}>
                    <Cards />
                </Grid>
            </Hidden>
        </Grid>
    );
}

export default Blogs;