import React from 'react';
import {Link as ReactLink } from 'react-router-dom';

const styles = { 
    paddingTop:15,
    fontFamily:"sans-serif",
    textDecoration: 'none',
    marginInline:'0.8rem'

};


const Link = ({to, children}) => {
    return (
        <ReactLink style={styles} to={to}>
            {children}
        </ReactLink>
    );
}
 
export default Link;