import corsMiddleware from 'cors'

const corsOptions = {
  origin: ['http://127.0.0.1:3000'],
  optionsSuccessStatus: 200,
}

export const cors = () => corsMiddleware(corsOptions)
