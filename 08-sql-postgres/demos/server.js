'use strict'

const express = require('express')
const superagent = require('superagent')
const mongoose = require('mongoose')
const { Schema, model } = mongoose

//same thing as above
// const thisSchema = mongoose.Schema


require('dotenv').config()

const mongoURL = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds135537.mlab.com:35537/md301-server`

mongoose.connect(mongoURL)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
  console.log('DB connection open!')
})

const app = express()


const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/location', (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.address}&key=${process.env.GOOGLE_API_KEY}`
  Location.findOne({ address: req.query.address}, (err, addr) => {
    if(addr) {
      console.log('address found')
      res.send(addr)
    } else {
      superagent.get(url)
        .then(result => {
          const newLocation = new Location({
            address: req.query.address,
            lat: result.body.results[0].geometry.location.lat,
            lng: result.body.results[0].geometry.location.lng
          })
          newLocation.save()
          console.log('created new address')
          res.send(newLocation)
        })
    }
  })
    .catch(err => res.send('Got an error'))
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

const LocationSchema = new Schema({
  address: String,
  lat: Number,
  lng: Number
})

const Location = model('Location', LocationSchema)


