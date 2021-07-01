import React, { useState } from 'react'
import { Box, Avatar, Typography } from '@material-ui/core';
import { IconContext } from 'react-icons'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import Link from '../Link'
import Button from '../Button'
import { useStyles }  from './../../Styles/CasesStyles/commentStyle'
import { getDataFile } from '../../data/index';

const Comment = ({language}) => {
  const data = {
    name: "Abdalrahman Al-Ashgr",
    posted: "3m ago",
    content: "Thi rhoncus consectetur dui vitae consequat. Suspendisse dignissim molestie tincidunt. Mauris eget gravida orci. ue penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sapien lectus, ornare at massa quis, accumsan tempus ante. Vivamus elementum bibendum nisi, a ultrices turpis dictum eget. Donec ut arcu at lorem gravida scelerisque non ac dolor",
    rating: -7
  }
  const staticData = getDataFile("Comment", language);
  const [rate, setRate] = useState(data.rating);
  const classes = useStyles(rate)
  const [readMore, setReadMore] = useState(false);
  const handleUpVote = (e) => {
    e.preventDefault();
    setRate(rate + 1);
  }
  const handleDownVote = (e) => {
    e.preventDefault();
    setRate(rate - 1);
  }
  const mainContent = data.content.substr(0, 180), extraContent = data.content.substr(180);
  const flag = extraContent !== '';
  return (
    <Box p={2} className={classes.flexRow}>
      <Box className={[classes.avatar, classes.first]}>
        <Avatar src="person.png" className={classes.large} />
      </Box>
      <Box className={classes.second}>
        <Box className={classes.flexColumn}>
          <Box className={classes.metaData}>
            <Box className={classes.data}>
              <Typography variant='h6' component="div" className={classes.bold, classes.marginRight}>Abdalrahman Al-Ashgr </Typography>
              <Typography variant="body1" component="div" className={classes.marginLeft}>3m Ago</Typography>
            </Box>
            <Button>
              <BsThreeDots size='1.5em' />
            </Button>
          </Box>
          <Typography className={classes.content}>
            {mainContent} <strong>{!readMore && flag ? '...' : ''}</strong>
            {readMore && extraContent}
            {flag && <Button onClick={() => { setReadMore(!readMore) }}>{readMore ? staticData.Showless : staticData.Showmore}</Button>}
          </Typography>
          <Box className={[classes.metaData, classes.links]}>
            <Box className={classes.rating}>
              <Button onClick={handleUpVote}>
                <IconContext.Provider value={{ color: 'green' }}>
                  <AiOutlineLike size='2em'/>
                </IconContext.Provider>
              </Button>
              <Typography variant="h6" component="h6" className={classes.rateColor}>{rate > 0 ? '+' : ''}{rate} </Typography>
              <Button onClick={handleDownVote}>
                <IconContext.Provider value={{ color: 'red' }}>
                  <AiOutlineDislike size='2em'/>
                </IconContext.Provider>  
              </Button>
            </Box>
            <Link to='#'><Typography className={classes.commentNumber}>3 Replies</Typography></Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Comment

