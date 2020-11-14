import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import HomeBackgroundImage from '../images/jakub-kapusnak-sDbj1dFlFPU-unsplash.jpg';
import LargeForageIcon from '../images/Orgtrans.png';

const styles = (theme) => ({

  background: {
    backgroundImage: `url(${HomeBackgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  largeForageIcon: {
    height: "30%",
    width: "30%"
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={HomeBackgroundImage} alt="increase priority" />
      <img className={classes.largeForageIcon} src={LargeForageIcon} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        A Social Meal Planning Ecosystem
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Sign Up
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Upgrade your lifestyle.. its free!
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);