import express from 'express'
import Plats from '../models/plats.js'

const router = express.Router()

// On esr déjà dans /plats parce qu'on l'a spécifié
// Dans le use dans app.js

//Read Data
router.get('/', async (req, res) => {
    try {
        // await pour dire s'il a été générer
        const plats = await Plats.find()
        res.json(plats)
    }catch(err){
        res.json({message:err})
    }
})

router.get('/:platId', async (req, res) => {
    try {
        const plat = await Plats.findById(req.params.platId)
        res.json(plat)
    } catch(err) {
        res.json({message:err})
    }
})

// Create Data
router.post('/', async (req, res) => {
    console.log(req.body.description)

    const plat = new Plats({
        name: req.body.name,
        prix: req.body.prix,
        urlimg: req.body.urlimg,
        catId: req.body.catid,
        description: req.body.description,
        ingredients: req.body.ingredients,
        quantite: req.body.quantite
    })

    try{
        const savedPlat = await plat.save()
        res.json(savedPlat)
    } catch(err) {
        res.json({message:err})
    }
    // Attendre le retour de save et executer
    // post.save()
    // .then(data => {
    //     res.send(data)
    // })
    // .catch(err => {
    //     res.json({message:err})
    // })

    // res.send(req.body)
})

export default router