import { combineReducers } from 'redux';
import customizationReducer from './customizationReducer';
import authReducer from './authReducer';

const reducer = combineReducers({
    customization: customizationReducer,
    auth: authReducer,
});

export default reducer;
