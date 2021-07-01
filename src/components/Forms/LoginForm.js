import { Container, FormControlLabel, Checkbox } from '@material-ui/core';
import { useState } from 'react';
import ImageHeader from './ImageHeader'; 
import Button from '../Button';
import TextField from '../TextField';
import React from 'react';
import { useStyles } from '../../Styles/FormsStyles/LoginForm';

const LoginForm = (props) => {
    const classes = useStyles();

    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        console.log(username, password);
    }

    const handleForgotPassword = (e) => {
        e.preventDefault();
    }

    return ( 
        <Container>
            <form>
                <Container maxWidth={'sm'} className={classes.container}>
                    <ImageHeader pictureClass="LoginImageHeader" headerText="Sign in"/>
                    <div className="Spacer"></div>
                    <Container>
                        <TextField size="large" label="Username" onChange={(e)=> setUsername(e.target.value)} />
                    </Container>
                    <Container>
                        <TextField size="large" label="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
                    </Container>
                    <Container>
                        <FormControlLabel className={classes.marginLeft} 
                        control={<Checkbox color="primary" />} label="Remember me?" labelPlacement="end"/>
                    </Container>
                    <Container>
                        <Button className={classes.marginLeft} size="large"  color="secondary"
                            onClick={ (e)=>handleForgotPassword(e) } variant="text">Forgot Password?</Button>
                    </Container>
                    <Container className={classes.centerItems}>
                        <Button color="secondary" size="large" halfWidth onClick={(e) => handleClick(e)} variant="contained">Login</Button>
                    </Container>
                </Container>
            </form>
        </Container>
    );
}
 
export default LoginForm;