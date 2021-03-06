import DateFnsUtils from "@date-io/date-fns";
import { Button, LinearProgress } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import MuiTextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Field, Form, Formik } from "formik";
import { fieldToTextField, TextField } from "formik-material-ui";
import React from "react";
import API from "../utils/user-api";
import AppAppBar from "../views/AppAppBar";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Forage
      </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function UpperCasingTextField(props) {
    const {
        form: { setFieldValue },
        field: { name },
    } = props;

    return <MuiTextField {...fieldToTextField(props)} />;
}

async function postUser(user) {
    await API.createUser(user)
        .then((res) => {
            let currentUrl = window.location.origin;
            window.location.href = `${currentUrl}/loginPage`;
        })
        .catch((err) => {
            console.log(err);
        });
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <>
            <AppAppBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Password Recovery
          </Typography>
                    <Box m={6}></Box>
                    <Typography component="h1" variant="h5">
                        -Coming Soon-
          </Typography> <Box m={3}></Box>
          <Typography component="p" variant="h6">
          Contact: forage.app.2020@gmail.com for support.
          </Typography>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}
