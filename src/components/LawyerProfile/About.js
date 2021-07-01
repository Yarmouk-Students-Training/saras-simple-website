import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, TextField } from "@material-ui/core";
import { getData, getDataFile } from "../../data/index";

const useStyles = makeStyles({
  root: {
    minWidth: "15rem",
    boxShadow: "0 0 0 0",
    marginRight: "1rem"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
  },
  CONTACT: {
    fontSize: "0.6rem",
    color: "#aaaaaa"
  },
  phone: {
    margin: "0.5rem 0.2rem",
    fontSize: "0.8rem",
    fontFamily: "Helvetica",
    color:"#342973"
  },
  number: {
    color: "#3d8af7",
    fontSize: "0.8rem",
  },
  inf: {
    fontSize: "0.8rem",
    color:"#000000",
  },
  root2: {
    boxShadow: "0 0 0 0",
    minWidth: "20rem",
  },
  root3:{
    boxShadow: "0 0 0 0",
    
    // minWidth: "20rem",
    maxWidth: "80%",

  },
  root4:{
      backgroundColor:"#ffffff",
      minWidth: "30rem",
    
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  const data = getDataFile("EditInfLawyer", "En");
  return (
    <Box className={classes.root4}>
      <Box  display="flex" >
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.CONTACT}>
              {data.CONTACTINFORMATION}
            </Typography>
            <Typography className={classes.phone}>
              {data.PhoneNumber}:<span className={classes.number}>7907656476</span>
            </Typography>
            <Typography className={classes.phone}>
              {data.email}:{" "}
              <span className={classes.number}>boshuraesa@gmail.com </span>
            </Typography>
            <Typography className={classes.phone}>
              {data.category}: <span className={classes.inf}> regular lawyer </span>
            </Typography>
            <Typography className={classes.phone}>
              {data.status}: <span className={classes.inf}> trainee </span>
            </Typography>
            <Typography className={classes.phone}>
              {data.Address}:{" "}
              <span className={classes.inf}>
                Amman onsectetur vulputate loream
              </span>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root2}>
          <CardContent>
            <Typography className={classes.CONTACT}>
              {data.BASICINFORMATION}
            </Typography>
            <Typography className={classes.phone}>
              {data.Gender.Title}: <span className={classes.inf}>Female</span>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Card className={classes.root3}>
          <CardContent>
            <Typography className={classes.CONTACT}>
              {data.discription} 
            </Typography>
            <Typography className={classes.phone}>
              <span className={classes.inf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blan﻿dit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortnia ipsu﻿dit elit tincidunt id. Sed rhoncus, tortor sedn﻿dit elit tincidunt id. Sed rhoncus, tortor sedgg﻿n﻿dit elis, tortor sed</span>
            </Typography>
          </CardContent>
        </Card>
    </Box>
  );
}