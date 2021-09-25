import React, { lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import {
    faMicrosoft,
    faFacebook,
    faApple,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';
import { 
    Card,
    CardContent,
    makeStyles,
    Button,
    TextField,
    Grid,
    Typography,
    Fade,
    Slide,
} from '@material-ui/core';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import logoDark from './../../assets/images/logo-dark.svg';
import logoLight from './../../assets/images/logo.svg';

const Login = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./Register'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        height: '100%',
        minHeight: '100vh',
    },
    forgot: {
        textDecoration: 'none',
        display: 'block',
        marginTop: '0em',
        marginBottom: '1em',
        cursor: 'pointer',
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
        transition: 'all .3s .4s ease-in',
        opacity: .92,
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
    overlay: {
        background: 'hsla(0, 0%, 100%, .8)',
        background: 'radial-gradient(circle, transparent 0%, hsla(0, 0%, 0%, 1) 100%)',
        background: '-moz-radial-gradient(circle, transparent 0%, hsla(0, 0%, 0%, 1) 100%)',
        background: '-webkit-radial-gradient(circle, transparent 0%, hsla(0, 0%, 0%, 1) 100%)',
        opacity: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        zIndex: 999999,
    },
    backgroundImg: {
        position: 'fixed',
        top: 0,
        left: 0,
        objectFit: 'cover',
        objectPosition: 'center',
        height: '100vh',
        width: '100vw',
        transition: 'all .3s ease-in',
        zIndex: -1,
        },
}));

const LoginButton = ({type}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const LOGIN_BUTTON_CONTENT = {
        GOOGLE: {
            icon: faGoogle,
            text: 'Iniciar sesión con Google',
            action: () => dispatch.auth.googleAuth(),
            classes: [classes.socialButton, classes.google]
        },
        APPLE: {
            icon: faApple,
            text: 'Iniciar sesión con Apple',
            action: () => alert('Iniciar sesión con Apple'),
            classes: [classes.socialButton, classes.apple]
        },
        FACEBOOK: {
            icon: faFacebook,
            text: 'Iniciar sesión con Facebook',
            action: () => alert('Iniciar sesión con Facebook'),
            classes: [classes.socialButton, classes.facebook]
        },
        MICROSOFT: {
            icon: faMicrosoft,
            text: 'Iniciar sesión con Microsoft',
            action: () => alert('Iniciar sesión con Facebook'),
            classes: [classes.socialButton, classes.microsoft]
        },
    }

    if (!LOGIN_BUTTON_CONTENT[type]) return '';

    return (
        <Button
            variant="contained"
            className={LOGIN_BUTTON_CONTENT[type].classes}
            onClick={() => LOGIN_BUTTON_CONTENT[type].action()}
            >
            <FontAwesomeIcon icon={LOGIN_BUTTON_CONTENT[type].icon} />
            {LOGIN_BUTTON_CONTENT[type].text}
        </Button>
    );
};

const EmailSignIn = ({updatePanel}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSetEmail = (value) => setEmail(value);
    const handleSetPassword = (value) => setPassword(value);

    return (
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
            <Typography
                variant="subtitle2"
                color="primary"
                className={classes.forgot}
                onClick={() => updatePanel('forgotPassword')}
                // onClick={() => dispatch.users.sendPasswordResetEmail({email: 'jcrodriguezam@gmail.com'})}
            >
                He olvidado mi contraseña
            </Typography>
            <Button
                fullWidth
                color="primary"
                variant="outlined"
                onClick={() => dispatch.auth.emailSignIn({email, password})}
            >
                Iniciar sesión
            </Button>
        </Grid>
    );
};

const Overlay = (props) => {
    const classes = useStyles();
    return  (
        <div className={classes.overlay}>
            {props.children}
        </div>
    );
};

const PanelContent = ({content, updatePanelContent}) => {
    switch (content) {
        case 'signUp':
            return <SignUp updatePanel={updatePanelContent}/>;
        case 'forgotPassword':
            return <ForgotPassword updatePanel={updatePanelContent}/>;
        default:
        case 'login':
            return <Login updatePanel={updatePanelContent}/>;
    }
};

const Panel = ({content, updatePanelContent}) => {
    const classes = useStyles();
    const themeColor = useSelector((state) => state.customization.navType);
    const [logo, setLogo] = React.useState(undefined);
    const [iniciar, setIniciar] = React.useState(undefined);
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

    React.useEffect(() => {
        const timer = setTimeout(() => {setIniciar(true)}, 1000);
        return () => clearTimeout(timer);
      }, []);
      const containerRef = React.useRef(null);

    return  (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item xs={11} sm={7} md={6} lg={4}>
                <Slide direction="up" in={iniciar} container={containerRef.current}>
                    <Card className={classes.card} elevation={15} >
                        <CardContent className={classes.content}>
                            <Grid container direction="column" spacing={4} justify="center">
                                <Grid item xs={12}>
                                    <Grid container justify="center">
                                        <img src={logo} alt="Logo" style={{maxWidth: '150px'}}/>
                                    </Grid>
                                </Grid>
                                <br />
                                <PanelContent updatePanelContent={updatePanelContent} content={content} />
                            </Grid>
                        </CardContent>
                    </Card>
                </Slide>
            </Grid>
        </Grid>
    )
};

const AuthPanel = ({panelContent, show}) => {
    const [content, setContent] = React.useState(panelContent);
    const handlePanelContent = (value) => setContent(value);
    return (
        <Fade in={show}>
            <Overlay>
                <Panel updatePanelContent={handlePanelContent} content={content}/>
            </Overlay>
        </Fade>
    );
};

export {
    LoginButton,
    EmailSignIn,
    AuthPanel,
};
