const express = require('express')
const app = express()
app.get(
  '/',
  (req, res) => {
    res.send('Hola Pepito')
  }
)
app.listen(3000)
