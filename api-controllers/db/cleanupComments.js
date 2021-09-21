import Rapper from '../models/rapper.js'
import User from '../models/user.js'
import { connectDb, disconnectDb } from './helpers.js'

async function cleanupComments() {
  try {
    await connectDb()
    console.log('🤖 Database Connected')

    const rappers = await Rapper.find()
    // Get all rappers
    const user = await User.findOne({
      email: 'user@community.wiki',
    })

    // Get all comments of each rapper
    for (let rapper of rappers) {
      rapper.comments.forEach((comment) => {
        // Set the createdBy to the "community" user
        comment.set({
          createdBy: user._id,
        })
      })
      if (rapper.createdBy) {
        const createdByUser = await User.findById(rapper.createdBy)
        if (createdByUser) {
          console.log('rapper', rapper, 'created by', createdByUser)
          // in this case, there is already a valid user
          continue
        }
      }
      rapper.set({ createdBy: user._id })
      await rapper.save()
      console.log(newRapper)
    }
  } catch (err) {
    console.log('🤖 Something went wrong')
    console.log(err)
  }
  disconnectDb()
}

cleanupComments()
