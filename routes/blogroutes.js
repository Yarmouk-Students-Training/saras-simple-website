const express=require('express')
const Blog =require('../models/blog')
const routes =express.Router()


routes.get('/create',(req,res)=>{
    res.render('create',{mohammad:'create'})
 })

routes.get('/:id',(req,res)=>{
    const id=req.params.id;
    Blog.findById(id)
    .then(data=>{
       res.render('blog_id',{blog:data ,title:'blog id'})
    })
    .catch(err=>{
       console.log(err)
    })
})

module.exports=routes;
 
routes.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { blogs: result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
});
 
routes.post('/', (req, res) => {
    const blog = new Blog(req.body);
  
    blog.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
  });
 
routes.delete('/:id',(req,res)=>{
    const id=req.params.id
    Blog.findByIdAndDelete(id)
    .then(data=>{
       res.json({redirect : '/blogs'})
    })
    .catch(err=>{
       console.log(err)
    })
})
 