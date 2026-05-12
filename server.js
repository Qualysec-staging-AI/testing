import app from './api/index.js'
import express from 'express'

const app = express()
app.use(express.json())

app.get('/noor', (_ , res)=>{
    res.json({
        message : "hyy hyy hyy "
    })
})



export default app
