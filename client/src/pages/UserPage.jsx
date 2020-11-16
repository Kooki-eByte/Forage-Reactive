import { CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import KitchenIcon from '@material-ui/icons/Kitchen';
import React from "react";
import NavTabs from "../components/NavBar";
import UsersCard from "../components/UsersCard";

const useStyles = makeStyles({
    containerInfo: {
        paddingTop: "20px",
        paddingLeft: "75px",
        paddingRight: "50px"
    },
    userCard: {
        margin: "5px",
        backgroundColor: "#232b2b",
        textAlign: "center",
        color: "white",
        borderRadius: "25%"
    },
})

// TODO : Have a function to call the DB and get the username of the user and display that as user here..
function UserPage(props) {
    // This grabs the username from the parameter thats passed from the app.js
    const {match} = props
    const {params} = match
    const {user} = params

    const classes = useStyles() 
    return (
        <React.Fragment>
            <NavTabs user={user}/>
            <Typography variant="h2" style={{textAlign:"center"}}>
                Hello, {user}
            </Typography>
            <Grid container className={classes.containerInfo}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <UsersCard user={user}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={3}>
                    <CardContent className={classes.userCard}>
                        <KitchenIcon style={{ fontSize:75 }}/>
                        <br/>
                        <Typography>This is the <strong>Search Food</strong> Icon. In this page you can <em>Forage</em> for food by searching the food of choice in the search bar. Then you are able to either store the food in breakfast, lunch, dinner, or even snack.</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={3}>
                    <CardContent className={classes.userCard}>
                        <FavoriteIcon style={{ fontSize:75 }}/>
                        <br/>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis enim nam, neque quis dignissimos delectus, tenetur quia libero, consequatur nihil aperiam veritatis illo ad quos repellendus facere pariatur excepturi voluptatum.</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={3}>
                    <CardContent className={classes.userCard}>
                        <AccountCircle style={{ fontSize:75 }}/>
                        <br/>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum suscipit voluptate voluptates praesentium quisquam quaerat vel assumenda saepe modi! Possimus minima ab eum voluptates harum, dignissimos necessitatibus veniam asperiores.</Typography>
                    </CardContent>
                </Grid>
                {/* - TODO : Have a card for calorie calc */}

                {/* - TODO : Have a chart for food that is being stored */}
                {/* <Grid item xs={4} >
                    <Chart />
                </Grid> */}
            </Grid>
        </React.Fragment>
    )
}

export default UserPage
