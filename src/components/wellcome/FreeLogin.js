import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }
}));


const FreeLogin = ({ updatePanel }) => {
    const classes = useStyles();
    return (
        <>
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

export default FreeLogin;
