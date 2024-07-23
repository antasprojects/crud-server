const express = require('express')
cors = require('cors')
const app = express()
const {index, show} = require("./controllers/fruits.js")
const Fruit = require('./models/Fruit.js')
const fruitRouter = require("./routes/fruitRouter")




app.get('/', (req, res) => {
  res.send('Hello World!')
})


// CORS
app.use(cors())
app.use(express.json())
app.use("/fruits", fruitRouter)


module.exports = app