import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    rating: { type: Number, required: true, min: 1, max: 10 },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

const rapperSchema = new mongoose.Schema({
  name: String,
  AKA: String,
  yearOfBirth: Number,
  comments: [commentSchema],
  colours: [{ type: mongoose.Types.ObjectId, ref: 'Colour' }],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
})

rapperSchema.plugin(mongooseUniqueValidator)

const Rapper = mongoose.model('Rapper', rapperSchema)

export default Rapper
