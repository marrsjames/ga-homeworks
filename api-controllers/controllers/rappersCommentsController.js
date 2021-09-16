import Rapper from '../models/rapper.js'

async function createComment(req, res, next) {
  try {
    const { id } = req.params
    const rapper = await Rapper.findById(id)

    if (!rapper) {
      return res.status(404).send({ message: 'Rapper does not exist' })
    }

    const newComment = req.body
    rapper.comments.push(newComment)
    const savedRapper = await rapper.save()

    return res.status(201).json(savedRapper)
  } catch (err) {
    next(err)
  }
}

async function deleteComment(req, res, next) {
  try {
    const { id, commentId } = req.params
    const rapper = await Rapper.findById(id)

    if (!rapper) {
      return res.status(404).send({ message: 'Rapper ' })
    }

    const comment = rapper.comments.id(commentId)
    if (!comment) {
      return res.status(404).send({ message: 'comment does not exist' })
    }

    comment.remove()
    const savedRapper = await rapper.save()
    return res.status(200).send(savedRapper)
  } catch (err) {
    next(err)
  }
}

async function updateComment(req, res, next) {
  try {
    const { id, commentId } = req.params
    const rapper = await Rapper.findById(id)

    if (!rapper) {
      return res.status(404).send({ message: 'Rapper does not exist' })
    }

    const comment = rapper.comments.id(commentId)
    if (!comment) {
      return res.status(404).send({ message: 'comment does not exist' })
    }

    comment.set(req.body)
    const savedRapper = await rapper.save()
    return res.status(200).send(savedRapper)
  } catch (err) {
    next(err)
  }
}

export default { createComment, deleteComment, updateComment }
