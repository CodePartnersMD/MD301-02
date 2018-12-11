'use strict'

const express = require('express')
const superagent = require('superagent')

const app = express()


const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/location', (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.address}&key=${process.env.GOOGLE_API_KEY}`
  superagent.get(url)
    .then(result => {
      res.send(new Location(result))
    })
    .catch(err => res.send('Got an error'))
})

app.get('/yelp', (req, res) => {
  const url= `https://api.yelp.com/v3/businesses/search?latitude=${req.query.lat}&longitude=${req.query.lng}`

  superagent.get(url).set('Authorization', `Bearer ${process.env.YELP_API_KEY}`)
    .then(result => {
      res.send(result.body)
    })
    .catch(err => res.send(err))
})

app.get('/', (req, res) => {
  res.send('<div>This is the Home Route</div>')
})

app.use('*', (req, res) => {
  res.send('<img src="https://http.cat/404" />')
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

const Location = function(loc) {
  this.lat = loc.body.results[0].geometry.location.lat
  this.lng = loc.body.results[0].geometry.location.lng
}

