import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    navbar: {
      backgroundColor: '#fffffe',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.2rem 0.8rem',
      paddingBottom:'0.8rem',
      boxShadow: 'rgb(128 128 128 / 40%) 0px 8px 16px',
      position: 'sticky',
      top: '0',
      zIndex: '100',
    },
    head: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      width: 'fit-content'
    },
    brand: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      fontFamily: 'Roboto Mono'
    },
    links: {
      display: 'flex',
      alignItems: 'center',
    },
    items: {
      color: 'black',
      fontSize: '1.5rem',
      transition: 'color 0.5s ease',
      '&:hover': {
        color: '#0066CC'
      },
    },
  
    register: {
      backgroundColor: '#00284e',
      padding: '0.6rem',
      color: '#FFFFFF',
      fontSize: '1.3rem',
      borderRadius: '12px',
      transition: 'background-color 0.6s ease',
      '&:hover': {
        backgroundColor: '#0066cc',
      },
    },
    login: {
      padding: '0.6rem 0.8rem',
      fontSize: '1.3rem',
      borderRadius: '12px',
      color: 'black',
      transition: 'background-color 0.6s ease , color 0.5s ease',
      '&:hover': {
        backgroundColor: '#ebebeb',
        color: '#0066CC'
      },
    },
    image: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginLeft: '0.4rem'
    },
    name: {
      color: '#000000',
      fontSize: '1.4rem',
    },
    menu:{
      marginTop:'2.3rem'
    },
    upgrade :{
      cursor:'pointer',
      border: '3px solid #003d66',
      textAlign: 'center',
      padding:'0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '&:hover':{
        backgroundColor:'#003d66',
        color:'white',
      }
    },
    // hamburger menu styles
    title:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:'0.8rem'
    },
    flexColumn:{
      display: 'flex',
      flexDirection: 'column',
    },
    picture: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      marginRight:'0.4rem'
    },
    username:{
      color: '#000000',
      fontSize: '1.1rem',
    },
    flexRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding:'0.5rem 0.7rem',
      marginInline:'0.6rem',
      marginBottom:'0.8rem'
    },
    view:{
      color:'#847e7e',
      fontSize:'0.7rem',
      transition: 'color 0.5s ease',
      cursor:'pointer',
      '&:hover': {
        color: '#0066CC'
      },
    },
    premiuem:{
      cursor:'pointer',
      width:'70%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border:'2px solid #3665f4',
      borderRadius:'5px',
      marginLeft:'2rem',
      padding: '0.2rem',
      transition: 'background-color 0.6s ease',
      '&:hover': {
        backgroundColor: '#9ec2e5',

      },
      marginBottom:'0.8rem'
    },
    mainLinks:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    route:{
      width:'90%',
      display: 'flex',
      alignItems: 'center',
      marginLeft:'0.6rem',
      padding:'0.4rem',
      transition: 'background-color 0.6s ease',
      '&:hover': {
        backgroundColor: '#ebebeb',
        borderRadius: '5px'
      },
    },
    registerSide: {
      // backgroundColor: '#00284e',
      padding: '0.3rem',
      color: 'black',
      fontSize: '1.1rem',
      border: '1.5px solid #0066cc',
      borderRadius: '8px',
      transition: 'background-color 0.6s ease , color 0.6s ease',
      '&:hover': {
        color: '#FFFFFF',
        backgroundColor: '#0066cc',
      },
    },
  }));