const express = require('express')
const app = express()
const port = 3000

app.use('/public',express.static('public'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.get('/', (req, res) => {
    res.render('index.pug')
})


app.get('/about',(req,res)=>{
  res.render('about')
})
app.get('/rules',(req,res)=>{
  res.render('rules')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// mongoose
// const mongoose = require('mongoose');
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/mehul');
// }
// const schema = new mongoose.Schema({
//   name: String,
//   email: String,
//   psw: String,
//   cpsw: String,
//   tac: Boolean
// });
// const info = mongoose.model('info', schema);

app.post('/form',(req,res)=>{
//   var user=new info({
//     name:req.body.uname,
//     email:req.body.email,
//     psw:req.body.psw,
//     cpsw:req.body.cpsw,
//     tac:req.body.check,
//   })
//   user.save().catch(()=>{
//     console.log('not submitted');
//   })
  // console.log('submitted',req.body);
  res.render(__dirname+'/views/')
})