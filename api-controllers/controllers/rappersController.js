import Rapper from '../models/rapper.js'
import Colour from '../models/colour.js'
import { removedAdded } from './helpers.js'

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

    await Colour.updateMany(
      { _id: newRapper.colours },
      { $push: { rappers: newRapper._id } }
    )
    return res.status(201).json(newRapper)
  } catch (err) {
    next(err)
  }
}

async function getRapper(req, res, next) {
  const id = req.params.id
  try {
    const rapper = await Rapper.findById(id)

    if (!rapper) {
      return res.status(404).send({ message: 'Rapper does not exist' })
    }
    return res.status(200).json(rapper)
  } catch (err) {
    next(err)
  }
}

async function deleteRapper(req, res, next) {
  const id = req.params.id
  try {
    const rapper = await Rapper.findByIdAndDelete(id)
    if (!rapper) {
      return res.status(404).send({ message: 'Rapper does not exist' })
    }
    const coloursToRemove = rapper.colours.map((colour) => colour.toString())
    await Colour.updateMany(
      { _id: coloursToRemove },
      { $pull: { rappers: rapper._id } }
    )

    return res.status(200).json(rapper)
  } catch (err) {
    next(err)
  }
}

async function updateRapper(req, res, next) {
  const id = req.params.id

  try {
    const rapper = await Rapper.findById(id)
    if (!rapper) {
      return res.status(404).send({ message: 'Rapper does not exist' })
    }
    const [removedColours, addedColours] = removedAdded(
      rapper.colours.map((colour) => colour.toString()),
      req.body.colours
    )

    rapper.set(req.body)
    const savedRapper = await rapper.save()

    await Colour.updateMany(
      { _id: removedColours },
      { $pull: { rappers: savedRapper._id } }
    )

    await Colour.updateMany(
      { _id: addedColours },
      { $push: { rappers: savedRapper._id } }
    )

    return res.status(200).json(rapper)
  } catch (err) {
    next(err)
  }
}

async function getAllColoursForRapper(req, res, next) {
  try {
    const { id } = req.params
    const rapper = await Rapper.findById(id).populate('rappers')
    return res.status(200).json(rapper.colours)
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
  getAllColoursForRapper,
}
