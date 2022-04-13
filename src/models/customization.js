import config from '../config';

export default {
  state: {
    isOpen: 'dashboard', //for active default menu
    locale: config.i18n,
    rtlLayout: config.rtlLayout,
    navType: 'light',
    hideSearch: false,
    hideNotifications: false,
    primary: '#fff', //'#3cb778',
    menuHover: '#e9fff4',
  },
  reducers: {
    MENU_OPEN(state, payload) {
      return {
        ...state,
        isOpen: payload.isOpen,
      };
    },
    THEME_LOCALE(state, payload) {
      return {
        ...state,
        locale: payload.locale,
      };
    },
    THEME_RTL(state, payload) {
      return {
        ...state,
        rtlLayout: payload.rtlLayout,
      };
    },
    THEME_SWITCH_SCHEME(state) {
      return {
        ...state,
        navType: state.navType === 'light' ? 'dark' : 'light',      };
    },
    THEME_SWITCH_COLOR(state, payload) {
      return {
        ...state,
        primary: payload.primary,
        menuHover: payload.menuHover
      };
    },
    HIDE_SEARCH(state) {
      return {
        ...state,
        hideSearch: !state.hideSearch,
      };
    },
    HIDE_NOTIFICATIONS(state) {
      return {
        ...state,
        hideNotifications: !state.hideNotifications,
      };
    }
  },
  effects: (dispatch) => ({
    async login(payload) {
      try {
        alert('Entro ==============>')
      } catch (err) {
        dispatch.auth.ERROR(err);
        return null;
      }
    }
  })
};
