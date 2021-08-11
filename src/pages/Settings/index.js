import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions';

import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import Brightness2TwoToneIcon from '@material-ui/icons/Brightness2TwoTone';

import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import NotificationsOffTwoToneIcon from '@material-ui/icons/NotificationsOffTwoTone';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import BlockTwoToneIcon from '@material-ui/icons/BlockTwoTone';

import GTranslateTwoToneIcon from '@material-ui/icons/GTranslateTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';

import ReportCard from './ReportCard';

import { gridSpacing } from './../../store/constant';

import { useMediaQuery, Box, TextField, MenuItem, Typography, Button, Card, CardContent } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '350px',
        minWidth: '250px',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: 0,
        borderRadius: '10px',
    },
    subHeader: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        padding: '5px 15px',
    },
    menuIcon: {
        fontSize: '1.5rem',
        color: theme.palette.getContrastText(theme.palette.background.default),
    },
    gridContainer: {
        padding: '10px',
    },
    formContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    menuButton: {
        [theme.breakpoints.down('sm')]: {
            minWidth: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: '35px',
        },
    },
    iconSelect: {
        color: theme.palette.getContrastText(theme.palette.background.default),
        fontSize: '1.4rem',
    },
    selectColor: {
        color: theme.palette.getContrastText(theme.palette.background.default),
        fontSize: '1rem',
        marginTop: '4px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.875rem',
        },
    },
    underlineSelect: {
        ':before': {
            display: 'none',
        },
    },
    selectIcon: {
        marginRight: '4px',
        color: theme.palette.getContrastText(theme.palette.background.default)
    },
    colorButton: {
        padding: 0,
    },
    title: {
        color: theme.palette.primary.main,
        marginTop: '.5rem',
        marginBottom: '2rem',
    },
    colorOptionBorder: {
        padding:'.5rem',
        margin: '.5rem',
        border: '2px solid transparent',
        transition: 'all .4s ease-in-out',
        borderRadius: '.5rem',
        '&:hover': {
            border: `2px solid ${theme.palette.menuHover}`,
            backgroundColor: `${theme.palette.primary.main}33`,
        },
    },
}));

const languages = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'fr',
        label: 'français',
    },
    {
        value: 'ro',
        label: 'Română',
    },
    {
        value: 'zh',
        label: '中国人',
    },
];

const availableColors = [
    {primary: '#3cb778',  menuHover: '#e9fff4'},
    {primary: '#f44336',  menuHover: '#fbc3be'},
    {primary: '#2196f3',  menuHover: '#c5dcf7'},
    {primary: '#ffa000',  menuHover: '#fde7bf'},
    {primary: '#ff01bd',  menuHover: '#f0c2f1'},
    {primary: '#ff6a00',  menuHover: '#f9dcc7'},
    {primary: '#f575af',  menuHover: '#006d13'},
    {primary: '#aeb6c7',  menuHover: '#181e2b'},
    {primary: '#96e400',  menuHover: '#2700ff'},
    {primary: '#d80cfd',  menuHover: '#2cef8b'},
    {primary: '#f4a100',  menuHover: '#181e2b'},
    {primary: '#ffc14f',  menuHover: '#503a07'},
];

const Settings = () => {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const matchDownSm = useMediaQuery(theme.breakpoints.down('xs'));
    const navType = useSelector((state) => state.customization.navType);
    const locale = useSelector((state) => state.customization.locale);
    const hideSearch = useSelector((state) => state.customization.hideSearch);
    const hideNotifications = useSelector((state) => state.customization.hideNotifications);
    const primaryColor = useSelector((state) => state.customization.primary);
    const menuHoverColor = useSelector((state) => state.customization.menuHover);

    const [currentTheme, setCurrentTheme] = React.useState(navType === 'light');
    const [currentLanguage, setCurrentLanguage] = React.useState(locale);
    const [searchBox, setSearchBox] = React.useState(hideSearch);
    const [notifications, setNotifications] = React.useState(hideNotifications);
    const [selectedColors, setSelectedColors] = React.useState({primary: primaryColor, menuHover: menuHoverColor});
    const [currentLanguageLabel, setCurrentLanguageLabel] = React.useState(languages.find(l => l.value = locale).label || 'en');

    const isSelectedColor = ({primary, menuHover}) => {
        return primary === selectedColors.primary && menuHover === selectedColors.menuHover
    }

    const handleSwitchTheme = () => {
        dispatch({ type: actionTypes.THEME_SWITCH_SCHEME })
        setCurrentTheme(!currentTheme)
    };

    const handleSwitchColor = (value) => {
        dispatch({ type: actionTypes.THEME_SWITCH_COLOR, ...value });
        setSelectedColors(value);
    };

    const handleSearchBox = () => {
        dispatch({ type: actionTypes.HIDE_SEARCH });
        setSearchBox(!searchBox)
    };

    const handleNotifications = () => {
        dispatch({ type: actionTypes.HIDE_NOTIFICATIONS });
        setNotifications(!notifications)
    };

    const handleChangeLanguage = (event) => {
        setCurrentLanguage(event.target.value);
        dispatch({ type: actionTypes.THEME_LOCALE, locale: event.target.value });
    };

    React.useEffect(() => {
        setCurrentLanguageLabel(languages.find(l => l.value = currentLanguage).label || 'en');
    }, [currentLanguage]);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item  xl={3} md={6} xs={12}>
                        <ReportCard
                            primary="Esquema de colores"
                            secondary={currentTheme ? "Seleccionado modo claro" : "Seleccionado modo oscuro"}
                            color={theme.palette.colorYellow}
                            footerData={currentTheme ? "Establecer modo oscuro" : "Establecer modo claro"}
                            iconPrimary={currentTheme ? WbSunnyTwoToneIcon : Brightness2TwoToneIcon}
                            iconFooter={currentTheme ? Brightness2TwoToneIcon : WbSunnyTwoToneIcon}
                            footerAction={handleSwitchTheme}
                            />
                    </Grid>
                    <Grid item xl={3} md={6} xs={12}>
                        <ReportCard
                            primary="Notificaciones"
                            secondary={notifications ? "Notificaciones desactivadas" : "Notificaciones activas"}
                            color={theme.palette.colorRed}
                            footerData={notifications ? "Activar notificaciones" : "Desactivar notificaciones"}
                            iconPrimary={notifications ? NotificationsOffTwoToneIcon : NotificationsActiveTwoToneIcon}
                            iconFooter={notifications ? NotificationsActiveTwoToneIcon : NotificationsOffTwoToneIcon}
                            footerAction={handleNotifications}
                            />
                    </Grid>
                    <Grid item xl={3} md={6} xs={12}>
                        <ReportCard
                            primary="Búsqueda"
                            secondary={searchBox ? "Cuadro de búsqueda oculto" : "Cuadro de búsqueda visible"}
                            color={theme.palette.colorGreen}
                            footerData={searchBox ? "Mostrar cuadro de búsqueda" : "Ocultar cuadro de búsqueda"}
                            iconPrimary={searchBox ? BlockTwoToneIcon : SearchTwoToneIcon}
                            iconFooter={searchBox ? SearchTwoToneIcon : BlockTwoToneIcon}
                            footerAction={handleSearchBox}
                        />
                    </Grid>
                    <Grid item xl={3} md={6} xs={12}>
                        <ReportCard
                            primary="Idioma"
                            secondary="Seleccionar idioma"
                            color={theme.palette.colorBlue}
                            footerData={currentLanguageLabel}
                            iconPrimary={GTranslateTwoToneIcon}
                            iconFooter={PublicTwoToneIcon}
                        >
                            <Box width="80px" ml={matchDownSm ? '8px' : '24px'} mr={matchDownSm ? '8px' : '24px'}>
                                <TextField
                                    select
                                    value={currentLanguage}
                                    onChange={handleChangeLanguage}
                                    InputProps={{ disableUnderline: true }}
                                    SelectProps={{
                                        classes: {
                                            select: classes.selectColor,
                                            icon: classes.iconSelect,
                                        },
                                    }}
                                >
                                    {languages.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </ReportCard>
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h3" className={classes.title}>
                                    Color de resalte
                                </Typography>
                                <Grid item container spacing={3}>
                                    {availableColors.map((color, index) => (
                                        <div className={classes.colorOptionBorder} style={{border: isSelectedColor(color) ? `2px solid ${theme.palette.primary.main}` : ''}}>
                                            <Button 
                                                key={index}
                                                className={classes.colorButton}
                                                style={{borderLeft: `2rem solid ${color.primary}`, borderTop: `2rem solid ${color.primary}`, borderRight: `2rem solid ${color.menuHover}`, borderBottom: `2rem solid ${color.menuHover}`}}
                                                onClick={() => handleSwitchColor(color)}
                                            />
                                        </div>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Settings;
