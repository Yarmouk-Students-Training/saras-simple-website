import React from 'react';

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    typography: {
        textShadow: "0px 0px 3px"
    }
})

const ImageHeader = (props) => {
    const classes = useStyles();
    const { pictureClass, headerText } = props;
    return ( 
        <div className={`${pictureClass} Rounded`}>
            <div className="Fade Rounded">
                <Typography className={classes.typography} variant="h4">
                    {headerText}
                </Typography>
            </div>
        </div>
    );
}
 
export default ImageHeader;