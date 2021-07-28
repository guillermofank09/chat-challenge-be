import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { encodeMessage } from './utils'

const app: Application = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.post('/api/message', async (req: Request, res: Response): Promise<Response> => {
    const { message } = req.body
    const hash = encodeMessage(message)
    return res.status(200).send({
        hash: hash,
    });
} )

app.get('/api/message/:hash', async (req: Request, res: Response): Promise<Response> => {
    return res.status(404).send({
        message: 'Hash algorith is only one way. You cannot decrypt any hash algorithm'
    });
} )

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`)
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`)
}