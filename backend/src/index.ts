import "reflect-metadata"
import { AppDataSource } from "./database/data-source"
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from "./routes"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

AppDataSource.initialize().then((dataSource) => {
    app.listen(process.env.API_PORT || 3335, () => {
        console.log('listening at 3335')
    })
}).catch(err => {
    console.log(err)

})