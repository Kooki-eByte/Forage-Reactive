import { Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import NavTabs from "../components/NavBar"

const useStyles = makeStyles({
    blueBox: {
        backgroundColor: "blue",
    },
    redBox: {
        backgroundColor: "red",
    },
    greenBox: {
        backgroundColor: "green",
    },
})

// TODO : Have a function to call the DB and get the username of the user and display that as user here..
function UserPage(props) {
    // This grabs the username from the parameter
    const {match} = props
    const {params} = match
    const {user} = params

    console.log(props);
    const {blueBox, redBox, greenBox} = useStyles() 

    return (
        <div>
            <NavTabs />
            <div className="header">
                <Typography variant="h2">
                    Hello, {user}
                </Typography>
            </div>
            <div>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={6} >
                        <Paper className={blueBox}>Im blue 😄</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Paper className={redBox}>IM RED 😡</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Paper className={greenBox}>im green 🤢</Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default UserPage
