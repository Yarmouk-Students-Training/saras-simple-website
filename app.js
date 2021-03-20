const express=require('express')
const morgan =require('morgan')
const mongoose=require('mongoose')
const blogroutes =require('./routes/blogroutes')

const app=express()

const dburl ='mongodb://nodeninja:node1234@node-shard-00-00.r9hys.mongodb.net:27017,node-shard-00-01.r9hys.mongodb.net:27017,node-shard-00-02.r9hys.mongodb.net:27017/node-data?ssl=true&replicaSet=atlas-298ssa-shard-0&authSource=admin&retryWrites=true&w=majority';

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.get('/add-blogs', (req, res) => {
   const blog = new Blog({
     title: 'new blog22',
     snippet: 'about my new blog',
     body: 'more about my new blog'
   })
 
   blog.save()
     .then(result => {
       res.send(result);
     })
     .catch(err => {
       console.log(err);
      });
})

app.get('/',(req,res)=>{
   res.redirect('/blogs');
})

app.get('/about',(req,res)=>{
   res.render('about', {sara:'about'})
})

app.use('/blogs', blogroutes)

app.use((req,res)=>{
   res.status('404').render('404')
})



