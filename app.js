const express = require('express')
const port = process.env.PORT || 3000
const app = express()
const db = require('./db/models')

app.get('/', (req, res) => {
    db.User.findAll().then(
        (data)=> res.send(data)
    )
})
app.get('/home', (req, res) => res.send('begining heroku')) 

app.listen(port, () => console.log(`express run at port: ${port}`))