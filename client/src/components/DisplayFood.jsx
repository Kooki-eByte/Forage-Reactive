import React from "react"
import {CardContent, Typography, Grid } from "@material-ui/core"

export default function DisplayFood({id, type, name, image, ingredients, servings, calories}) {
    return (
        <Grid item xs={12} sm={3} md={2} lg={3}>
            <CardContent>
                <Typography>
                    id: {id}
                    type: {type}
                    name: {name}
                    <img src={image} alt="burger" style={{height:"100px", width:"100px"}}/>
                    ingredients: {ingredients}
                    servings: {servings}
                    calories: {calories}
                </Typography>
            </CardContent>
        </Grid>
    )
}