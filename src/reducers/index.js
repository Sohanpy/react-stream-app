import { combineReducers } from 'redux';

import { reducer as FormReducers } from 'redux-form';

import authReducers from './authReducers';

export default combineReducers({
    auth : authReducers,
    form : FormReducers
})