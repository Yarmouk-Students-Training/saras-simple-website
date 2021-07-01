import { Container,makeStyles } from "@material-ui/core"
import RegisterRegularForm from '../components/Forms/RegisterRegularForm'
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:'10px',
    }
}));
const RegisterRegular = (props) => {
    const { language } = props;
    const classes = useStyles();
    return (
        <Container className ={classes.root}>
            <RegisterRegularForm language={language}/>
        </Container>
    );
}
 
export default RegisterRegular;