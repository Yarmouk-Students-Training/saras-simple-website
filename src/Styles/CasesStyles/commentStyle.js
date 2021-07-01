import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme, my_rate) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  },
  flexRow: {
    display: 'flex'
  },
  name: {
    fontSize: '1.1rem',
    color: '#00284e',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ebebeb',
    borderRadius: '15px',
    flexWrap: "wrap"
  },
  metaData: {
    display: 'flex',
    flexDirection: "row",
    alignItems:"center",
    justifyContent: 'space-between'
  },
  links: {
    fontSize: '1.2rem'
  },
  rating: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rateColor: {
    color: () => {
      if (my_rate < 0) {
        return '#AF0011'
      }
      else if (my_rate > 0) {
        return 'green'
      }
    }
  },
  content: {
    marginLeft: '0.3rem',
    fontSize: '0.85rem',
  },
  first: {
    marginRight: '0.8rem'
  },
  second: {
    padding:"0.5rem",
    paddingLeft:"1rem",
    display: 'flex',
    backgroundColor: '#ebebeb',
    borderRadius: '15px',
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 0px 8px;",
  },
  commentNumber: {
    color: '#00284e',
    fontSize: "1.2rem",
    marginBottom:"0.5rem",
    transition: 'color 0.5s ease',
    '&:hover': {
      color: '#003daa',
    }
  },
  avatar: {
    margin: '1rem'
  },
  data: {
    display: 'flex',
    flexDirection: 'column'
  },
  bold: {
    fontWeight:"bold"
  },
  marginLeft: {
    marginLeft:"0.2rem"
  },
  marginRight: {
    marginRight:"0.2rem"
  }
}));