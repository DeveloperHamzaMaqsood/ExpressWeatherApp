const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const port = 8000

const staticPath = path.join(__dirname, '../public')
const tempPath = path.join(__dirname, './template/views')
const partialPath = path.join(__dirname, './template/partials')
hbs.registerPartials(partialPath)

app.set("views", tempPath)
app.set('view engine', 'hbs')
app.use(express.static(staticPath))



app.get('/' ,(req , res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})


app.get('*', (req, res) => {
    res.render('404',{
        error : 'Sorry, Page Not Found'
    })
})

app.listen(port, () => {
    console.log('Listening to App')
})