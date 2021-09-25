import React from 'react';
import { Divider, Typography, makeStyles, Grid } from '@material-ui/core';
import {LoginButton, EmailSignIn} from './index';

const useStyles = makeStyles((theme) => ({
    forgot: {
        textDecoration: 'none',
        display: 'block',
        marginTop: '0em',
        marginBottom: '1em',
        cursor: 'pointer',
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

const Login = ({ updatePanel }) => {
    const classes = useStyles();
    return (
        <>
            <EmailSignIn updatePanel={updatePanel}/>
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
                        className={classes.forgot}
                        onClick={(e) => updatePanel('signUp') }
                    >
                        Crear una nueva cuenta
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;
