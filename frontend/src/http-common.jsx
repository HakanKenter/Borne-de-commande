import axios from 'axios'

// Axios poyr faire des requete dans l'api
export default axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers: {
        "Content-type" : "application/json"
    }
})

