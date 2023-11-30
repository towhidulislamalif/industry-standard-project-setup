import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

// Middleware for parsing JSON bodies
app.use(express.json())

// Middleware for enabling CORS
app.use(cors())

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
