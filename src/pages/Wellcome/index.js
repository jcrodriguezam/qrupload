import React from 'react';
import {  makeStyles, Fade } from '@material-ui/core';

import { WellcomePanel } from '../../components/wellcome';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoDark from './../../assets/images/logo-dark.svg';
import logoLight from './../../assets/images/logo.svg';
import background from './../../assets/images/bg0.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        height: '100vh',
        minHeight: '100%',
    },
    backgroundImg: {
        position: 'fixed',
        top: 0,
        left: 0,
        objectFit: 'cover',
        objectPosition: 'center',
        height: '100%',
        width: '100%',
        transition: 'all .3s ease-in',
        zIndex: -1,
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
        transition: 'all .3s .4s ease-in'
    },
    content: {
        padding: theme.spacing(5, 4, 3, 4),
    }
}));

const BackgroundImg = ({isLoaded, onLoad}) => {
    const classes = useStyles();

    
    return  (
        <Fade in={isLoaded}>
            <img 
                className={classes.backgroundImg}
                alt= "background"
                src={background}
                onLoad={() => onLoad()}
            />
        </Fade>
    )
};

const Wellcome = () => {
    const location = useLocation()
    let {pathname, search} = location;
    const themeColor = useSelector((state) => state.customization.navType);

    pathname = pathname.substring(1, pathname.length)
    search = search.substring(1, search.length)
    const [logo, setLogo] = React.useState(undefined);

    const [bgLoaded, setBgLoaded] = React.useState(false);
    const handleOnLoad = () => setBgLoaded(true)

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
        <>
            <BackgroundImg onLoad={handleOnLoad} isLoaded={bgLoaded}/>
            <WellcomePanel panelContent={pathname} show={bgLoaded}/>
        </>
    );
};

export default Wellcome;
