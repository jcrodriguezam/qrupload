import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Divider, Typography, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrosoft, faFacebook, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'

import logoDark from './../../assets/images/logo-dark.svg';
import logoLight from './../../assets/images/logo.svg';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import * as actionTypes from '../../store/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.black,
        backgroundImage: "url('https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?cs=srgb&dl=pexels-harrison-candlin-2441454.jpg&fm=jpg')",
        backgroundSize: 'cover',
        height: '100vh',
        minHeight: '100%',
    },
    backButton: {
        marginLeft: theme.spacing(2),
    },
    card: {
        overflow: 'visible',
        display: 'flex',
        position: 'relative',
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%',
            width: '50%',
        },
        maxWidth: '475px',
        margin: '24px auto',
    },
    content: {
        padding: theme.spacing(5, 4, 3, 4),
    },
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
    },
    google: {
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[400]
        }
    },
    microsoft: {
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[800]
        }
    },
    facebook: {
        backgroundColor: blue[700],
        '&:hover': {
            backgroundColor: blue[400]
        }
    },
    apple: {
        backgroundColor: grey[400],
        color: grey[800],
        '&:hover': {
            backgroundColor: grey[200]
        },
    },
}));

const Login = () => {
    const dispatch = useDispatch();

    const classes = useStyles();
    const themeColor = useSelector((state) => state.customization.navType);
    const [logo, setLogo] = React.useState(undefined);
    React.useEffect(() => { 
        switch (themeColor) {
            case 'light':
                setLogo(logoDark)
                break;
            case 'dark':
            default:
                setLogo(logoLight);
                break;
        }
    }, [themeColor]);

    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item xs={11} sm={7} md={6} lg={4}>
                <Card className={classes.card} elevation={5}>
                    <CardContent className={classes.content}>
                        <Grid container direction="column" spacing={4} justify="center">
                            <Grid item xs={12}>
                                <Grid container justify="center">
                                    <img src={logo} alt="Logo" style={{maxWidth: '150px'}}/>
                                </Grid>
                                <Grid container justify="space-between">
                                    <Grid item>
                                        <RouterLink to="/" className={classes.icon}>
                                            <img alt="Auth method" src={logo} />
                                        </RouterLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    autoFocus
                                    label="Email / Nombre de usuario"
                                    margin="normal"
                                    name="email"
                                    type="email"
                                    defaultValue=""
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Contraseña"
                                    margin="normal"
                                    name="password"
                                    type="password"
                                    defaultValue=""
                                    variant="outlined"
                                />
                                <Button
                                    fullWidth
                                    color="primary"
                                    variant="outlined"
                                    onClick={() => { alert('pulsado') }}
                                >
                                    Iniciar sesión
                                </Button>
                            </Grid>
                            <Divider />
                            <Grid container direction="column" spacing={4} justify="space-between">
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        className={[classes.socialButton, classes.google]}
                                        onClick={() => dispatch({ type: actionTypes.GOOGLE_AUTH })}
                                        >
                                       <FontAwesomeIcon icon={faGoogle} />
                                        Iniciar sesión con Google
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={[classes.socialButton, classes.facebook]}
                                        onClick={() => { alert('Iniciar sesión con Facebook') }}
                                    >
                                       <FontAwesomeIcon icon={faFacebook} />
                                        Iniciar sesión con Facebook
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={[classes.socialButton, classes.microsoft]}
                                        onClick={() => { alert('Iniciar sesión con Microsoft') }}
                                    >
                                       <FontAwesomeIcon icon={faMicrosoft} />
                                        Iniciar sesión con Microsoft
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={[classes.socialButton, classes.apple]}
                                        onClick={() => { alert('Iniciar sesión con Apple') }}
                                        >
                                       <FontAwesomeIcon icon={faApple} />
                                        Iniciar sesión con Apple
                                    </Button>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid container justify="flex-start" className={classes.margin}>
                                <Grid item>
                                    <Typography
                                        variant="subtitle2"
                                        color="primary"
                                        component={Link}
                                        to="/register"
                                        className={classes.forgot}
                                    >
                                        Crear una nueva cuenta
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Login;
