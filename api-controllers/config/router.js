import express from 'express'
import { getAllRappers } from '../controllers/rappersController.js'
import { getAllColours } from '../controllers/coloursController.js'

const router = express.Router()

router.route('/rappers').get(getAllRappers)
router.route('/colours').get(getAllColours)

export default router
