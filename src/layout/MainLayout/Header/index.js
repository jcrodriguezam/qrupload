import React from 'react';
import { Box, Grid, makeStyles, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';

import MenuOpenTwoToneIcon from '@material-ui/icons/MenuOpenTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

import SearchSection from './SearchSection';
// import Customization from './Customization';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

import { drawerWidth } from '../../../store/constant';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1.25),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuIcon: {
        fontSize: '1.5rem',
        color: theme.palette.getContrastText(theme.palette.background.default),
    },
}));

const Header = ({ drawerOpen, drawerToggle }) => {
    const classes = useStyles();
    const hideSearch = useSelector((state) => state.customization.hideSearch);
    const hideNotifications = useSelector((state) => state.customization.hideNotifications);
    const [searchBox, setSearchBox] = React.useState(hideSearch);
    const [notifications, setNotifications] = React.useState(hideNotifications);
    React.useEffect(() => { setSearchBox(hideSearch)}, [hideSearch]);
    React.useEffect(() => { setNotifications(notifications)}, [hideNotifications, notifications]);
    return (
        <React.Fragment>
            <Box width={drawerWidth}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={drawerToggle}
                        >
                            {drawerOpen ? (
                                <MenuOpenTwoToneIcon className={classes.menuIcon} />
                                ) : (
                                <MenuTwoToneIcon className={classes.menuIcon} />
                            )}
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            <div className={classes.grow} />
            {!searchBox && (
                <SearchSection />
            )}
            {!hideNotifications && (
                <NotificationSection />
            )}
            {/* <Customization /> */}
            <ProfileSection />
        </React.Fragment>
    );
};

export default Header;
