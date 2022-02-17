import { AUTH_LOGIN, AUTH_LOGOUT, SET_BOOKS, SET_DETAIL } from '../../actionsType';

export function loginUser(values) {
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
    return {
        type: SET_BOOKS,
        payload: values
    }
}

export function setDetail(values) {
    return {
        type: SET_DETAIL,
        payload: values
    }
}