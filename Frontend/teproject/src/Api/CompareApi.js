import axios from "axios"

export const getCompareApi = (country_1, country_2, indicator) => {

    let data = axios.get(process.env.REACT_APP_BACKEND_API + `/compare?country1=${country_1}&&country2=${country_2}&&indicator=${indicator}`).then(data => data.data)
    .catch(err => err.message)

    return data

}


