import firebase from "firebase";
// import config from '../config';
import history from '../history';
import { saveToLocalStorage, loadFromLocalStorage,  removeFromLocalStorage  } from '../utils';

// const {firebase: firebaseConfig } = config;
// const { authDomain: DOMAIN } = firebaseConfig;



const DOMAIN = 'http://localhost:4000';

console.log('DOMAIN', DOMAIN)

var provider = new firebase.auth.GoogleAuthProvider();
const USER_STORAGE_KEY = 'user';
const userData = loadFromLocalStorage(USER_STORAGE_KEY);
let initialState = {}
if (userData) {
  const {expires_at, token, value} = userData;
  const { user } = value;
  initialState = {
    user,
    expires_at,
    isAuthenticated: true,
    isError: false,
    errorMessage: '',
    token,
  }
}

const firebaseErrors = (error) => {
  return {
    errorCode: error.code,
    errorMessage: error.message,
    email: error.email,
    credential: error.credential
  }
}

export default {
  state: {...initialState},
  reducers: {
    SUCCESS(state, payload) {  
      const { token, user, expires_at} = payload;
      const newState = {
        ...state,
        user,
        expires_at,
        isAuthenticated: true,
        isError: false,
        errorMessage: '',
        token,
      };

      saveToLocalStorage(USER_STORAGE_KEY, newState, expires_at);
      return newState;
    },
    ERROR(state, payload) {
      const { errorCode, errorMessage } = payload;
      console.log('error');
      console.log(errorCode);
      console.log(errorMessage);
      return {
        ...state,
        userLogged: null,
        expires: null,
        isAuthenticated: false,
        isError: true,
        errorMessage,
        errorCode,
      };
    },
    LOGOUT() {
      removeFromLocalStorage(USER_STORAGE_KEY);
      return {
        expires_at: null,
        userLogged: null,
        isAuthenticated: false,
        isError: false,
        errorMessage: '',
      };
    },
    SET_PROP(state, payload) {
      return {
        ...state,
        [payload.key]: payload.value
      };
    },
    SET_STATE(payload) {
      return {
        ...payload,
      };
    }
  },
  effects: (dispatch) => ({
    async isAuthenticated() {
      const userData = loadFromLocalStorage(USER_STORAGE_KEY)
      if (userData) {
        const { emailVerified } = userData;
        if (emailVerified) {
          const {expires_at, token, user} = userData.value;
          dispatch.auth.SUCCESS({token, user, expires_at});
        }
      }

      return false
    },
    async logOut(state) {
      await firebase.auth().signOut();
      history.push('/login');
      dispatch.auth.LOGOUT();
    },
    async googleAuth(state, payload) {
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      // firebase.auth().languageCode = 'es';
      // provider.setCustomParameters({
      //     'login_hint': 'user@example.com'
      //   });
  
      try {
        const auth = await firebase.auth().signInWithPopup(provider);
        var credential = auth.credential;
        var token = credential.accessToken;
        const {
          displayName,
          createdAt,
          email,
          lastLoginAt,
          phoneNumber,
          photoURL,
          uid,
          emailVerified,
        } = auth.user;

        const expires_at = new Date();
        expires_at.setDate(expires_at.getDate()+1);
        dispatch.auth.SUCCESS({
          token,
          user: {
            displayName,
            createdAt,
            email,
            lastLoginAt,
            phoneNumber,
            photoURL,
            uid,
            emailVerified,
          },
          expires_at,
        });
      } catch(error) {
        return firebaseErrors(error);
      };
    },
    async validateSignInLink(payload) {
      try {
        console.log('validateSignInLink')

        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
          var email = window.localStorage.getItem(`${DOMAIN}_emailForSignIn`);
          console.log('validateSignInLink', email)
          if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
          }
          const res = await firebase.auth().signInWithEmailLink(email, window.location.href);
          console.log('validateSignInLink res', res)

          window.localStorage.removeItem(`${DOMAIN}_emailForSignIn`);
          console.log('todo ok');
          return res;
        }
        
      } catch(error) {
        return firebaseErrors(error);
      };
    },
    async emailSignUp(payload) {
      try {
        const {
          email,
          password,
          name,
          surname,
          phoneNumber,
          photoURL
        } = payload;

        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const updatedUser = await dispatch.users.updateProfile({
          name,
          surname,
          phoneNumber,
          photoURL,
        })
        
        await dispatch.users.sendEmailVerification()
        return updatedUser;      
      } catch(error) {
        return firebaseErrors(error);
      };
    },
    async emailSignIn(payload) {
      try {
        const { email, password } = payload;
        const auth = await firebase.auth().signInWithEmailAndPassword(email, password)
        const {
          displayName,
          createdAt,
          lastLoginAt,
          phoneNumber,
          photoURL,
          uid,
          emailVerified,
         } = auth.user;

        if (emailVerified) {
          const expires_at = new Date();
          expires_at.setDate(expires_at.getDate() + 1);
          dispatch.auth.SUCCESS({
            user: {
              displayName,
              createdAt,
              email,
              lastLoginAt,
              phoneNumber,
              photoURL,
              uid,
              emailVerified,
            },
            expires_at,
          });
        } else {
          dispatch.auth.ERROR({
            errorCode: 'NOT_VERIFIED',
            errorMessage: 'Email not verified'
          });
        }
      } catch(error) {
        return firebaseErrors(error);
      };
    }
  })
};
