const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router()

// add controllers
const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')

routes.get('/', (req, res) => {
   return res.send('Olá, Isaías')
})

routes.get('/boxes/:id', BoxController.show)

routes.post('/boxes', BoxController.store)

routes.post('/boxes/:id/files', 
   multer(multerConfig).single('file'), 
   FileController.store
)

routes.get('/bianca/:val', (req, res) => {
   const valor = req.params.val
   return res.json(`Obrigado, você fez uma doação de ${valor} reais!`)
})

module.exports = routes