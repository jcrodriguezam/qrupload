import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, useMediaQuery, useTheme, Divider, Drawer, Grid } from '@material-ui/core';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import MenuList from './MenuList';

import logoLight from './../../../assets/images/logo.svg';
import logoDark from './../../../assets/images/logo-dark.svg';

import { drawerWidth } from '../../../store/constant';

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    onTop: {
        zIndex: 1202,
    },
    toolbar: theme.mixins.toolbar,
    logoContainer: {
        lineHeight: 0,
        background: 'transparent',
    },
    drawerPaper: {
        width: drawerWidth,
        background: theme.palette.common.black,
        color: theme.palette.text.primary,
    },
    drawerPaperLight: {
        width: drawerWidth,
        borderRight: 'none',
        boxShadow: '0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15)',
        top: '0px',
        [theme.breakpoints.down('sm')]: {
            top: 0,
        },
    },
    menuCaption: {
        ...theme.typography.menuCaption,
    },
    ScrollHeight: {
        height: 'calc(100vh - 65px)',
        padding: '10px',
    },
}));

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
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

    const drawer = (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="center"
                elevation={5}
                alignItems="center"
                spacing={0}
                className={[classes.toolbar, classes.logoContainer].join(' ')}
            >
                <Grid xs={6} item>
                    <img src={logo} alt="Logo" />
                </Grid>
            </Grid>
            <Divider />
            <PerfectScrollbar className={classes.ScrollHeight}>
                <MenuList />
            </PerfectScrollbar>
        </React.Fragment>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={clsx(classes.drawer, { [classes.onTop]: drawerOpen })} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                classes={{ paper: classes.drawerPaperLight }}
                ModalProps={{ keepMounted: true }}
            >
                {drawer}
            </Drawer>
        </nav>
    );
};

export default Sidebar;
