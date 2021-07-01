import React from 'react';
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Collapse,Typography,FormControlLabel, 
TextField, Box, Select,InputLabel, FormControl,RadioGroup, Radio, Checkbox, withStyles} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { BsFilterLeft } from 'react-icons/bs';
import PersonIcon from '@material-ui/icons/Person';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

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
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth:"200px",
    maxWidth: "350px",
    backgroundColor: '#ffff',
    boxShadow: "rgba(128,128,128, 0.50) -3px 5px 8px;",
    borderRadius:'5px',
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

const LawyerSidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(false); 
  const [open3, setOpen3] = React.useState(false); 
  const [open4, setOpen4] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  return (
    <Box className={classes.box}>
     <List className={classes.root}>
        <ListItem>
          <ListItemIcon>
              <BsFilterLeft  size = '2.5em' style={{color:'#00284e' }} />
          </ListItemIcon>
          <h6 style={{fontSize:'1.5rem', color:'#00284e' }}>Filter by</h6>
        </ListItem>
        <hr style={{color:'#00284e'}}/>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <PersonIcon  style={{color:'#00284e' }}/>
          </ListItemIcon>
          <ListItemText><h6 style={{fontSize:'1rem'}}>Name </h6></ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <TextField label="First name" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <TextField label="Last name" /> 
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick1}>
          <ListItemIcon>
            <SupervisorAccountIcon  style={{color:'#00284e' }}/>
          </ListItemIcon>
          <ListItemText><h6 style={{fontSize:'1rem'}}>Gender </h6></ListItemText>
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Male</Box>}/>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Female</Box>}/> 
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick2}>
          <ListItemIcon>
            <LocationOnIcon  style={{color:'#00284e' }} />
          </ListItemIcon>
          <ListItemText><h6 style={{fontSize:'1rem'}}>Governorate </h6></ListItemText>
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Amman</Box>}/>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Irbid</Box>}/> 
            </ListItem>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Jarash</Box>}/>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Ajloun</Box>}/> 
            </ListItem>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Mafraq</Box>}/>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Salt</Box>}/> 
            </ListItem>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Zarqa</Box>}/>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Madaba</Box>}/> 
            </ListItem>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Aqaba</Box>}/>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Karak</Box>}/> 
            </ListItem>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Tafelh</Box>}/>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Ma'an</Box>}/> 
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick3}>
          <ListItemIcon>
            <AccountBalanceIcon  style={{color:'#00284e' }} />
          </ListItemIcon>
          <ListItemText><h6 style={{fontSize:'1rem'}}>Specialization </h6></ListItemText>
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Personal Injury</Box>}/>
            </ListItem>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Personal Injury</Box>}/>
            </ListItem>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Personal Injury</Box>}/>
            </ListItem>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Personal Injury</Box>}/>
            </ListItem> 
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Personal Injury</Box>}/>
            </ListItem> 
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Personal Injury</Box>}/>
            </ListItem>          
          </List>
        </Collapse>
        <ListItem button onClick={handleClick4}>
          <ListItemIcon>
            <SupervisorAccountIcon  style={{color:'#00284e' }} />
          </ListItemIcon>
          <ListItemText><h6 style={{fontSize:'1rem'}}>Status </h6></ListItemText>
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Practiced</Box>}/>
                <FormControlLabel control={<CustomizedCheckbox />}label={<Box className={classes.label}> Trainee</Box>}/> 
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
export default LawyerSidebar