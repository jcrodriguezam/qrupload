import * as actionTypes from './actions';
// import config from '../config';
import {SinapsisAuth} from './auth';

export const initialState = {
    user: {},
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GOOGLE_AUTH:
            return SinapsisAuth().then(res => {
                console.log('res', res)
                return {
                    ...state,
                    ...res,
                };
            }) 

        default:
            return state;
    }
};

export default authReducer;
