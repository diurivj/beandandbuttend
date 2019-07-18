const router = require('express').Router()
const Character = require('../models/Character')
const Episode = require('../models/Episode')

router.get('/', (req, res, next) => {
  const instructions = {
    characters: 'http://localhost:3000/characters',
    episodes: 'http://localhost:3000/episodes'
  }
  res.status(200).json({ instructions })
})

router.get('/characters', (req, res) => {
  Character.find()
    .then(characters => res.status(200).json({ characters }))
    .catch(err => res.status(500).json({ err }))
})

router.get('/characters/:name', (req, res) => {
  const { name } = req.params
  Character.findOne({ name })
    .then(character => res.status(200).json({ character }))
    .catch(err => res.status(500).json({ err }))
})

router.get('/episodes', (req, res) => {
  Episode.find()
    .then(episodes => res.status(200).json({ episodes }))
    .catch(err => res.status(500).json({ err }))
})

module.exports = router
