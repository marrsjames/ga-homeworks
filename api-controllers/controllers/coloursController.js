import Colour from '../models/colour.js'

export const getAllColours = async (req, res, next) => {
  try {
    const colours = await Colour.find()
    return res.status(200).json(colours)
  } catch (err) {
    next(err)
  }
}
