import React from 'react';
import {Link , createStyles ,Box , makeStyles ,Theme,Typography}from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import CreateIcon from '@material-ui/icons/Create';
import { getData, getDataFile } from "../../data/index";


const useStyles = makeStyles(() =>
  createStyles({
    icons:{
        color:"#003d66",

    },
  
    }),
    );
export default function ClickEdit() {
    const data = getDataFile("NavInf", "En");
    const classes = useStyles();
    
    return ( 
        <Box display="flex" marginLeft="2rem" >
            < CreateIcon className={classes.icons}/>
            <Typography  variant="body2">
                {data.Edit}
            </Typography>      
        </Box>
     );
}
// export default ProfileNav;