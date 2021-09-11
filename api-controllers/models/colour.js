import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const colourSchema = new mongoose.Schema({
  name: String,
  hexCode: String,
  primary: Boolean,
  comments: [],
})

colourSchema.plugin(mongooseUniqueValidator)

const Colour = mongoose.model('Colour', colourSchema)

export default Colour
