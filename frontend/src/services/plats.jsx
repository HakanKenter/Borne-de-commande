import http from '../http-common.jsx'

class PlatsDataService {

    getAll(){
        return http.get('/plats/')
    }

    get(id){
        return http.get(`/plats/${id}`)
    }

    createCategorie(data){
        return http.post('/plats/', data)
    }
}

export default new PlatsDataService