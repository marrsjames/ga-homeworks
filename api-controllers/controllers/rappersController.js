import Rapper from '../models/rapper.js'

//how we get all the movies (from database or otherwise)
// is the responsibility of the controller
export const getAllRappers = async (req, res, next) => {
  try {
    const rappers = await Rapper.find()
    return res.status(200).json(rappers)
  } catch (err) {
    next(err)
  }
}
