import Rapper from '../models/rapper.js'

async function getAllRappers(_req, res, next) {
  try {
    const rappers = await Rapper.find()
    return res.status(200).json(rappers)
  } catch (err) {
    next(err)
  }
}

async function createRapper(req, res, next) {
  try {
    const newRapper = await Rapper.create(req.body)
    return res.status(201).json(newRapper)
  } catch (err) {
    next(err)
  }
}

async function getRapper(req, res, next) {
  const id = req.params.id
  try {
    //we want to find the movie with that id
    const rapper = await Rapper.findById(id)
    return res.status(200).json(rapper)
  } catch (err) {
    next(err)
  }
}

async function deleteRapper(req, res, next) {
  const id = req.params.id
  try {
    //we want to find the movie with that id
    //const movie = await Movie.findByIdAndDelete(id)
    const rapper = await Rapper.findById(id)
    rapper.deleteOne()
    return res.status(200).json(rapper)
  } catch (err) {
    next(err)
  }
}

async function updateRapper(req, res, next) {
  try {
    //we want to find the movie with that id
    const id = req.params.id
    //const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
    const rapper = await Rapper.findById(id)
    rapper.set(req.body)
    rapper.save()
    return res.status(200).json(rapper)
  } catch (err) {
    next(err)
  }
}

export default {
  getAllRappers,
  createRapper,
  getRapper,
  deleteRapper,
  updateRapper,
}
