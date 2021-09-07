import express from 'express'
import router from './config/router.js'
const app = express()
const port = 3000
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/today', function (req, res) {
  res.send(new Date().toDateString())
})

const users = []

app.get('/user', function (req, res) {
  res.json(users)
})

app.post('/user', function (req, res) {
  const user = req.body
  users.push(user)
  res.send('received, thanks!')
})

app.listen(port, () => {
  console.log(`Rapper API listening at http://localhost:${port}`)
})
