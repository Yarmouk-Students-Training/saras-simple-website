import { Container, FormControl, InputLabel, Select, FormControlLabel, RadioGroup,MenuItem, Radio, Typography } from '@material-ui/core';
import ImageHeader from './ImageHeader';
import Button from '../Button';
import TextField from '../TextField';
import Link from '../Link'
import React, { useState, useEffect } from 'react';
import { useStyles } from '../../Styles/FormsStyles/RegisterLawyerForm';
import { getData, getDataFile } from "../../data/index";
import { createRecaptchaVerifier, sendOTPCodeThrowFirebase, verfiyOTPCode, getFirebaseUserToken } from '../../Scripts/firebase/firebaseUtility';
import { validatePasswordAndComfirmPassord } from '../../Scripts/password/passwordUtility';

let confirmCode = null

const RegisterLawyerForm = (props) => {
    const data = getDataFile("SignupLawyer", "Ar");
    const { Gender: gender } = data;
    const { Status: status } = data;
    const classes = useStyles();
    const [registrationData, setRegistrationData] = useState({ 'gender': 'male' });
    const [showVerficationCode, setShowVerficationCode] = useState(false)

    const changeRegistrationFeild = (e, field) => {
        const value = e.target.value;
        setRegistrationData((registrationData) => {
            registrationData[field] = value
            return registrationData
        })
    }

    useEffect(() => {
        createRecaptchaVerifier("recaptcha")
    }, []);

    const sendOTPCode = async (e) => {
        e.preventDefault(false);
        setShowVerficationCode(true)

        try {
            validatePasswordAndComfirmPassord(registrationData.password, registrationData.confirmPassword);
            confirmCode = await sendOTPCodeThrowFirebase(registrationData.phoneNumber);
            console.log(confirmCode)
        } 
        catch (error) {
            setShowVerficationCode(false)
            alert(error)
        }
    }

    const verfiyAndSubmiteData = async (e) => {
        e.preventDefault(false);
        try {
            const confirmedData = await verfiyOTPCode(confirmCode, registrationData.code)
            const token = await getFirebaseUserToken(confirmedData)

            const Lawyer = {
                password: registrationData.password,
                type: "Lawyer",
                firstName: registrationData.firstName,
                lastName: registrationData.lastName,
                governorate: registrationData.governorate,
                gender: registrationData.gender,
                identity:registrationData.identity,
                email:registrationData.email,
                status:registrationData.status,
            }
            console.log(token)

            const respose = await fetch('http://localhost:8000/api/v1/signup', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'authorization': 'Bearer ' + token
                },
                body: JSON.stringify(Lawyer)
            })
            console.log('with No json ', respose)
            console.log(await respose.json())
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <form onSubmit={sendOTPCode}>
            <Container className={classes.container}>
                <ImageHeader pictureClass="RegisterImageHeader" headerText="Join us as a Lawyer" />
                <div className="Spacer"></div>
                <div id="recaptcha"></div>
                <Container className={classes.flexGroup}>
                    <TextField label={data.First_Name} required={true} onChange={(e) => { changeRegistrationFeild(e, "first_name") }} />
                    <TextField label={data.Last_Name} required={true} onChange={(e) => { changeRegistrationFeild(e, "last_name") }} />
                </Container>

                <Container className={classes.flexGroup}>
                    <TextField label={data.Phone_Number} required={true} onChange={(e) => { changeRegistrationFeild(e, "phoneNumber") }} />
                    <TextField label={data.identity} required={true} onChange={(e) => { changeRegistrationFeild(e, "identity") }} />
                </Container>

                <Container className={classes.flexGroup}>
                    <TextField label={data.Password} type="password" required={true} onChange={(e) => { changeRegistrationFeild(e, "password") }} />
                    <TextField label={data.Confirm_Password} type="password" required={true} onChange={(e) => { changeRegistrationFeild(e, "confirmPassword") }} />
                </Container>

                <Container>
                    <TextField label={data.Email} required={true} onChange={(e) => { changeRegistrationFeild(e, "email") }} />
                </Container>

                <Container>
                    <FormControl className={classes.fullWidth}>
                        <InputLabel id="governorate">{data.Governorate.Title}</InputLabel>
                        <Select
                            value={registrationData.governorate}
                            onChange={(e) => { changeRegistrationFeild(e, "governorate") }}
                            labelId="governorate"
                            required={true}
                        >
                            {(data.Governorate.govs).map((gov) => {
                                return (
                                    <MenuItem value={gov.gov_value} > {gov.gov_name} </MenuItem>
                                )
                            })}

                        </Select>
                    </FormControl>
                </Container>

                <Container>
                    <Container className={classes.genderPadding}>
                        <FormControl className={classes.flexGroup}>
                            <Typography className={classes.centerItems}>{gender.Title}</Typography>
                            <RadioGroup row defaultValue={"Male"} onChange={(e) => { changeRegistrationFeild(e, "gender") }}>
                                <FormControlLabel
                                    control={<Radio color="secondary" className={classes.radio} />} value={gender.genderlist[0].value} label={gender.genderlist[0].type} />
                                <FormControlLabel
                                    control={<Radio color="secondary" className={classes.radio} />} value={gender.genderlist[1].value} label={gender.genderlist[1].type}  />
                            </RadioGroup>
                        </FormControl>
                    </Container>
                </Container>

                <Container>
                    <Container className={classes.genderPadding}>
                        <FormControl className={classes.flexGroup}>
                            <Typography className={classes.centerItems}>{status.Title}</Typography>
                            <RadioGroup row defaultValue={"Trainee"} onChange={(e) => { changeRegistrationFeild(e, "status") }}>
                                <FormControlLabel
                                    control={<Radio color="secondary" className={classes.radio} />} value={status.Statuslist[0].value} label={status.Statuslist[0].type} />
                                <FormControlLabel
                                    control={<Radio color="secondary" className={classes.radio} />} value={status.Statuslist[1].value} label={status.Statuslist[1].type} />
                            </RadioGroup>
                        </FormControl>
                    </Container>
                </Container>

                <div className="Spacer" />

                <Container className={classes.centerItems}>
                    <Button color="secondary" size="large" halfWidth variant="contained" onClick={() => { console.log(registrationData) }}>{data.Register_Btn}</Button>
                </Container>
                <Link to="/register">{data.LawyerQuestionMark}</Link>
                {showVerficationCode &&
                    <Container className={classes.flexGroup} >
                        <Typography variant="body2">
                            Verfication Code
                        </Typography>
                        <TextField label={data.Code}
                            onChange={(e) => { changeRegistrationFeild(e, "code") }} />
                    </Container>
                }
                {showVerficationCode &&
                    <Button color="secondary" size="medium" variant="contained" onClick={verfiyAndSubmiteData}>{data.Verify_Btn}</Button>
                }
            </Container>
        </form>
    );
}

export default RegisterLawyerForm;