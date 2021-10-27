import mongoose from 'mongoose'

const PlatsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    urlimg: {
        type: String,
        required: true
    },
    catId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    quantite: {
        type: Number,
        required: true
    }
})

export default mongoose.model('plats', PlatsSchema)