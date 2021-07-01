import {makeStyles} from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    center: {
      [theme.breakpoints.only('md')]: {
        margin: "0 2%"
      },
    },
    scrolling: {
      height:'89vh',
      overflowY: 'scroll',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    marginTop: {
      marginTop: "1.5rem",
    },
    box: {
      padding: "0.9rem",
      borderRadius: "10px",
      boxShadow: "rgba(128,128,128, 0.40) 0px 0px 8px;",
      background: "#ffffff",
      maxWidth: "100%",
      minWidth: "450px"
    },
    flexRow: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "space-between"
    },
    askCircle: {
      display: 'flex',
      alignItems: "center",
      justifyContent:'space-around',
      position: "fixed",
      right:'10%',
      top:'85%',
      backgroundColor:'#00284e',
      width:'7rem', 
      height:'3.7rem', 
      zIndex:'200',
      textAlign:'center',
      borderRadius:'10px',
      padding:'0.6rem',
    },
    ask:{
      fontSize:'2rem',
      color:'#FFFFFF'
    }
  }));