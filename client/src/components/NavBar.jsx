import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import KitchenIcon from '@material-ui/icons/Kitchen';
import MoreIcon from '@material-ui/icons/MoreVert';
import PeopleIcon from "@material-ui/icons/People";
import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import MiniForageImage from "../images/Forage.png";
import { AuthContext } from "./../context/AuthContext"


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textAlign: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  miniForage: {
    marginRight: theme.spacing(2)
  },
}));

export default function PrimarySearchAppBar(props) {
  const {user} = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const auth = useContext(AuthContext)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    auth.logout()
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to={`/${user}`}>
        <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
      </Link>

      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      color="#ffffff"
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link className="link-tag-mini" to="/socialmedia" >
          <IconButton aria-label="" color="inherit">
            <PeopleIcon />
          </IconButton>
          <p>Foragers</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className="link-tag-mini" to="/searchFood">
          <IconButton aria-label="" color="inherit">
            <KitchenIcon />
          </IconButton>
          <p>Search Food</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className="link-tag-mini" to="/mealPlan" >
          <IconButton aria-label="" color="inherit">
            <FavoriteIcon />
          </IconButton>
          <p>Display Food</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="#ffffff">
        <Toolbar>
            <img
              className={classes.miniForage}
              src={MiniForageImage}
              alt="Forage icon"
            />
          <Typography className={classes.title} variant="h6" noWrap>
            Forage
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link className="link-tag" to="/socialmedia" >
              <IconButton aria-label="show 4 new mails" color="#000000de">
                <PeopleIcon />
              </IconButton>
            </Link>
            <Link className="link-tag" to="/searchFood" >
              <IconButton aria-label="show 4 new mails" color="#000000de">
                <KitchenIcon />
              </IconButton>
            </Link>
            <Link className="link-tag" to="/mealPlan" >
              <IconButton aria-label="show 17 new notifications" color="#000000de">
                <FavoriteIcon />
              </IconButton>
            </Link>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#000000de"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )}