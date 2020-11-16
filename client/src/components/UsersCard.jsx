import { CardContent } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles({
    userCard: {
        marginLeft: "5px",
        marginRight: "5px",
        backgroundColor: "#232b2b",
        textAlign: "center",
        color: "white",
        borderRadius: "25%"
    },
    cardMedia: {
        borderRadius: '50%',
        margin: '28px'
    }
})

const UsersCard = ({user}) => {

    const {userCard, cardMedia} = useStyles()
    return (
        <CardContent className={userCard}>
            <img src="https://via.placeholder.com/150" alt="user" className={cardMedia}/>
            <br/>
            {user}'s DashBoard
        </CardContent>
    )
}

export default UsersCard