
import React, { Component, useState, useEffect } from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
    Button,
    Container,
    Box,
    InputBase,
    FormControl,
    InputLabel,
    Select,
    FormControlLabel,
    RadioGroup,
    Radio,
    Typography,
    MenuItem
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { getData, getDataFile } from "../../data/index";

const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: "50rem",
            "& > *": {
                margin: theme.spacing(2),
            }
        },
        marge: {
            margin: theme.spacing(1),
            fontFamily: "Helvetica",
            fontSize: "12px"
        },
        DESCRIPTION: {
            margin: "0 0 0 2rem ",
            fontFamily: "Helvetica",
            fontSize: "12px"


        },
        genderPadding:{
            marginTop:"1rem"
        }
    })
);

export default function EditInf() {
    const data = getDataFile("EditInfLawyer", "Ar");
    const classes = useStyles();
    const [registrationData, setRegistrationData] = useState({ 'gender': 'male' });
    const changeRegistrationFeild = (e, field) => {
        const value = e.target.value;
        setRegistrationData((registrationData) => {
            registrationData[field] = value
            return registrationData
        })
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField onChange={(e) => { changeRegistrationFeild(e, "phoneNumber") }}
                    className={classes.marge}
                    id="standard-basic"
                    label={data.PhoneNumber}
                    placeholder="07907656476"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField onChange={(e) => { changeRegistrationFeild(e, "Address") }}
                    className={classes.marge}
                    id="standard-basic"
                    label={data.Address}
                    placeholder=" Amman onsectetur vulputate loream"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField onChange={(e) => { changeRegistrationFeild(e, "Email") }}
                    className={classes.marge}
                    id="standard-basic"
                    label={data.email}
                    placeholder="boshuraesa@gmail.com "
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField onChange={(e) => { changeRegistrationFeild(e, "category") }}
                    className={classes.marge}
                    id="standard-basic"
                    label={data.category}
                    placeholder="regular lawyer"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField onChange={(e) => { changeRegistrationFeild(e,"status") }}
                    className={classes.marge}
                    id="standard-basic"
                    label={data.status}
                    placeholder="trainee"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Container className={classes.genderPadding} >
                    <FormControl className={classes.flexGroup}>
                        <Typography className={classes.centerItems}>{data.Gender.Title}</Typography>
                        <RadioGroup row defaultValue={"Male"} onChange={(e) => { changeRegistrationFeild(e, "gender") }}>
                            <FormControlLabel
                                control={<Radio color="primary" className={classes.radio} />}
                                value={data.Gender.genderlist[0].value} label={data.Gender.genderlist[0].type} />
                            <FormControlLabel
                                control={<Radio color="primary" className={classes.radio} />}
                                value={data.Gender.genderlist[1].value} label={data.Gender.genderlist[1].type}
                            />
                        </RadioGroup>
                    </FormControl>
                </Container>

            </div>
            <TextField onChange={(e) => { changeRegistrationFeild(e, "DESCRIPTION") }}
                className={classes.DESCRIPTION}
                id="standard-multiline-static"
                label={data.discription}
                fullWidth
                multiline
                style={{ fontFamily: "Helvetica", fontSize: "16px" }}
                defaultValue=" "
            />
            <Button variant="contained" color="primary" style={{ float: "right" }} onClick={()=>{console.log(registrationData)}}>
                {data.save}
            </Button>
        </form>
    );
}
