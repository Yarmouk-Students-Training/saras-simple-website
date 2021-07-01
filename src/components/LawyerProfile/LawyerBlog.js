import { makeStyles, Typography, Link, Card, CardHeader, CardContent, IconButton } from '@material-ui/core';
import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minWidth: 275,
    margin:"1rem 0 ",
  },
  cover: {
    width: 151,
  },
  CardHeader: {
    paddingBottom: "0rem",
  },
  CardContent: {
    paddingTop: "0.5rem",
    paddingBottom: "0.3rem"
  },
  title: {
    fontSize: "1rem",
    fontWeight: "5px",
    paddingTop: "0.2rem"
  },
  text: {
    fontSize: "0.8rem",
    marginTop: "0.8rem"
  }

});

export default function LawyerBlog() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} >
      <CardMedia
        className={classes.cover}
        image="/Sandi.jpeg"
        title="Live from space album cover"
      />
      <CardContent className={classes.CardContent}>
        <Link className={classes.titleLink}>
          <Typography className={classes.title}>laweyer in jordan</Typography>
        </Link>
        <Typography className={classes.text} gutterBottom >
          Lorem ipsum doamet,kjconsectetur adipiscing elit. Nulla quam oovelit, vulputate eu pharetra ne  Nulla quam oovelit, vulputate eu pharetra ne
        </Typography>
      </CardContent>
    </Card>
  );
}