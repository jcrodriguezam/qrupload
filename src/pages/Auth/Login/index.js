import React from 'react';
import { Divider, Typography, makeStyles, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {LoginButton, EmailSignIn} from '../../../components/login';

const useStyles = makeStyles((theme) => ({
    forgot: {
        textDecoration: 'none',
        paddingLeft: '16px',
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }
}));

const LOGIN_TYPES = {
    GOOGLE: 'GOOGLE',
    APPLE: 'APPLE',
    FACEBOOK: 'FACEBOOK',
    MICROSOFT: 'MICROSOFT',
}

const Login = () => {
    const classes = useStyles();
    return (
        <>
            <EmailSignIn />
            <Divider />
            <Grid container direction="column" spacing={4} justify="space-between">
                <Grid item xs={12}>
                    <LoginButton type={LOGIN_TYPES.GOOGLE} />
                    <LoginButton type={LOGIN_TYPES.FACEBOOK} />
                    <LoginButton type={LOGIN_TYPES.MICROSOFT} />
                    <LoginButton type={LOGIN_TYPES.APPLE} />
                </Grid>
            </Grid>
            <Divider />
            <Grid container justify="flex-start" className={classes.margin}>
                <Grid item>
                    <Typography
                        variant="subtitle2"
                        color="primary"
                        component={Link}
                        to="/login?register"
                        className={classes.forgot}
                    >
                        Crear una nueva cuenta
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;
