import Colour from '../models/colour.js'

async function getAllColours(_req, res, next) {
  try {
    const colours = await Colour.find()
    return res.status(200).json(colours)
  } catch (err) {
    next(err)
  }
}

async function createColour(req, res, next) {
  try {
    const newColour = await Colour.create(req.body)
    return res.status(201).json(newColour)
  } catch (err) {
    next(err)
  }
}

async function getColour(req, res, next) {
  const id = req.params.id
  try {
    //we want to find the movie with that id
    const colour = await Colour.findById(id)
    return res.status(200).json(colour)
  } catch (err) {
    next(err)
  }
}

async function deleteColour(req, res, next) {
  const id = req.params.id
  try {
    //we want to find the movie with that id
    //const movie = await Movie.findByIdAndDelete(id)
    const colour = await Colour.findById(id)
    colour.deleteOne()
    return res.status(200).json(colour)
  } catch (err) {
    next(err)
  }
}

async function updateColour(req, res, next) {
  try {
    //we want to find the movie with that id
    const id = req.params.id
    //const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
    const colour = await Colour.findById(id)
    colour.set(req.body)
    colour.save()
    return res.status(200).json(colour)
  } catch (err) {
    next(err)
  }
}

export default {
  getAllColours,
  createColour,
  getColour,
  deleteColour,
  updateColour,
}
