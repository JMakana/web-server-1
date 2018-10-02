const express = require('express')
const app = express()
const path = require ('path')
const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware')

const hbs = require('hbs')
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
app.set('view engine', 'hbs') // clave valor

app.use(consoleLogMiddleware)
app.use(fileLogMiddleware)

const staticRoute =path.join(__dirname, 'public')
app.use(express.static(staticRoute))

app.get('/', (req, res) => {
  res.send('Hola Juanito')
})

app.get('/contactar', (req, res) => {
  res.render('contactar.hbs', {
    pageTitle: 'Contactar',
    currentYear: new Date().getFullYear()
  })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
