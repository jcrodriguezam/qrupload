import * as actionTypes from './actions';
import config from '../config';

export const initialState = {
    isOpen: 'dashboard', //for active default menu
    locale: config.i18n,
    rtlLayout: config.rtlLayout,
    navType: 'dark',
    hideSearch: false,
    hideNotifications: false,
    primary: '#3cb778',
    menuHover: '#e9fff4',
};

const customizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            return {
                ...state,
                isOpen: action.isOpen,
            };
        case actionTypes.THEME_LOCALE:
            return {
                ...state,
                locale: action.locale,
            };
        case actionTypes.THEME_RTL:
            return {
                ...state,
                rtlLayout: action.rtlLayout,
            };
        case actionTypes.THEME_SWITCH_SCHEME:
            return {
                ...state,
                navType: state.navType === 'light' ? 'dark' : 'light',
            };
        case actionTypes.THEME_SWITCH_COLOR:
            return {
                ...state,
                primary: action.primary,
                menuHover: action.menuHover,
            };
        case actionTypes.HIDE_SEARCH:
            return {
                ...state,
                hideSearch: !state.hideSearch,
            };
        case actionTypes.HIDE_NOTIFICATIONS:
            return {
                ...state,
                hideNotifications: !state.hideNotifications,
            };
        default:
            return state;
    }
};

export default customizationReducer;
