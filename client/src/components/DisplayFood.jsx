import React from "react"
import {CardContent, Typography } from "@material-ui/core"

export default function DisplayFood({id, type, name, image, ingredients, servings, calories}) {
    return (
        <CardContent>
            <Typography>
                id: {id}
                type: {type}
                name: {name}
                <img src={image} alt="burger"/>
                ingredients: {ingredients}
                servings: {servings}
                calories: {calories}
            </Typography>
        </CardContent>
    )
}