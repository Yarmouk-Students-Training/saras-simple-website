import {makeStyles} from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    root: {
      minWidth:"200px",
      maxWidth: "350px",
      backgroundColor: '#ffff',
      boxShadow: "rgba(128,128,128, 0.50) -3px 5px 8px;",
      borderRadius:'8px',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    box:{
      minWidth:"200px",
      maxWidth: "350px",
      backgroundColor: '#ebebeb',
      boxShadow: "rgba(128,128,128, 0.50) -3px 5px 8px;",
      marginBottom:"1rem",
      marginTop:'1rem',
    },
  }));