import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Avatar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "white",
        width:"50rem",
        height: "10rem",
        top:"1rem",
        marginLeft:"2rem"

    },
    larg:{
        width:"10rem",
        height: "5rem",
    },
    avatar: {
        margin: '2rem',
    },
    reply: {
        display: 'flex',
        marginTop: '1rem',
        width:"47rem",
        height:"8rem",
        marginRight: '1rem',
        fontSize: '0.7rem',
        flexDirection: 'column',
        backgroundColor: '#eae8e8',
        borderRadius: '15px',
        flexWrap: "wrap"

    },
    name: {
        fontSize: '1.1rem',
        color: '#00284e',
        top: '1rem',
        //marginLeft: '1rem',
        //marginTop:"4rem"
    },
}));

function Reply() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.root}>
            <Box className={classes.avatar}>
                    <Avatar src="LW2.jpg" className={classes.large} />
                </Box>
            <div>
                
                <Box className={classes.reply}>
                    <Typography style={{ marginLeft: '0.9rem',paddingTop:"0.5rem"}}className={classes.name}><strong>Batool Bataineh</strong></Typography>
                    <Typography><strong style={{ marginLeft: '1rem' }}>3m ago</strong></Typography>
                    <Typography style={{ marginLeft: '0.9rem',paddingTop:"1rem"}}>adsds adsads asdasda dassdasd adsasda asdasdsa asdasdasd </Typography>

                </Box>
            </div>


        </Box>
    );
}
export default Reply;