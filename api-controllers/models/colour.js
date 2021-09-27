import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timeStamps: true }
)

const colourSchema = new mongoose.Schema({
  name: String,
  hexCode: String,
  primary: Boolean,
  comments: [commentSchema],
  rappers: [{ type: mongoose.Types.ObjectId, ref: 'Rapper' }],
},
  { timestamps: true })

colourSchema.plugin(mongooseUniqueValidator)

const Colour = mongoose.model('Colour', colourSchema)

export default Colour
