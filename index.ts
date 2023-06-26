import dotenv from 'dotenv'
import Princpal from './models/Principal'
dotenv.config()

const principal = new Princpal()

principal.listen()