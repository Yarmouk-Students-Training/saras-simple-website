import { TextField as MUITextField, withStyles } from '@material-ui/core';
import React from 'react';

const TextFieldComponent = withStyles({
    root: {
        margin:5,
        padding:3,
        width:'98%'
    }
})(MUITextField);


const TextField = (props) => {
    const { variant, type, id, noLabel, label, onChange, required, fullWidth, multiline, rows, rowsMax } = props;

    return ( 
        <TextFieldComponent 
            multiline={multiline}
            rows={rows}
            rowsMax={rowsMax}
            fullWidth = {fullWidth ? true:false}
            variant= { variant || "standard" }
            type = { type || 'text' }
            id = { id || null }
            label = { noLabel ? null : ( label ? label : "Label" ) }
            onChange = { onChange }
            required = { required }
            inputProps = {{style:{direction: "ltr"}}}
            ></TextFieldComponent>
     );
}
 
export default TextField; 

// DO NOT DELETE THIS WE NEED IT plz plsp lspls pslp
// For more Detailing of the colors
/**
    '& label.Mui-focused': {
            color: Colors.primary,
            fontSize: 17
        },
    '& .MuiInput-underline:after': {
            borderBottomColor: Colors.primary,
        },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: Colors.primary
            },
        '&:hover fieldset': {
            borderColor: Colors.secondary
            },
        '&.Mui-focused fieldset': {
            borderColor: Colors.primary
            },
        } */