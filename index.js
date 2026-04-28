import express from 'express'
import mongoose from 'mongoose'
import userRouter from './Routers/userRouter.js'
import productRouter from './Routers/productRouter.js'
import authenticate from './middlewares/authenticate.js'
import dotenv from 'dotenv'
import cors from "cors"


dotenv.config()

const mongoDBURI = process.env.MONGODB_URI

mongoose.connect(mongoDBURI).then(
    ()=>{
        console.log("Connected to MongoDB successfully")
    }
)

const app = express()

app.use(cors())

app.use( express.json() )

app.use(authenticate)

app.use("/users" , userRouter)
app.use("/products" , productRouter)

app.listen(
    3000 ,
    ()=>{
        console.log('Server started successfully')
        console.log('Listening on port 3000')
    }
)


