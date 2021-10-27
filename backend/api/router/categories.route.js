import express from 'express'
import Categories from '../models/categories.js'

const router = express.Router()

// On esr déjà dans /categories parce qu'on l'a spécifié
// Dans le use dans app.js

//Read Data
router.get('/', async (req, res) => {
    try {
        // await pour dire s'il a été générer
        const categories = await Categories.find()
        res.json(categories)
        console.log("yessssss")
    }catch(err){
        res.json({message:err})
    }
})

// Create Data
router.post('/', async (req, res) => {

    const categorie = new Categories({
        name: req.body.name,
        urlimg: req.body.urlimg,
        position: req.body.position
    })

    try{
        const savedData = await categorie.save()
        res.status(200).json(savedData)
    } catch(err) {
        res.status(500).json({message:err})
    }
})


export default router