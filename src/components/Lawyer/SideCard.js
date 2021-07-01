import React from 'react';
import { Box, makeStyles, Card, CardActionArea, CardContent, Typography, Avatar } from '@material-ui/core';
import HoverRating from './RatingStars';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EqualizerIcon from '@material-ui/icons/Equalizer';


const useStyles = makeStyles(theme => ({
  size: {
    width: "100%",
    maxWidth:"350px",
    minWidth: "290px",
    borderRadius: "10px",
    //boxShadow: "rgba(203,161,53, 0.50) -5px 5px 8px;",
    //marginBlock: "0.5rem",
    //boxShadow: "0px 0px 5px 0px gray;",
    boxShadow: "rgba(128,128,128, 0.50) -3px 5px 8px;",
    marginBottom: "1rem"


  },
  avatar: {


  },
  name: {

    fontSize: "1rem",
    // top: "1",
  },
  star: {

    //top: "1px",
  },
  accountBalanceIcon: {
    color: "#003d66",

  },
  equalizerIcon: {
    color: "#003d66",

  },
  phoneIcon: {
    color: "#003d66",




  },
  location: {
    justifyContent: "space-between",
    display: 'flex',
    paddingLeft: "1.3rem",
    paddingRight: "1.3rem",
    paddingTop: "0.5rem"
    // marginTop:'0.75rem',

  },
  phoneNum: {
    display: 'flex',

  },
  cursorPointer: {
    cursor: "pointer"
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  flexes: {
    display: 'flex',
  },
  flexes2: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1rem',
    marginTop: '0.5rem',

  }
}));

const SideCard = (props)=>{
  const classes = useStyles();

  return (
    <Card className={classes.size}>
      <CardActionArea>
        <CardContent >
          <div className={classes.flexes}>
            <Typography >
              <h1 className={classes.avatar}>
                <Avatar src={props.img}
                  className={[classes.orange, classes.large]} ></Avatar>
              </h1>
            </Typography>
            <div className={classes.flexes2}>
              <Typography variant="h5" component="h2">
                <h2 className={classes.name}>
                  {props.name}
                </h2>
              </Typography>
              <Typography>
                <h3 className={classes.star}>
                  <HoverRating />
                </h3>
              </Typography>
              <Typography>
                <h6 style={{ fontSize: "0.75rem" }}>
                  Contribution : <span style={{ color: 'green' }}>122</span>
                </h6>
              </Typography>
              <Typography>
                <div className={classes.specialization}>
                  <h6 style={{ fontSize: "0.75rem" }}> <AccountBalanceIcon className={[classes.accountBalanceIcon, classes.cursorPointer]}
                    fontSize="small" /><span style={{ color: 'black' }}> {props.specialization} </span></h6>
                </div>
                <div className={classes.status}>
                  <h6 style={{ fontSize: "0.75rem" }}> <EqualizerIcon className={[classes.equalizerIcon, classes.cursorPointer]}
                    fontSize="small" /><span style={{ color: 'black' }}> {props.status} </span></h6>
                </div>
              </Typography>
            </div>

          </div>
          <Typography>

            <div className={classes.location}>
              <Box display="flex">
                <LocationOnIcon className={[classes.locationOnIcon, classes.cursorPointer]}
                  fontSize="small" color="#003d66" />
                <a href={props.loclink} target="_blank"><h6 style={{ fontSize: "0.75rem" }}>
                  <span style={{ color: 'black' }}> {props.location} </span></h6>
                </a>
              </Box>
              <Box display="flex">
                <PhoneIcon className={[classes.phoneIcon, classes.cursorPointer]}
                  fontSize="small" />
                <a href="" >
                  <h6 style={{ fontSize: "0.75rem" }}>
                    <span style={{ color: 'black' }}> {props.phone} </span></h6></a>
              </Box>
            </div>

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
export default SideCard;