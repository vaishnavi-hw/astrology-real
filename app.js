const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const datamodel = require('./models/dataModel')
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    const properData = [];
    res.render("index",{properData});
})
app.post('/result',async (req,res)=>{
const {lagna,bhav,grah,text}= req.body;
let properData = await datamodel.find({$and: [{lagna},bhav?{bhav}:{},grah?{grah}:{}]}).exec();
res.render("index",{properData})
})
app.listen(3000);