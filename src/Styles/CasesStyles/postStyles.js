import {makeStyles} from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    flexWrap: " nowrap",
    maxWidth: "100%",
    padding: "0.70rem",
  },
  headPost: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
  },
  photoname: {
    width: "85%",
  },
  Img: {
    float: "left",
    padding: "0.5%",
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: "1%",
  },
  rootNameAndTime: {
    width: "65%",
    padding: "0.5% ",
    marginTop:"0.25rem",
    display: "flex",
    flexDirection: "column",
    flexWrap: " nowrap",
  },
  time: {
    padding: "0",
    fontSize: "0.8rem",
    fontFamily: "Helvetica",
  },
  name: {
    padding: "0px",
  },
  nameStyle: {
    fontSize: "120%",
    fontWeight: "bold",
    color: "#00284e"
  },
  threeDot: {
    float: "right",
    width: "15%",
    '&:hover': {
      backgroundColor: '#ebebeb',
      borderRadius: '10px',
    },
    margin: '15px',
  },
  middlePost: {
    width: "100%",
    margin: "0.5% 0.5%",
  },
  Title: {
    width: "95%",
    padding: "0.5% 1% 0.7% 1%",
  },
  content: {
    padding: "0% 2% 0% 1%",
    fontFamily: "Helvetica",
    fontSize: "1rem",
    marginLeft:"0.4rem"
  },
  rootButton: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    margin: "2% 1% 1% 1%",
  },
  ans: {
    alignSelf: "center",
  },
  LinkComment: {
    backgroundColor: "#ffffff",
    width: "10em",
    height: theme.spacing(5),
    marginLeft: "10%",
    display: 'flex',
    flexDirection: "row",
    '&:hover': {
      backgroundColor: "#ebebeb",
      borderRadius: "12px",
      textDecoration: "none",
    },
    alignItems: "center",
    justifyContent: "center",
  },
  styleTextLinknComment: {
    fontSize: "1.3rem",
    alignSelf: "center",
    color: "#003d66",
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  answer: {
    '&:hover': {
      textDecoration: "none",
      backgroundColor: '#ebebeb',
      borderRadius: "12px",
    },
    width: "10em",
    display: 'flex',
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    marginRight: "10%",
    height: "95%",
  },
  answerData: {
    color: '#003d66',
    fontWeight: "bold",
  },
  icon: {
    marginLeft: '0.25%'
  },
  textans: {
    fontFamily: "Times New Roman",
    fontSize: "1.3rem",
  },
  advice1: {
    padding: "0px",
    color: '#003d66', 
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));