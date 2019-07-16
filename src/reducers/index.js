import { combineReducers } from 'redux';

import { reducer as FormReducers } from 'redux-form';

import authReducers from './authReducers';
import streamReducers from './StremReducers';

export default combineReducers({
    auth : authReducers,
    form : FormReducers,
    stream:streamReducers
})