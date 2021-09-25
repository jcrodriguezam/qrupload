import React from 'react';
import {
    Divider,
    Typography,
    makeStyles,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

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
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
}));

const ForgotPassword = ({updatePanel}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [isSended, setIsSended] = React.useState(false);
    const handleSetEmail = (value) => setEmail(value);
    const handleSetIsSended = (value) => setIsSended(value);

    return (
        <>
            <Grid item xs={12}>
                <Typography
                    color="primary"
                    className={classes.title}
                >
                    Restablecer contraseña
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="secondary"
                    className={classes.subtitle}
                    style={{display: isSended ? 'flex' : 'none', justifyContent: 'center'}}
                >
                    Revise su email.
                </Typography>
                <br />
                <Typography
                    variant="body1"
                    color="textPrimary"
                    className={classes.text}
                    style={{display: !isSended ? 'flex' : 'none'}}
                >
                    Indique su correo electrónico para proceder a la recuperación de la cuenta.
                </Typography>
                <Typography
                    variant="body1"
                    color="textPrimary"
                    className={classes.text}
                    style={{display: isSended ? 'flex' : 'none'}}
                >
                    Recibirá un correo electrónico con la información para restablecer las claves de acceso a su cuenta.
                </Typography>
                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    type="email"
                    defaultValue={email}
                    variant="outlined"
                    onChange={(e) => {handleSetEmail(e.target.value)}}
                    style={{display: !isSended ? 'flex' : 'none'}}

                />
                <Button
                    fullWidth
                    color="primary"
                    variant="outlined"
                    disabled = {!email}
                    style={{display: !isSended ? 'flex' : 'none'}}
                    onClick={async () => {
                        await dispatch.users.sendPasswordResetEmail({email})
                        handleSetIsSended(true)
                    }}
                >
                    Enviar
                </Button>
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

export default ForgotPassword;
