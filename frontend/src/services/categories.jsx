import http from '../http-common.jsx'

class CategoriesDataService {

    getAll(){
        return http.get('/categories/')
    }

    get(id){
        return http.get(`categories/${id}`)
    }

    createCategorie(data){
        return http.post('/categories/', data)
    }
}

export default new CategoriesDataService