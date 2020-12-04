import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CalcImg from '../images/foodcalc.jpg'
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 690,
  },
  media: {
    height: 280,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <NavLink to="/calorieCalculator" style={{ textDecoration: 'none' }} className=
    {window.location.pathname === "/calorieCalculator"
      ? "nav-link active"
      : "nav-link"}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={CalcImg}
          title="Calorie Calculator"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Calorie Calculator
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is the Calorie Calculator tool that is used to estimate your calorie needs based on your goal
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink>
  );
}