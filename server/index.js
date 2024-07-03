import express from 'express'
import cors from 'cors'
const app = express()

const port = 8000
import { getDriver } from './database.js'

app.use(express.json())
app.use(cors({
  origin: 'https://hosting-test-client.onrender.com',
  headers: {
    "Access-Control-Allow-Origin": "*",
},
}))

app.get('/driver/:number', async (req, res) => {
  const driver = await getDriver(req.params.number)
  res.json(driver)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})