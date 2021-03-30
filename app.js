const express = require('express');
const { sequelize ,users,post,comments,reaction} = require('./models');
const app=express()
app.use(express.json())
const dataroutes=require('./models2/routes')



app.use(dataroutes)

app.listen({port:5000}, async() => {
    console.log('server up to http://localhost:5000')
    await sequelize.sync({alter:true})
    console.log('done')
})

    
