import React, {useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import CategoriesDataService from './services/categories'
import "./App.css"
import logo from './assets/img/panier.png'
import Navbar from './components/Navbar'
import Categories from './pages/Categories'
import Home from './pages/Home'

const App = () => {

  const [datas, setDatas] = useState('');
  useEffect(() => {
    CategoriesDataService.getAll()
    .then(res => {
      setDatas(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  if(!datas){
    return null
  }

  return (
    <div className="app">

      <BrowserRouter>

        {/* <Link to="/id">test</Link> */}
        <Switch>
          <Route exact path='/'>
            
            <div className="blockCategories">

              
              <div className="sous-bloc-categories">
                <h1>Selectionner une catégorie :</h1><br />
                <Home datas={datas} />
              </div>
              
            </div>
          </Route>

          <Route exact path='/categories/:id'>
            <div className="blockCategories">

              <div className="sous-bloc-plats">
                <h1>Selectionner un plat :</h1>
                <Categories />
              </div>

            </div>
          </Route>

        </Switch>
      </BrowserRouter>

      <Navbar logo={logo} />
    </div>
    
  )
}

export default App
