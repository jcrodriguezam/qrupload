import React, { lazy } from 'react';
import parse from 'html-react-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { FileInupt } from "./TakePhoto";

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
    Box,
    Container,
    Avatar
} from '@material-ui/core';
import HeartIcon from '@material-ui/icons/Favorite';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import logoDark from './../../assets/images/logo-dark.svg';
import logoLight from './../../assets/images/logo.svg';


import carla from './../../assets/images/carla.png';
import jose from './../../assets/images/jose.png';
import mario from './../../assets/images/mario.png';
import rei from './../../assets/images/rei.png';
import suegra from './../../assets/images/suegra.png';
import copa from './../../assets/images/copa.png';
import malo from './../../assets/images/malo.png';
import pregunta1 from './../../assets/images/pregunta1.png';
import pregunta3 from './../../assets/images/pregunta3.png';

const FreeLogin = lazy(() => import('./FreeLogin'));
const SignUp = lazy(() => import('./Register'));
const FollowMe = lazy(() => import('./FollowMe'));
const TakePhoto = lazy(() => import('./TakePhoto'));
const ThankYou = lazy(() => import('./ThankYou'));

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
    user: {
        display: 'flex',
        margin: 'auto',
        backgroundColor: 'transparent',
        maxWidth: '250px',
        height: '170px',
        objectFit:'contain',
        justifyContent: 'center',
        //'o-webkit-filter': 'drop-shadow(2px 2px 5px #c4c9e5 )',
        //filter: 'drop-shadow(2px 2px 5px #c4c9e5)',
    },
    userTitle: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        marginTop: '.1em',
        fontSize: '2em',
        whiteSpace: 'noWrap',
        // backgroundColor: '#c4c9e5b5',
        padding: '0 2em',
        fontWeight: 600,
    },
    accentColor: {
        color: '#b90164'
    }
    
}));

const extras = ['mario', 'rei', 'copa', 'pregunta1', 'pregunta2', 'malo', 'pregunta3'];



const Overlay = (props) => {
    return  (
        <div>
            {props.children}
        </div>
    );
};

const User = ({userName}) => {
    const classes = useStyles();
let foto = mario;
let description
switch (userName) {
    case 'jose': 
        foto = jose; 
        description = <span>Soy amig@ de <b className={classes.accentColor}>Jose</b></span>
        break;
    case 'carla': 
        foto = carla; 
        description = <span>Soy amig@ de <b className={classes.accentColor}>Carla</b></span>
        break;
    case 'rei': 
        foto = rei; 
        description = <span>Perdón, me he <b className={classes.accentColor}>equivocado</b></span>
        break;
    case 'copa': 
        foto = copa; 
        description = <span>Caña <b className={classes.accentColor}>aquí</b> !!!</span>
        break;
    case 'pregunta1': 
        foto = pregunta1; 
        description = <span>¿Quién es <b className={classes.accentColor}>Jose</b>?</span>
        break;
    case 'pregunta2': 
        foto = suegra; 
        description = <span>¿Quién es <b className={classes.accentColor}>Carla</b>?</span>
        break;
    case 'pregunta3': 
        foto = pregunta3; 
        description = <span>¿Pero quién se <b className={classes.accentColor}>casa</b>?</span>
        break;
    case 'malo': 
        foto = malo; 
        description = <span>Vengo a <b className={classes.accentColor}>destruir</b> esta boda</span>
        break;
    case 'mario': 
        foto = mario; 
        description = <span>Me he <b className={classes.accentColor}>colado</b> en la boda</span>
        break;
    default: 
        foto = mario; 
        description = <span>Me he <b className={classes.accentColor}>colado</b> en la boda</span>
        break;
}

    return  (
        <Box flexDirection='column' mb='2em'>
            <Avatar alt="Remy Sharp" src={foto}  style={{ width: 140, height: 140, margin: 'auto' }}/>
            <Typography
                mb={0}
                variant="subtitle2"
                color="primary"
                align="center"
                style={{
                    fontWeight: 600,
                    fontSize: '1.2em',
                    whiteSpace: 'nowrap',
                    padding: '.2em 3em',
                   // background: 'linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(255,255,255,.8) 20%, rgba(255,255,255,.8) 80%, rgba(0,212,255,0) 100%)',
                }}
            >
                {description}
            </Typography>
        </Box>
    );
};

const Panel = ({content, updatePanelContent}) => {
    const classes = useStyles();
    const themeColor = useSelector((state) => state.customization.navType);
    const [logo, setLogo] = React.useState(undefined);
    const [step, setStep] = React.useState(1);

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

      const extraPos = Math.floor(Math.random() * (extras.length - 0)) + 0;
      const extrauser = extras[extraPos]

      const nextStep = (value) => {
        if (value) {
            setStep(value)
        } else {
            setStep(step + 1)
        }
    }
      const goBack = (value) => { 
          console.log(value)
          if (value) {
            setStep(value) 
          } else {
            setStep(step - 1)
        }
      }

    return  (
        <>
            {step === 1 && (
                <Grid container justify="center" alignItems="center" className={classes.root} margin='auto' direction='column'>
                    <Grid item xs={12} justifyContent="center">
                        <Slide direction="down" in={iniciar && step === 1}  out={step !== 1} container={containerRef.current}>
                            <Box justifyContent="center">
                                <Typography
                                    variant="h2"
                                    color="primary"
                                    align="center"
                                    style={{
                                        whiteSpace: 'nowrap',
                                        margin: '0 auto 1em auto',
                                    }}

                                >
                                    ¿Quien eres?
                                </Typography>
                            </Box>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} justifyContent="center">
                        <Slide direction="right" in={iniciar && step === 1}  out={step !== 1} container={containerRef.current}>
                            <Box justifyContent="center"  onClick={() => nextStep(3)}>
                                <User userName='jose'/>
                            </Box>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} justifyContent="center" >
                        <Slide direction="left" in={iniciar && step === 1}  out={step !== 1} container={containerRef.current}>
                            <Box justifyContent="center"  onClick={() => nextStep(3)}>
                                <User userName='carla' />
                            </Box>
                        </Slide>
                    </Grid>
                    <Grid item xs={12}>
                        <Slide direction="up" in={iniciar && step === 1} out={step !== 1} container={containerRef.current}>
                            <Box justifyContent="center"  onClick={() => nextStep(3)}>
                                <User userName={extrauser} />
                            </Box>
                        </Slide>
                    </Grid>
                </Grid>
            )}
            {step === 2 && (
                <Grid container justify="center" alignItems="center" className={classes.root} margin='auto' direction='column'>
                    <Grid item xs={10} style={{width: '100vw', height: '100vh', overflow: 'scroll'}}>
                        <Slide direction="up" in={iniciar && step === 2}  out={step !== 2} container={containerRef.current}>
                            <Card className={classes.card} elevation={15} >
                                <CardContent className={classes.content}>
                                    <FollowMe goBack={() => goBack()} next={() => nextStep()}/>
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                </Grid>
            )}
            {step === 3 && (
                <Grid container justify="flex-start" alignItems="center" className={classes.root} margin='2em auto' direction='column'>
                    <Grid item xs={10} style={{width: '100vw', maxHeight: '80vh', minHeight: '80vh', overflow: 'hidden', overflowY: 'scroll'}}>
                        <Slide direction="up" in={iniciar && step === 3}  out={step !== 3} container={containerRef.current}>
                            <Box>
                                <FileInupt next={() => nextStep(4)}/>
                            </Box>
                        </Slide>
                    </Grid>
                </Grid>
            )}
            {step === 4 && (
                <Grid container justify="center" alignItems="center" className={classes.root} margin='auto' direction='column'>
                    <Grid item xs={10}>
                        <Slide direction="up" in={iniciar && step === 4}  out={step !== 4} container={containerRef.current}>
                            <Card className={classes.card} elevation={15} >
                                <CardContent className={classes.content}>
                                    <ThankYou goBack={() => goBack()} />
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                </Grid>
            )}
        </>
    )
};

const WellcomePanel = ({panelContent, show}) => {
    const [content, setContent] = React.useState(panelContent);
    const handlePanelContent = (value) => setContent(value);
    return (
        <Fade in={show}>
            <Overlay>
                <Panel updatePanelContent={handlePanelContent} content={content}/>
                <Typography
                      mb={0}
                      variant="subtitle2"
                        style={{
                            color:'#fff',
                            lineHeight:'3em',
                            opacity: '.8'
                        }}
                     align="center"
                    >
                        Made with <HeartIcon style={{color:'#b90164', fontSize: '1.3em'}} /> by <b>ROAM</b>
                    </Typography>
            </Overlay>
        </Fade>
    );
};

export {
    WellcomePanel,
};