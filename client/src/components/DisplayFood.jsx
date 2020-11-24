import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "5px",
    marginBottom: "5px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function DisplayFood({ recipe }) {
  const {
    label: foodName,
    image,
    ingredientLines,
    calories,
    yield: servings,
  } = recipe;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardHeader title={foodName} />
          <CardMedia className={classes.media} image={image} title={foodName} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              The Calories for {foodName} is : {Math.ceil(calories)}.
              <Divider />
              The Servings for {foodName} is : {servings}.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Ingredients:</Typography>
              <Typography paragraph>
                <ul>
                  {ingredientLines.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

export default DisplayFood;
