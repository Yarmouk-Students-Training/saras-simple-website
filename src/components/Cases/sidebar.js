import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse,FormControlLabel, Box, 
 Checkbox, withStyles} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { BsFilterLeft } from 'react-icons/bs';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useStyles }  from './../../Styles/CasesStyles/sidebarStyles'
import { getDataFile } from '../../data/index';

const CustomizedCheckbox = withStyles({
    root: {
      color: "#00284e",
      "&$checked": {
        "& .MuiIconButton-label": {
          position: "relative",
          zIndex: 0,
        },
        "& .MuiIconButton-label:after": {
          content: '""',
          left: 4,
          top: 4,
          height: 15,
          width: 15,
          position: "absolute",
          backgroundColor: "#FFFF",
          zIndex: -1
        },
      },
    },
    checked: {}
})(props => <Checkbox color="#00284e" {...props} />);


const Sidebar = ({language}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const staticData = getDataFile("Sidebar", language);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className={classes.box}>
     <List className={classes.root}>
        <ListItem>
          <ListItemIcon>
              <BsFilterLeft  size = '2.5em' style={{color:'#00284e' }} />
          </ListItemIcon>
          <h6 style={{fontSize:'1.5rem', color:'#00284e' }}>{staticData.Filter}</h6>
        </ListItem>
        <hr style={{color:'#00284e'}}/>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AccountBalanceIcon  style={{color:'#00284e' }} />
          </ListItemIcon>
          <ListItemText><h6 style={{fontSize:'1rem'}}>{staticData.categoryName} </h6></ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {(staticData.Categories).map((cate) => {
              return (
                <ListItem button className={classes.nested}>
                  <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}>{cate.category}</Box>}/>
                </ListItem>
                     )
            })}
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
export default Sidebar
