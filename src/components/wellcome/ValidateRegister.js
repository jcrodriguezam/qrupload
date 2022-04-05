import React from 'react';
import { Divider, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    forgot: {
        paddingLeft: '16px',
        textDecoration: 'none',
        display: 'block',
        marginTop: '0em',
        marginBottom: '1em',
        cursor: 'pointer',
    },
    title: {
        textDecoration: 'none',
        fontSize: '24px',
        textAlign: 'center'
    },
    subtitle: {
        textDecoration: 'none',
        textAlign: 'center'
    },
    text: {
        textDecoration: 'none',
        paddingLeft: '16px',
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
}));

const ValidateRegister = ({updatePanel, email=''}) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12}>
                <Typography
                    color="primary"
                    className={classes.title}
                >
                    Verificación de email
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="secondary"
                    className={classes.subtitle}
                >
                    Se ha registrado correctamente.
                </Typography>
                <br />
                <Typography
                    variant="body1"
                    color="textPrimary"
                    className={classes.text}
                >

                    Es necesario validar la cuenta para poder iniciar sesión, en unos minutos recibirá un email con los pasos a seguir en la dirección :
                </Typography>
                <br />
                <Typography
                    variant="subtitle2"
                    color="primary"
                    className={classes.text}
                >
                    <strong>{email}</strong>
                </Typography>
            </Grid>
            <Divider />
            <Grid container justify="flex-start" className={classes.margin}>
                <Grid item>
                    <Typography
                        variant="subtitle2"
                        color="primary"
                        className={classes.forgot}
                        onClick={() => updatePanel('login')}
                    >
                        &lt; Iniciar sesión.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default ValidateRegister;
