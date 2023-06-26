import express from 'express'
import cors from 'cors'
import eventRoutes from '../routes/events.routes'
import usersRoutes from '../routes/users.routes'
import loginRoutes from '../routes/users.routes'
import { connectDB } from '../database/config'

class Princpal {
    private app: express.Application
    private port: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'
        this.middlewares()
        this.routes()
        this.database()
    }

    middlewares() {
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/events', eventRoutes)
        this.app.use('/users', usersRoutes)
        this.app.use('/auth', loginRoutes)
    }

    async database(){
       await  connectDB()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`http://localhost:${this.port}`)
        })
    }
}


export default Princpal