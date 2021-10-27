import mongoose from 'mongoose'

// Schema pour la base de donnée

const CategoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    urlimg: {type: String},
    position: {type: Number}
})

export default mongoose.model('categories', CategoriesSchema)