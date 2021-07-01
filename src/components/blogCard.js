import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    //width:"100%",
    maxWidth: 445,
    minWidth: "300px",
    height: "100%"
  },
  head: {
    borderBottom: "2px solid gray",
  },
  title: {
    fontSize: "1.3rem",
    fontWeight: "600"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  btn: {
    marginLeft: "15px",

  },

}));

export default function More(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);


  };

  return (
    <CardActionArea style={{ height: "100%" }}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          height="250"
          image={props.img}
          title="image"
        />


        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h3">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="h4">
            By <span className={classes.head}>steven Donovon</span>  on june 16/2021
          </Typography>
          <Typography variant="body2" component="p">
            {props.text}

            <Link
              className={classes.btn}
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Read more
            </Link>
          </Typography>


        </CardContent>


      </Card>
    </CardActionArea>
  );
}