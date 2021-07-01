import React from 'react';
import LawyersInfo from './MiddleCard'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    scrolling: {
        height: '90vh',
        overflowY: 'scroll',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
}));

const CardsInfo = () => {
    const msg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu ..."
    const msg2 = "ASDASDASD"
    const msg3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate euLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate euLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate euLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate euLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate euLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate euLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate euLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu"
    
    const classes = useStyles()
    return (
        <Grid container direction='row' justify="space-evenly"
            lg={7}
            md={6}
            sm={12}
            xs={12}
            spacing={1}
            //style={{ marginTop: "3rem" }}
            className={classes.scrolling}
        >
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo msg={msg} img='LW2.jpg' name="Maisam Khasawneh" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo msg={msg2} img='LW2.jpg' name="Batool Bataineh" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo msg={msg3} img='LW1.jpg' name="Boshra Aasi" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW4.jpg' name="Sara Al-damiri" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW6.jpg' name="Abdalrahman Al-ashgr" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW7.jpg' name="Mohammad Wahbeh" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW3.jpg' name="Maisam Khasawneh" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW2.jpg' name="Batool Bataineh" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW1.jpg' name="Boshra Aasi" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW4.jpg' name="Sara Al-damiri" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW6.jpg' name="Abdalrahman Al-ashgr" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW7.jpg' name="Mohammad Wahbeh" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW3.jpg' name="Maisam Khasawneh" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW2.jpg' name="Batool Bataineh" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW1.jpg' name="Boshra Aasi" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW4.jpg' name="Sara Al-damiri" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW6.jpg' name="Abdalrahman Al-ashgr" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>
            <Grid item container justify="center" xl={5} lg={5} xs={12} spacing={2}>
                <LawyersInfo img='LW7.jpg' name="Mohammad Wahbeh" location="Irbid" loclink="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone="0790749092" specialization="Personal Injury Lawyer" status="Practiced" />
            </Grid>

        </Grid>



    )

}

export default CardsInfo;