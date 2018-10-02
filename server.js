const express = require('express')
const app = express()
const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware')

app.use(consoleLogMiddleware)

app.use(fileLogMiddleware)

app.get('/', (req, res) => {
  res.send('Hola Juanito')
})

app.get('/contactar', (req, res) => {
  res.send({ nombre: 'pepe', correo: 'pepe@pepe.com' })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
