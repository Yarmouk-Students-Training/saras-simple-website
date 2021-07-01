import React from 'react';
import {Link as ReactLink } from 'react-router-dom';

const styles = { 
    paddingTop:10,
    fontFamily:"sans-serif",
    textDecoration: 'none',
    marginBottom:'0.3rem'

};


const SideLink = ({to, children}) => {
    return (
        <ReactLink style={styles} to={to}>
            {children}
        </ReactLink>
    );
}
 
export default SideLink;