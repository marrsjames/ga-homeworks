import Rapper from '../models/rapper.js'
import Colour from '../models/colour.js'
import { coloursSeedData } from './coloursSeedData.js'
import { rappersSeedData } from './rappersSeedData.js'
import { connectDb, truncateDb, disconnectDb } from './helpers.js'

async function seed() {
  try {
    await connectDb()
    console.log('connected to database')

    await truncateDb()
    console.log(' database dropped')

    const rappers = await Rapper.create(rappersSeedData)
    console.log(`${rappers.length} rappers added to the database`)

    const colours = await Colour.create(coloursSeedData)
    console.log(`${colours.length} colours added to the database`)
    console.log('goodbye!')
  } catch (err) {
    console.log('something went wrong with the database', err)
  }

  disconnectDb()
}

seed()
