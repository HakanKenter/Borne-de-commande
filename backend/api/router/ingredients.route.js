import express from 'express'
import Ingredients from '../models/ingredients.js'

const router = express.Router()

// On esr déjà dans /ingredients parce qu'on l'a spécifié
// Dans le use dans app.js

//Read Data
router.get('/', async (req, res) => {
    try {
        // await pour dire s'il a été générer
        const ingredients = await Ingredients.find()
        res.json(ingredients)
    }catch(err){
        res.json({message:err})
    }
})

router.get('/:ingredientId', async (req, res) => {
    try {
        const ingredient = await Ingredients.findById(req.params.ingredientId)
        res.json(ingredient)
    } catch(err) {
        res.json({message:err})
    }
})

// Create Data
// router.post('/', async (req, res) => {
//     try{
//         const post = new Post({

//         })
//     }
// })

export default router