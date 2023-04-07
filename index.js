const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const services = require('./data/services.json')
const team = require('./data/team.json')
const gallery = require('./data/gallery.json')
const clientsreview = require('./data/clientsreview.json')
const places = require('./data/places.json')
const popularplaces = require('./data/popularplaces.json')

app.get('/', (req, res) => {
  res.send('Trippy API running')
})

app.get('/places', (req, res) => {
  res.send(places)
})

app.get('/popularplaces', (req, res) => {
  res.send(popularplaces)
})

app.get('/services', (req, res) => {
  res.send(services)
})

app.get('/team', (req, res) => {
  res.send(team)
})

app.get('/gallery', (req, res) => {
  res.send(gallery)
})

app.get('/review', (req, res) => {
  res.send(clientsreview)
})

app.listen(port, () => {
  console.log('Trippy server running on port', port);
})