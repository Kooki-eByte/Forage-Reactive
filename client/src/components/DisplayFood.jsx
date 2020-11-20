import React from "react"
import {CardContent, Typography, Grid } from "@material-ui/core"

export default function DisplayFood(props) {
    return (
        <Grid item xs={12} sm={3} md={2} lg={3}>
            <CardContent>
                <Typography>
                    {props}
                </Typography>
            </CardContent>
        </Grid>
    )
}