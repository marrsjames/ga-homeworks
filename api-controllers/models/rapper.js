import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const rapperSchema = new mongoose.Schema({
  name: String,
  AKA: String,
  yearOfBirth: Number,
  comments: [],
})

rapperSchema.plugin(mongooseUniqueValidator)

const Rapper = mongoose.model('Rapper', rapperSchema)

export default Rapper
