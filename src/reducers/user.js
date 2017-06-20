// @Flow

import A from '../constants/action-types';

const initialUser = {
    firstName: '',
    lastName: '',
    authToken: '',
    isLoggedIn: false,
    isError: false,
    isFetching: false
};

const user = (state=initialUser, action={}) => {
    switch (action.type) {
    case A.LOGIN_USER_REQUEST:
        return {
            ...state,
            isError: false,
            isFetching: true
        };
    case A.LOGIN_USER_SUCCESS:
        return {
            ...success,
            firstName: action.firstName,
            lastName: action.lastName,
            authToken: action.authToken,
            isLoggedIn: true,
            isFetching: false
        };
    case A.LOGIN_USER_ERROR:
        return {
            ...success,
            isError: true,
            isFetching: false
        };
    default:
        return state;
    }
};

export default user;

