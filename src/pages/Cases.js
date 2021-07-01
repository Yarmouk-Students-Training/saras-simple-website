import { Grid, Hidden, Box, Typography } from '@material-ui/core';
import Sidebar from '../components/Cases/sidebar'
import React from 'react';
import Case from '../components/Cases/Case';
import Cards from '../components/Lawyer/Cards';
import FormDialog from '../components/Cases/Attorney';
import { useStyles }  from '../Styles/CasesStyles/CasesStyle'

const Cases = () => {
  const classes = useStyles()
  return (
    <Box>
      <Grid container direction='row' justify="center" spacing={4} >
        <Hidden only={['md', 'sm', 'xs']}>
          <Grid item lg={3} md={3} className={classes.scrolling}>
            <Sidebar language='En' />
          </Grid>
        </Hidden>
        <Grid item xl={6} lg={6} md={6} xs={8} className={[classes.center, classes.scrolling]}>
          <Box fullWidth={true} className={[classes.marginTop, classes.box, classes.flexRow]} >
            <Typography variant="h5" color="secondary">Recent Attorneys</Typography>
            <FormDialog language={"En"} />
          </Box>
          <Case language='En' />
          <Case language='En' />
          <Case language='En' />
          <Case language='En' />
          <Case language='En' />
          <Case language='En' />
          <Case language='En' />
          <Case language='En' />
          <Case language='En' />
          <Case language='En' />
          <Case language='En' />
        </Grid>
        <Hidden only={["sm", "xs"]}>
          <Grid item lg={3} md={4} sm={5} className={classes.scrolling}>
            <Cards />
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
}

export default Cases; 