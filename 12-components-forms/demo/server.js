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
  let url = 'https://www.googleapis.com/books/v1/volumes?q=+'
  req.query.param === 'title' ? url += `intitle:${req.query.bookSearch}` : url += `inauthor:${req.query.bookSearch}`
  superagent.get(url)
    .then(books => {
      let booksArr = []
      for(let i = 0; i < 10; i++) {
        booksArr.push(new Book(books.body.items[i]))
      }
      res.render('pages/searchResults', {developer: 'Zach', bookList: booksArr})
    })
    .catch(err => res.send('something broke'))
})

app.use('*', (req, res) => {
  res.send('Something broke')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

const Book = function(book) {
  this.title = book.volumeInfo.title
  this.author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'none'
}
