import { CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import KitchenIcon from "@material-ui/icons/Kitchen";
import React from "react";
import NavTabs from "../components/NavBar";
import UsersCard from "../components/UsersCard";

const useStyles = makeStyles({
  containerInfo: {
    paddingTop: "20px",
    paddingLeft: "75px",
    paddingRight: "50px",
  },
  userCard: {
    margin: "5px",
    backgroundColor: "#232b2b",
    textAlign: "center",
    color: "white",
    borderRadius: "25%",
  },
});

function UserPage() {
  /*
    @ getUserName function
    @ returns : a string of the username (the username stored in userInfo
      from the authentication implemented)
  */
  function getUserName() {
    let values = JSON.parse(localStorage.getItem("userInfo"));
    values = values._doc.username;

    return values;
  }

  const user = getUserName();
  const classes = useStyles();
  return (
    <React.Fragment>
      <NavTabs user={user} />
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Hello, {user}
      </Typography>
      <Grid container className={classes.containerInfo}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <UsersCard user={user} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <CardContent className={classes.userCard}>
            <KitchenIcon style={{ fontSize: 75 }} />
            <br />
            <Typography>
              This is the <strong>Search Food</strong> Icon. In this page you
              can <em>Forage</em> for food by searching the food of choice in
              the search bar. Then you are able to either store the food in
              breakfast, lunch, dinner, or even snack.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <CardContent className={classes.userCard}>
            <FavoriteBorderOutlinedIcon style={{ fontSize: 75 }} />
            <br />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis enim nam, neque quis dignissimos delectus, tenetur quia
              libero, consequatur nihil aperiam veritatis illo ad quos
              repellendus facere pariatur excepturi voluptatum.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <CardContent className={classes.userCard}>
            <AccountCircleOutlinedIcon style={{ fontSize: 75 }} />
            <br />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eum suscipit voluptate voluptates praesentium quisquam quaerat vel
              assumenda saepe modi! Possimus minima ab eum voluptates harum,
              dignissimos necessitatibus veniam asperiores.
            </Typography>
          </CardContent>
        </Grid>
        {/* - TODO : Have a card for calorie calc */}

        {/* - TODO : Have a chart for food that is being stored */}
        {/* <Grid item xs={4} >
                    <Chart />
                </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

export default UserPage;
