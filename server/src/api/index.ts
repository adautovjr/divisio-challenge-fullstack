import express from 'express'

import { mockPokemons } from '../mocks/pokemons'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('REST Api online!')
})

router.get('/users', (req, res) => {
  res.send(mockPokemons)
})

export default router
