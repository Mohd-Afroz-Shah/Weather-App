// Link used in the project
// https://cdnjs.com/libraries/font-awesome/5.10.0     to  set the font awesome in the index.html page
// https://fontawesome.com/


const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

const static_path = path.join(__dirname,"../public")
const templates_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")


const err_path = path.join(__dirname,"../img/error-404.png")
app.set('view engine','hbs')
app.set('views', templates_path)
hbs.registerPartials(partials_path)

app.use(express.static(static_path))

app.get("/",(req, res)=>{
    res.render('index')
})
app.get("/about",(req, res)=>{
    res.render('about')
})
app.get("/weather",(req, res)=>{
    res.render('weather')
})
app.get("*",(req, res)=>{
    res.render('error404')
})
app.listen(8000,()=>{
    console.log("The website has been hosted on http://localhost:8000")
})