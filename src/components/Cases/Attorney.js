import React, { useState } from 'react';
import { getDataFile } from '../../data/index';
import Button from '../Button';
import TextField from '../TextField'
import { makeStyles, withStyles } from '@material-ui/styles';
import {Typography, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, InputLabel, FormControl, MenuItem, Select, Box, Checkbox, FormControlLabel } from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const useStyles = makeStyles({
    fullWidth: {
        marginLeft: 5,
        width: '98%'
    }
});

export default function FormDialog(props) {
    const classes = useStyles();
    const [content, setContent] = useState("");
    const [governorate, setGovernorate] = useState("Amman");
    const [caseType, setCaseType] = useState("Labour");
    const [anonymity, setAnonymity] = useState(false);
    const [open, setOpen] = useState(false);
    const data = getDataFile("SignupRegular", props.language);
    const CaseTypes = ["Labour","Criminals","Divorcing","Hate","Labour","Criminals","Divorcing","Hate","Labour","Criminals","Divorcing","Hate"];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (type) => {
        if(type==="Cancel"){
            setOpen(false);
        } else if(type==="Submit"){
            const Attorney = {content, governorate, caseType, anonymity};
            // Do something now
            console.log(Attorney);
            setOpen(false);
        }
        setContent("");
        setGovernorate("Amman");
        setCaseType("Labour")
    };

    return (
        <Box>
            <Button color="secondary" variant="contained" onClick={handleClickOpen}> Ask Attorney <ContactSupportIcon /> </Button>
            <Dialog fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle>
                    <Typography variant="h6">
                        Consult an Attorney
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Here you can consult any type of attorney.
                    </DialogContentText>
                    <TextField multiline={true} rows={5} rowsMax={5} label="Content" fullWidth onChange={(e)=>{setContent(e.target.value)}} /> {/* Content */}
                    <FormControl className={classes.fullWidth}>
                        <InputLabel id="speciality">Speciality</InputLabel> {/* Speciality */}
                        <Select
                            labelId="speciality"
                            value={data.governorate}
                            required={true}
                            onChange={(e)=>{setCaseType(e.target.value)}}>
                            {(CaseTypes).map((Case) => {
                                return (
                                    <MenuItem value={Case} > {Case} </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox checked={anonymity} onChange={(e)=>setAnonymity(e.target.checked)} color="primary" />}
                        label="Ask Anonymously?"
                        labelPlacement="end"
                        />

                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>handleClose("Cancel")} color="secondary" variant="contained">
                        Cancel
                    </Button>
                    <Button onClick={()=>handleClose("Submit")} color="secondary" variant="contained">
                        Submit Attorney
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}