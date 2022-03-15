import { Router } from 'express'
import { response } from '../utils/response/index.js'
const { NAME, VERSION } = process.env

const router = Router()

router.get('/', (req, res) => {
  res.json(response(true, 'running', { name: NAME, version: VERSION }))
})

export { router as mainRouter }
