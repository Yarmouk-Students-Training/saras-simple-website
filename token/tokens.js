const express = require('express');
const jwt = require('jsonwebtoken');
const app=express()
app.use(express.json())
const dotenv = require('dotenv');
dotenv.config();
process.env.SECRET_KEY;


function generateAccessToken(email) {
    return jwt.sign(email, process.env.SECRET_KEY, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET_KEY , (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports={generateAccessToken,authenticateToken}