import React, { lazy } from 'react';
import { Divider, Typography, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ValidateRegister = lazy(() => import('../ValidateRegister'));

const useStyles = makeStyles((theme) => ({
    forgot: {
        textDecoration: 'none',
        paddingLeft: '16px',
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    socialButton: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        justifyContent: 'center',
        width: '-webkit-fill-available',
        '& span': {
            minWidth: '270px',
            maxWidth: '270px',
            justifyContent: 'flex-start',
            '& svg': {
                marginRight: theme.spacing(1),
                marginLeft: theme.spacing(1),
            },
        }
    }
}));

const Register = () => {
    const dispatch = useDispatch();

    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [registerDone, setRegisterDone] = React.useState(false);

    const handleSetName = (value) => setName(value);
    const handleSetSurname = (value) => setSurname(value);
    const handleSetEmail = (value) => setEmail(value);
    const handleSetPassword = (value) => setPassword(value);
    const handleSetConfirmPassword = (value) => setConfirmPassword(value);
    const handleSetPhoneNumber = (value) => setPhoneNumber(value);
    const handleRegisterDone = (value) => setRegisterDone(value);

    return (
        <>
            {registerDone ? (
                <ValidateRegister email={email}/>
            ) : (
                <>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            autoFocus
                            label="Nombre"
                            margin="normal"
                            name="name"
                            type="text"
                            defaultValue={name}
                            variant="outlined"
                            onChange={(e) => {handleSetName(e.target.value)}}
                        />
                        <TextField
                            fullWidth
                            label="Apellidos"
                            margin="normal"
                            name="text"
                            type="text"
                            defaultValue={surname}
                            variant="outlined"
                            onChange={(e) => {handleSetSurname(e.target.value)}}
                        />
                        <TextField
                            fullWidth
                            label="Teléfono"
                            margin="normal"
                            name="phoneNumber"
                            type="phone"
                            defaultValue={phoneNumber}
                            variant="outlined"
                            onChange={(e) => {handleSetPhoneNumber(e.target.value)}}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            margin="normal"
                            name="email"
                            type="email"
                            defaultValue={email}
                            variant="outlined"
                            onChange={(e) => {handleSetEmail(e.target.value)}}
                        />
                        <TextField
                            fullWidth
                            label="Contraseña"
                            margin="normal"
                            name="password"
                            type="password"
                            defaultValue={password}
                            variant="outlined"
                            onChange={(e) => {handleSetPassword(e.target.value)}}
                        />
                        <TextField
                            fullWidth
                            label="Confirmar Contraseña"
                            margin="normal"
                            name="password"
                            type="password"
                            defaultValue={confirmPassword}
                            variant="outlined"
                            onChange={(e) => {handleSetConfirmPassword(e.target.value)}}
                        />
                        <Button
                            fullWidth
                            color="primary"
                            variant="outlined"
                            disabled = {!email || !password || !name || !confirmPassword || password !== confirmPassword}
                            onClick={async () => {
                                const res = await dispatch.auth.emailSignUp({email, password, name, surname, phoneNumber});
                                if (res && !res.errorCode) handleRegisterDone(true)
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
                                component={Link}
                                to="/login"
                                className={classes.forgot}
                            >
                                &lt; Iniciar sesión con una cuenta existente.
                            </Typography>
                        </Grid>
                    </Grid>
                </>
            )}
        </>  
    );
};

export default Register;
