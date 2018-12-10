'use strict'

const express = require('express')
const superagent = require('superagent')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('pages/index')
})

app.get('/search', (req, res) => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=+intitle:educated'
  superagent.get(url)
    .then(books => {
      console.log(books)
    })
    .catch(err => res.send(err))
})

app.use('*', (req, res) => {
  res.send('Something broke')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
