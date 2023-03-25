
import {  } from './ActionTypes'

const initialState = {
    text: 'Hello world',
    purpose: 'test',
    role: 'user'
}


const reducer = (state=initialState, action) => {

    if(action.type === ''){
        return
    }

    return state

}

export default reducer