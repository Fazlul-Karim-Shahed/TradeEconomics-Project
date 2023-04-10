import axios from "axios"

export const CreateHistoryApi = obj => {

    let data = axios.post(process.env.REACT_APP_BACKEND_API + `/history/create`, obj).then(data => data.data)
        .catch(err => err.message)

    return data

}

export const GetHistoryApi = userId => {

    let data = axios.get(process.env.REACT_APP_BACKEND_API + '/history/' + userId).then(data => data.data)
        .catch(err => err.message)

    return data

}

