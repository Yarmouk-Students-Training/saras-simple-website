import { Box, Avatar, Typography, Link } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';
import { useStyles }  from './../../Styles/CasesStyles/postStyles'
import { getDataFile } from '../../data/index';

const Post = ({language}) => {
  const staticData = getDataFile("Post", language);
  const classes = useStyles();
  const number = 50;
  return (
    <Box className={classes.root}>
      <Box className={classes.headPost}>
        <Box className={classes.photoname}>
          <Avatar className={classes.Img} alt="user photo" src='Sandi.png' loading = 'lazy'/>
          <Box className={classes.rootNameAndTime}>
            <Typography className={classes.name}>
              <span className={classes.nameStyle}> Sara Al-Damiri</span>
            </Typography>
            <Typography className={classes.time}>5 min ago</Typography>
          </Box>
        </Box>
        <MoreHorizIcon className={classes.threeDot} />
      </Box>
      <Box className={classes.middlePost}>
        <Typography className={classes.Title}>
          <b>Does studying law worth it?</b>
        </Typography>
        <Typography className={classes.content}>
          vulputate eu pharetra ne elit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo le vulputate eros sed felis sodales nec vulputate  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra ne elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo le vulputate eros sed felis sodales nec vulputate justo
        </Typography>
      </Box>
      <Box className={classes.rootButton}>
        <Link to='#' className={classes.answer}>
          <img className={classes.advice1} src='advice.png' alt = 'ashgr' />
          <Typography className={classes.answerData}><span className={classes.textans}>{staticData.giveAdvice}</span></Typography>
        </Link>
        <Link to='#' className={classes.LinkComment}><span className={classes.styleTextLinknComment}>{number} {staticData.Comments}</span></Link>
      </Box>
    </Box>
  );
}

export default Post;