import RegisterLawyerForm from '../components/Forms/RegisterLawyerForm';
import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:'10px'
    }
}));
const RegisterLawyer = () => {
    const classes = useStyles();
    return (
        <Container className ={classes.root}>
            <RegisterLawyerForm />
        </Container>
    );
}
 
export default RegisterLawyer;