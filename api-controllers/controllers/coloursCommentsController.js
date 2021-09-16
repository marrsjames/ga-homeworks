import Colour from '../models/colour.js'

async function createComment(req, res, next) {
  try {
    const { id } = req.params
    const colour = await Colour.findById(id)

    if (!colour) {
      return res.status(404).send({ message: 'Colour does not exist' })
    }

    const newComment = req.body
    colour.comments.push(newComment)
    const savedColour = await colour.save()

    return res.status(201).json(savedColour)
  } catch (err) {
    next(err)
  }
}

async function deleteComment(req, res, next) {
  try {
    const { id, commentId } = req.params
    const colour = await Colour.findById(id)

    if (!colour) {
      return res.status(404).send({ message: 'Colour ' })
    }

    const comment = colour.comments.id(commentId)
    if (!comment) {
      return res.status(404).send({ message: 'comment does not exist' })
    }

    comment.remove()
    const savedColour = await colour.save()
    return res.status(200).send(savedColour)
  } catch (err) {
    next(err)
  }
}

async function updateComment(req, res, next) {
  try {
    const { id, commentId } = req.params
    const colour = await Colour.findById(id)

    if (!colour) {
      return res.status(404).send({ message: 'Colour does not exist' })
    }

    const comment = colour.comments.id(commentId)
    if (!comment) {
      return res.status(404).send({ message: 'comment does not exist' })
    }

    comment.set(req.body)
    const savedColour = await colour.save()
    return res.status(200).send(savedColour)
  } catch (err) {
    next(err)
  }
}

export default { createComment, deleteComment, updateComment }
