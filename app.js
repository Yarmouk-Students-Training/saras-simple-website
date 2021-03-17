const express=require('express')
const app=express()
app.set('view engine','ejs')
//when we named the folder that contane html files another of(views) we will convert the defult name of it like this(app.set('views','the other name'))
app.listen(3000)
app.get('/',(req,res)=>{
   const belogs=[{title:'sara t ',snippet:'sara s'},{title:'rama t',snippet:'rama s'},{title:'sar t',snippet:'sar s'}]
    //res.sendFile('./views/about.html',{root: __dirname});//this when we use html file
    res.render('index',{sara: 'Home',belogs});//tise when we use ejs file
 })

app.get('/about',(req,res)=>{
    res.render('about', {sara:'about'})
 })
/*app.get('/about-us',(req,res)=>{
   res.redirect('/about')
})*/
app.get('/blogs/create',(req,res)=>{
   res.render('create',{mohammad:'create'})
})
app.use((req,res)=>{
   res.status('404').render('404')
})
 
