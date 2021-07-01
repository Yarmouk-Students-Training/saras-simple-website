import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import About from './About.js';
import LawyerBlogside from './LawyerBlogside';
import PersonIcon from '@material-ui/icons/Person';
import ClickAway from '../flexIcons/AboutIcon';
import ClickComment from '../flexIcons/CommentIcons.js';
import ClickBlogs from '../flexIcons/BlogIcons.js';
import ClickEdit from '../flexIcons/EditIcons.js';
import EditInf from './EditInf';
import Commentnav from './Commentnav';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    maxWidth:"75%",
    minWidth:"38rem",
    marginTop:"3rem",
    
  },
  AppBar:{
      boxShadow:'0 0 0 0',

  },
  Tabs:{
    borderBottom:"0.02rem solid #000000 ",
    // maxWidth:"80%",

},

PersonIcon:{
    display:"flex",
}
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static"  color="white" className={classes.AppBar}>
        <Tabs value={value} onChange={handleChange} className={classes.Tabs}
          indicatorColor="primary"
          textColor="Black"
          variant="fullWidth"
        >
          <Tab label={<ClickAway/>}  {...a11yProps(0)} />
          <Tab label={<ClickComment/>} {...a11yProps(1)} />
          <Tab label={<ClickBlogs/>}  {...a11yProps(2)} />
          <Tab label={<ClickEdit/>} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <About/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Commentnav/>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <LawyerBlogside/> 
      </TabPanel>
      <TabPanel value={value} index={3}>
          <EditInf/> 
      </TabPanel>
    </div>
  );
}