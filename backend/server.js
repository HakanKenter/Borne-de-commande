import express from 'express'
import cors from 'cors'
import categories from './api/router/categories.route.js'
import ingredients from './api/router/ingredients.route.js'
import plats from './api/router/plats.route.js'

const app = express()

// Cors pour assouplir la sécurité appliquée à une api
// permet de contourner les entêtes "Access-Control-Allow-Origin"
// Pour autoriser aussi les connexion externe
app.use(cors())
app.use(express.json())

// Ca va servir a enregistrer des liens de fichier img dans la bdd 
// et dans le dossier asset 
// dans le liens par exemple ça donnerai http://localhost/img/categories/1.jpg
// /!\ pas de "assets" dans le chemin !
app.use(express.static('assets'))

app.use('/api/v1/categories', categories)
app.use('/api/v1/ingredients', ingredients)
app.use('/api/v1/plats', plats)
// Afficher une erreur 404 si la page n'existe pas
// l'étoile veut dire toute les autre URL
app.use('*', (req, res) => res.status(404).json({error:"404 not found"}))

export default app