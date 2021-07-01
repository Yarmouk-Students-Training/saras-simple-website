import React from 'react';
import { makeStyles, Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@material-ui/core';
import HoverRating from './RatingStars';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles({
  root: {
    minWidth: "300px",
    maxWidth: "370px",
    width:"100%",
    borderRadius:"10px",
    boxShadow: "rgba(128,128,128, 0.40) -3px 5px 8px;",
    marginTop:"2rem"
  },
  media: {
    height: 260,
  },

  icon: {
    color: "#003d66",
    position: "relative",
  },

  phoneIcon: {
    color: "#003d66",
    position: "relative",
    marginLeft: '4rem',
  },
  paragraph: {
    position: "relative",
    fontSize: "1rem",
    marginTop: "8%",

  },

  cursorPointer: {
    cursor: "pointer"
  },
});

function LawyerInfo(props) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea >
          <CardMedia
            component="img"
            className={classes.media}
            image={props.img}
          />
          <CardContent>
            <Typography >
              <h2>{props.name}</h2>
            </Typography>
            <Typography>
              <h3 className = {classes.star}> 
                    <HoverRating />
                </h3>
          </Typography>
          <Typography>
            <h6 style={{ fontSize: "1rem" }}>
              Contribution : <span style={{ color: 'green' }}>122</span>
            </h6>
          </Typography>
          <Typography>
            <Box display="flex" >
              <LocationOnIcon className={[classes.icon, classes.cursorPointer]}
                fontSize="small" color="#003d66" /><a href={props.loclink} target="_blank"><h6 style={{ color: 'Black', fontSize: "1rem" }}> {props.location} </h6></a>
              <span></span>
              <PhoneIcon className={[classes.phoneIcon, classes.cursorPointer]}
                fontSize="small" /><h6 style={{ color: 'black', fontSize: "1rem", marginLeft: "0.3rem" }}> {props.phone} </h6>

            </Box>
            <Box display="flex">
              <AccountBalanceIcon className={[classes.icon, classes.cursorPointer]}
                fontSize="small" /><h6 style={{ color: 'black', fontSize: "1rem", marginLeft: "0.3rem" }}> {props.specialization} </h6>
            </Box>
            <Box display="flex" >
              <EqualizerIcon className={[classes.icon, classes.cursorPointer]}
                fontSize="small" /><h6 style={{ color: 'black', fontSize: "1rem", marginLeft: "0.3rem" }}> {props.status} </h6>
            </Box>
          </Typography>

          <Typography>
            <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu ... <a href="" target="_blank">Read More</a>
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


  );
}
export default LawyerInfo;