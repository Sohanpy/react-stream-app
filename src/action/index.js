import streams from '../api/strems'
import strems from '../api/strems';
import history from '../history';
import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from './types';

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

//ei action gula api theke data fetch kortese
export const createStreame = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: response.data })
    history.push('/')//programmatic navigation --->248-250 
}

export const fetchStrems = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const singleStreams = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id })

    history.push('/')
}

export const editStreams = (id, formValues) => async dispatch => {
    const response = await strems.patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/')
}

//starts from 238