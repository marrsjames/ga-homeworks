import Colour from '../models/colour.js'
import Rapper from '../models/rapper.js'
import { removedAdded } from '../controllers/helpers.js'

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

    await Rapper.updateMany(
      { _id: newColour.rappers },
      { $push: { colours: newColour._id } }
    )

    return res.status(201).json(newColour)
  } catch (err) {
    next(err)
  }
}

async function getAllRappersForColour(req, res, next) {
  try {
    const { id } = req.params
    const colour = await Colour.findById(id).populate('rappers')
    return res.status(200).json(colour.rappers)
  } catch (err) {
    next(err)
  }
}

async function getColour(req, res, next) {
  const id = req.params.id
  try {
    const colour = await Colour.findById(id)
    if (!colour) {
      return res.status(404).send({ message: 'Colour does not exist' })
    }
    return res.status(200).json(colour)
  } catch (err) {
    next(err)
  }
}

async function deleteColour(req, res, next) {
  const id = req.params.id
  try {
    const colour = await Colour.findByIdAndDelete(id)

    if (!colour) {
      return res.status(404).send({ message: 'Colour does not exist' })
    }

    const rappersToRemove = colour.rappers.map((rapper) => rapper.toString())

    await Rapper.updateMany(
      { _id: rappersToRemove },
      { $pull: { colours: colour._id } }
    )
    return res.status(200).json(colour)
  } catch (err) {
    next(err)
  }
}

async function updateColour(req, res, next) {
  const id = req.params.id

  try {
    const colour = await Colour.findById(id)
    if (!colour) {
      return res.status(404).send({ message: 'Colour does not exist' })
    }
    const [removedRappers, addedRappers] = removedAdded(
      colour.rappers.map((rapper) => rapper.toString()),
      req.body.rappers
    )

    colour.set(req.body)
    const savedColour = await colour.save()

    await Rapper.updateMany(
      { _id: removedRappers },
      { $pull: { colours: colour._id } }
    )

    await Rapper.updateMany(
      { _id: addedRappers },
      { $push: { colours: savedColour._id } }
    )

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
  getAllRappersForColour,
}
