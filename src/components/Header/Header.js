import { Divider, Box, Typography, Avatar, Menu, MenuItem, Hidden, Drawer } from '@material-ui/core'
import Link from '../Link'
import SideLink from '../SideLink'
import Button from '../Button'
import React, { useState } from 'react';
import { MdGavel, MdNotifications } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { BiBriefcase } from 'react-icons/bi'
import { RiLogoutBoxRLine, RiAccountCircleLine } from 'react-icons/ri'
import { MdLanguage } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsPeople, BsBook } from 'react-icons/bs'
import { AiFillStar, AiOutlineHome } from 'react-icons/ai'
import { useStyles } from './../../Styles/HeaderStyles/header'
import { getDataFile } from '../../data/index';


const Header = () => {
  const staticData = getDataFile("Header", 'En');
  const classes = useStyles()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [Lang, setLang] = useState(null);
  const [opened, setOpened] = useState(!true);
  const open2 = Boolean(Lang);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLang = (event) => {
    setLang(event.currentTarget);
  };
  const langClose = () => {
    setLang(null);
  };
  const toggleDrawer = (toggle) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpened(toggle);
  };

  return (
    <Box className={classes.navbar}>
      <Box className={classes.head}>
        <Typography className={classes.brand}>
          {staticData.Title}
        </Typography>
        <MdGavel size='1.9rem' style={{ marginLeft: '0.5rem' }} />
      </Box>
      <Hidden only={['sm', 'xs']}>
        <Box className={classes.links}>
          {(staticData.mainLinks).map((link) => {
            return (
              <Link to={link.path}><Typography className={classes.login}>{link.text}</Typography></Link>
            )
          })}
        </Box>
        {!isLoggedIn &&
          <Box className={classes.links}>
            <Button aria-controls="lang-menu" aria-haspopup="true" onClick={handleLang}>
              <MdLanguage size='2.5rem' color='#003d66' style={{ marginTop: '0.5rem' }}/>
            </Button>
            <Menu
              id="lang-menu"
              anchorEl={Lang}
              keepMounted
              open={open2}
              onClose={langClose}
              className={classes.menu}
            >
              <MenuItem onClick={langClose}>{staticData.Languages.Arabic}</MenuItem>
              <MenuItem onClick={langClose}>{staticData.Languages.English}</MenuItem>
            </Menu>
            <Link to={staticData.userLinks[0].path}><Typography className={classes.login}>{staticData.userLinks[0].text}</Typography></Link>
            <Link to={staticData.userLinks[1].path}><Typography className={classes.register}>{staticData.userLinks[1].text}</Typography></Link>
          </Box>
        }
        {isLoggedIn &&
          <Box className={classes.links}>
            <Button aria-controls="lang-menu" aria-haspopup="true" onClick={handleLang}>
              <MdLanguage size='2.5rem' color='#003d66' />
            </Button>
            <Menu
              id="lang-menu"
              anchorEl={Lang}
              keepMounted
              open={open2}
              onClose={langClose}
              className={classes.menu}
            >
              <MenuItem onClick={handleClose}>{staticData.Languages.Arabic}</MenuItem>
              <MenuItem onClick={handleClose}>{staticData.Languages.English}</MenuItem>
            </Menu>
            <MdNotifications size='2.5rem' color='#003d66' />
            <Box className={classes.links}>
              <Avatar className={classes.image} alt="user photo" src='4.jpg' />
              <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <Typography className={classes.name} > Abd Al-Ashgr</Typography>
                <IoIosArrowDown size='1.7rem' />
              </Button>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                className={classes.menu}
              >
                <MenuItem onClick={handleClose}><AiFillStar size='1.5rem' color='orange' style={{ marginRight: '0.5rem' }} />{staticData.userProfile[0].text}</MenuItem>
                <MenuItem onClick={handleClose}><RiAccountCircleLine size='1.5rem' style={{ marginRight: '0.5rem' }} /> {staticData.userProfile[1].text}</MenuItem>
                <MenuItem onClick={handleClose}><RiLogoutBoxRLine size='1.5rem' style={{ marginRight: '0.5rem' }} /> {staticData.userProfile[2].text}</MenuItem>
              </Menu>
            </Box>
          </Box>
        }
      </Hidden>
      <Hidden only={['md', 'lg', 'xl']}>
        <Button onClick={toggleDrawer(true)}>
          <GiHamburgerMenu size='2.5rem' />
        </Button>
        <Drawer anchor={'right'} open={opened} onClose={toggleDrawer(false)} style={{ marginTop: '50px' }}>
          <Box className={classes.flexColumn}>
            <Box className={classes.title}>
              <Typography className={classes.brand}>
                {staticData.Title}
              </Typography>
              <MdGavel size='1.7rem' style={{ marginLeft: '0.5rem' }} />
            </Box>
            <Divider />
            {isLoggedIn && <Box className={classes.flexRow}>
              <Avatar className={classes.picture} alt="user photo" src='4.jpg' />
              <Box>
                <Typography className={classes.username} > Abd Al-Ashgr</Typography>
                <Typography className={classes.view} > {staticData.userProfile[1].text}</Typography>
              </Box>
            </Box>}
            {!isLoggedIn &&<Box className={classes.links} style= {{marginBottom:'0.5rem'}}>
              <Link to={staticData.userLinks[0].path}><Typography className={classes.login}>{staticData.userLinks[0].text}</Typography></Link>
              <Link to={staticData.userLinks[1].path}><Typography className={classes.registerSide}>{staticData.userLinks[1].text}</Typography></Link>
            </Box>}
            {isLoggedIn && <Box className={classes.premiuem}>
              <AiFillStar color='#0066CC' size='1.5rem' style={{ marginRight: '0.5rem' }} />
              <Typography>{staticData.userProfile[0].text}</Typography>
            </Box>}
            <Divider />
            <Box className={classes.mainLinks}>
              <SideLink to='/'>
                <Box className={classes.route}>
                  <AiOutlineHome size='1.5rem' color='black' style={{ marginRight: '0.5rem' }} />
                  <Typography style={{ color: 'black' }}>{staticData.mainLinks[0].text}</Typography>
                </Box>
              </SideLink>
              <SideLink to='/lawyers'>
                <Box className={classes.route}>
                  <BsPeople size='1.5rem' color='black' style={{ marginRight: '0.5rem' }} />
                  <Typography style={{ color: 'black' }}>{staticData.mainLinks[1].text}</Typography>
                </Box>
              </SideLink>
              <SideLink to='/cases'>
                <Box className={classes.route}>
                  <BiBriefcase size='1.5rem' color='black' style={{ marginRight: '0.5rem' }} />
                  <Typography style={{ color: 'black' }}>{staticData.mainLinks[2].text}</Typography>
                </Box>
              </SideLink>
              <SideLink to='/blogs'>
                <Box className={classes.route}>
                  <BsBook size='1.5rem' color='black' style={{ marginRight: '0.5rem' }} />
                  <Typography style={{ color: 'black' }}>{staticData.mainLinks[3].text}</Typography>
                </Box>
              </SideLink>
            </Box>
            <Divider />
            <Box className={classes.mainLinks}>
              <SideLink>
                <Box className={classes.route}>
                  <MdLanguage size='1.5rem' color='black' style={{ marginRight: '0.5rem' }} />
                  <Typography style={{ color: 'black' }}>{staticData.Languages.Text}</Typography>
                </Box>
              </SideLink>
              {isLoggedIn && <SideLink>
                <Box className={classes.route}>
                  <RiLogoutBoxRLine size='1.5rem' color='black' style={{ marginRight: '0.5rem' }} />
                  <Typography style={{ color: 'black' }}>{staticData.userProfile[2].text}</Typography>
                </Box>
              </SideLink>}
            </Box>
          </Box>
        </Drawer>
      </Hidden>
    </Box>
  )
}

export default Header;