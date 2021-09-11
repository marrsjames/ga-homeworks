import express from 'express'
import coloursController from '../controllers/coloursController.js'
import rappersController from '../controllers/rappersController.js'

const router = express.Router()

router
  .route('/colours')
  .get(coloursController.getAllColours)
  .post(coloursController.createColour)
router
  .route('/colours/:id')
  .get(coloursController.getColour)
  .delete(coloursController.deleteColour)
  .put(coloursController.updateColour)

router
  .route('/rappers')
  .get(rappersController.getAllRappers)
  .post(rappersController.createRapper)
router
  .route('/rappers/:id')
  .get(rappersController.getRapper)
  .delete(rappersController.deleteRapper)
  .put(rappersController.updateRapper)

export default router
