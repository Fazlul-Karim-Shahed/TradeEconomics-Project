
import { AUTHENTICATED, LOGOUT } from './ActionTypes'

const initialState = {
    text: 'Hello world',
    purpose: 'test',
    role: 'user',
    decodedToken: {},
    authenticated: false,
    historyArray: []
}


const reducer = (state = initialState, action) => {
    if (action.type === AUTHENTICATED.type) {

        return {
            ...state,
            authenticated: action.value.authenticated,
            decodedToken: action.value.decodedToken
        }
    }

    if (action.type === 'SET_AUTH') {

        return {
            ...state,
            authenticated: action.value.authenticated,
            decodedToken: action.value.decodedToken
        }
    }

    if (action.type === 'HISTORY_UPDATE') {

        return {
            ...state,
            historyArray: action.value
        }
    }

    return state

}

export default reducer