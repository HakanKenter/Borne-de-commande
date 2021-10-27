import mongoose from 'mongoose'

const NameSchema = mongoose.Schema({
    1: String,
    2: String,
    3: String
})

const IngredientsSchema = mongoose.Schema({
    name: NameSchema
})

export default mongoose.model('ingredients', IngredientsSchema)

