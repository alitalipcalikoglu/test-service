import express from 'express'
import { cors } from './middlewares/cors.js'
import { urlEncode } from './middlewares/urlEncode.js'
import { json } from './middlewares/json.js'
import { compression } from './middlewares/compression.js'
import { mainRouter } from './routes/main.js'

const app = express()
const v001 = express()

app.set('trust proxy', 1)

app.use(cors())
app.use(urlEncode())
app.use(json())
app.use(compression())

v001.use('/', mainRouter)

app.use(`/${process.env.ROUTE_PREFIX}/${process.env.VERSION}`, v001)

export { app }
