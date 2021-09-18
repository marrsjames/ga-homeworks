import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import { secret } from '../config/environment.js'

async function secureRoute(req, res, next) {
  try {
    const authToken = req.headers.authorization

    if (!authToken || !authToken.startsWith('Bearer')) {
      return res
        .status(401)
        .send({ message: 'You are not authorized to perform this action' })
    }
    const token = authToken.replace('Bearer ', '')

    jwt.verify(token, secret, async (err, data) => {
      if (err) {
        return res.status(401).send({ message: 'Unauthorized' })
      }
      const user = await User.findById(data.userId)

      if (!user) {
        return res.status(404).send({ message: 'user not found' })
      }
      req.currentUser = user
      next()
    })
  } catch (err) {
    return res.status(401).send({ message: 'unauthorized' })
  }
}

export default secureRoute
