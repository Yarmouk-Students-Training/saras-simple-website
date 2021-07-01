import {Box , Avatar, makeStyles ,Button,Typography,Link ,Grid,Card ,CardHeader ,CardContent ,IconButton} from '@material-ui/core';
import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HoverRating from "../RatingStars1";
const useStyles = makeStyles(() => ({
   root:{
    maxWidth:"30rem",
     minWidth:"17rem",
     marginBottom:"-1rem",
   },
   CardHeader:{
    paddingBottom:"0rem",
  },
    CardContent:{
      paddingTop:"0.5rem",
      paddingBottom:"0.2rem"
    },
    rat:{
      fontSize:"1rem",
    },
    avatar:{
      backgroundColor:"#003d66",
    },
    comment:{
      fontSize:"0.8rem"
    },
    subheader:{
      fontSize:"1rem"
    }

})); 


 const Reviews =()=> {
    const classes = useStyles();
    const number =50;
    return(
    <Card className={classes.root} >
        <CardHeader className={classes.CardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton >
            <MoreVertIcon />
          </IconButton>
        }
        title="sara aldamiri"
        subheader="September 14, 2016"
      />
      <CardContent className={classes.CardContent}>
        <HoverRating />
        <Typography className={classes.comment}  gutterBottom >
            Lorem ipsum doamet,kjconsectetur adipiscing elit. Nulla quam oovelit, vulputate eu pharetra ne
        </Typography>
      </CardContent>
    </Card>
    );
}

export default Reviews;