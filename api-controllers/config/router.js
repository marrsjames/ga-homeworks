import express from 'express'
import coloursCommentsController from '../controllers/coloursCommentsController.js'
import rappersCommentsController from '../controllers/rappersCommentsController.js'
import coloursController from '../controllers/coloursController.js'
import rappersController from '../controllers/rappersController.js'
import userController from '../controllers/userController.js'
import secureRoute from '../middleware/secureRoute.js'

const router = express.Router()

router
  .route('/colours')
  .get(coloursController.getAllColours)
  .post(secureRoute, coloursController.createColour)
router
  .route('/colours/:id')
  .get(coloursController.getColour)
  .delete(secureRoute, coloursController.deleteColour)
  .put(secureRoute, coloursController.updateColour)

router
  .route('/rappers')
  .get(rappersController.getAllRappers)
  .post(secureRoute, rappersController.createRapper)
router
  .route('/rappers/:id')
  .get(rappersController.getRapper)
  .delete(secureRoute, rappersController.deleteRapper)
  .put(secureRoute, rappersController.updateRapper)

router
  .route('/colours/:id/comments')
  .post(secureRoute, coloursCommentsController.createComment)

router
  .route('/colours/:id/comments/:commentId')
  .delete(secureRoute, coloursCommentsController.deleteComment)
  .put(secureRoute, coloursCommentsController.updateComment)

router
  .route('/rappers/:id/comments')
  .post(secureRoute, rappersCommentsController.createComment)

router
  .route('/rappers/:id/comments/:commentId')
  .delete(secureRoute, rappersCommentsController.deleteComment)
  .put(secureRoute, rappersCommentsController.updateComment)

router
  .route('/rappers/:id/colours')
  .get(rappersController.getAllColoursForRapper)
router
  .route('/colours/:id/rappers')
  .get(coloursController.getAllRappersForColour)

router.route('/register').post(userController.registerUser)

router.route('/login').post(userController.loginUser)

router.route('/users').get(userController.getAllUsers)


export default router
