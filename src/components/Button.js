import { Button as MUIButton, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    button:{
        padding:[10, 5],
        fontWeight:'bold'
    },
    halfWidth:{
        width:'50%',
        padding:[10, 5],
        fontWeight:'bold',
        justifySelf:'center'
    }
});

const Button = (props) => {
    const { onClick,children, type, variant, size, color, fullWidth, halfWidth } = props;
    const classes = useStyles();

    return ( 
        <MUIButton 
            fullWidth = {fullWidth ? true:false}
            onClick = { onClick }
            className={ halfWidth ? classes.halfWidth : classes.button } 
            type={ type ? type : null } 
            variant = { variant == null ? null : (variant ? variant : "contained") } 
            color = { color ? color : "primary" }
            size = { size || "medium" }
        > { children } </MUIButton>
     );
}
 
export default Button;