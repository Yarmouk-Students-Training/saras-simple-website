const express = require('express');

const { sequelize } = require('./models')

const app=express()
app.use(express.json())

async function main(){
    await sequelize.sync({force:true})
}
main()