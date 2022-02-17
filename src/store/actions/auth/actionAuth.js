import { AUTH_LOGIN, AUTH_LOGOUT, SET_BOOKS, SET_DETAIL } from '../../actionsType';

export function loginUser(values) {
    console.log('loginUser', values)
    return {
        type: AUTH_LOGIN,
        payload: values
    }
}

export function logout(values) {
    return {
        type: AUTH_LOGOUT,
        payload: values
    }
}

export function setDadosLibrary(values) {
    console.log('setDadosLibrary', values)
    return {
        type: SET_BOOKS,
        payload: values
    }
}

export function setDetail(values) {
    console.log('action setDetail', values);
    return {
        type: SET_DETAIL,
        payload: values
    }
}