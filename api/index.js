import express from 'express'

const app = express()
const app = require('../server.js');


app.use(express.json())



app.get('/', (req, res) => {
  res.json({
    message: 'API is running on Vercel',
    routes: ['/health', '/api/hello', '/api/echo'],
  })
})

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  })
})

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'World'

  res.json({
    message: `Hello, ${name}!`,
  })
})

app.post('/api/echo', (req, res) => {
  res.json({
    received: req.body,
  })
})



export default app
