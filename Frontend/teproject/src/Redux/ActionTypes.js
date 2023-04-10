import { checkAuth, tokenDecode } from "../Functions/AuthFunctions";

export const AUTHENTICATED = {
    type: 'AUTHENTICATED',
    value: {
        authenticated: checkAuth(),
        decodedToken: tokenDecode()
    }
}

export const SET_AUTH = decodedToken => {
    return {
        type: 'SET_AUTH',
        value: {
            authenticated: true,
            decodedToken: tokenDecode()
        }
    }
}


export const HISTORY_UPDATE = hisArray => {

    return {
        type: 'HISTORY_UPDATE',
        value: hisArray
    }
}

