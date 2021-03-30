const express = require('express');
const router=express.Router()
const app=express()
app.use(express.json())
const { sequelize ,users,post,comments,reaction} = require('../models'); 
const {generateAccessToken,authenticateToken}=require('../token/tokens')


router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user=await users.findOne({
            where:{email,password}
        })
        if(user){
            const token = generateAccessToken({ email: req.body.email });
            return res.json({message:'log in successful',token})  
        }
        else{
            return res.send('the email or password is wrong')
        }
    }
    catch(err){
        console.log(err)
    }
})

router.post('/users/create',async(req , res) => {
    const {name,email,birthDate,gender,password} = req.body;
    try{
        const user = await users.create({name,email,birthDate,gender,password})
        return res.json(user)
    }
    catch(err){
        console.log(err)
    }
})

router.post('/post/create',authenticateToken,async(req , res) => {
    const {user_id,content} = req.body;
    try{
        const posts = await post.create({user_id,content})
        return res.json(posts)
    }
    catch(err){
        console.log(err)
    }
})

router.post('/comments/post/post_id',authenticateToken,async(req , res) => {
    const {user_id,post_id,content2} = req.body;
    try{
        const comment = await comments.create({user_id,post_id,content2})
        return res.json(comment)
    }
    catch(err){
        console.log(err)
    }
})

router.post('/reaction/post/post_id',authenticateToken,async(req , res) => {
    const {user_id,post_id,type_Of_reaction} = req.body;
    try{
        const react = await reaction.create({user_id,post_id,type_Of_reaction})
        return res.json(react)
    }
    catch(err){
        console.log(err)
    }
})

//all users
router.get('/users',async(req , res) => {
    try{
        const user = await users.findAll()
        return res.json(user)
    }
    catch(err){
        console.log(err)
    }
})

//specific user
router.get('/users/:email',authenticateToken,async(req , res) => {
    const email=req.params.email
    try{
        const user = await users.findOne({
            where:{email}
        })
        return res.json(user)
    }
    catch(err){
        console.log(err)
    }
})

//all post
router.get('/post',authenticateToken,async(req , res) => {
    
    try{
        const po = await post.findAll()
        return res.json(po)
    }
    catch(err){
        console.log(err)
    }
})

//all post for specific user
router.get('/users/:user_id/post',authenticateToken,async(req , res) => {
    const user_id=req.params.user_id
    try{
        const emails = await post.findAll({
            where:{user_id}
        })
        return res.json(emails)
    }
    catch(err){
        console.log(err)
    }
})

//specific post
router.get('/post/:post_id',authenticateToken,async(req , res) => {
    const post_id=req.params.post_id
    try{
        const posts= await post.findOne({
            where:{post_id}
        })
        return res.json(posts)
    }
    catch(err){
        console.log(err)
    }
})

//a specific comment for a specific post
router.get('/comments/:comments_id/post/:post_id',authenticateToken,async(req , res) => {
    const post_id=req.params.post_id
    const comments_id=req.params.comments_id
    try{
        const comment= await comments.findOne({
            where:{post_id , comments_id}
        })
        return res.json(comment)
    }
    catch(err){
        console.log(err)
    }
})

//all comment for a specific post
app.get('/comments/post/:post_id',authenticateToken,async(req , res) => {
    const post_id=req.params.post_id
    try{
        const comment= await comments.findAll({
            where:{post_id}
        })
        return res.json(comment)
    }
    catch(err){
        console.log(err)
    }
})

//a specific reaction for a specific post
router.get('/reaction/:reaction_id/post/:post_id',authenticateToken,async(req , res) => {
    const post_id=req.params.post_id
    const reaction_id=req.params.reaction_id
    try{
        const react= await reaction.findOne({
            where:{post_id , reaction_id}
        })
        return res.json(react)
    }
    catch(err){
        console.log(err)
    }
})

//all reaction for a specific post
router.get('/reaction/post/:post_id',authenticateToken,async(req , res) => {
    const post_id=req.params.post_id
    try{
        const react= await reaction.findAll({
            where:{post_id}
        })
        return res.json(react)
    }
    catch(err){
        console.log(err)
    }
})

//users update
router.put('/users',authenticateToken,async(req , res) => {
    //const email=req.params.email
    const {name,email,birthDate,gender,password} = req.body;
    try{
        const user = await users.findOne({where:{email}})
        if(name){
            user.name=name
        }
        if(birthDate){
            user.birthDate=birthDate
        }
        if(gender){
            user.gender=gender
        }
        if(password){
            user.password=password
        }
        await user.save()
        return res.json(user)
    }
    catch(err){
        console.log(err)
    }
})

//post update
router.put('/post',authenticateToken,async(req , res) => {
    const {post_id,content}=req.body
    try{
        const posts= await post.findOne({
            where:{post_id}
        })
        posts.content=content
        await posts.save()
        return res.json(posts)
    }
    catch(err){
        console.log(err)
    }
})

//updaet a specific comment for a specific post
router.put('/post/comments',authenticateToken,async(req , res) => {
    const {post_id,comments_id,content2}=req.body
    try{
        const comment= await comments.findOne({
            where:{post_id , comments_id}
        })
        comment.content2=content2
        await comment.save()
        return res.json(comment)
    }
    catch(err){
        console.log(err)
    }
})

//update a specific reaction for a specific post
router.put('/post/reaction',authenticateToken,async(req , res) => {
    const {reaction_id,post_id,type_Of_reaction} = req.body
    try{
        const react= await reaction.findOne({
            where:{post_id , reaction_id}
        })
        react.type_Of_reaction=type_Of_reaction
        await react.save()
        return res.json(react)
    }
    catch(err){
        console.log(err) 
    }
})

//delete a specific user
router.delete('/users/:email',authenticateToken,async(req ,res)=>{
    const email=req.params.email
    try{
        const user=await users.findOne({
            where:{email}
        })
        await user.destroy()
        return res.send({mesage:"delete successful"})
    }
    catch(err){
        console.log(err)
    }
})

// delete post
router.delete('/post/:post_id',authenticateToken,async(req ,res)=>{
    const post_id=req.params.post_id
    try{
        const user=await users.findOne({
            where:{post_id}
        })
        await user.destroy()
        return res.send({mesage:"delete successful"})
    }
    catch(err){
        console.log(err)
    }
})

router.delete('/post/reaction/:reaction_id',authenticateToken,async(req ,res)=>{
    const reaction_id=req.params.reaction_id
    try{
        const user=await users.findOne({
            where:{reaction_id}
        })
        await user.destroy()
        return res.send({mesage:"delete successful"})
    }
    catch(err){
        console.log(err)
    } 
})

module.exports=router