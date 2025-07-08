const express=require("express");
const app=express();
const port=8080;
app.set("view engine","ejs");
const path=require("path");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const { v4: uuidv4 } = require('uuid');



app.listen(port,()=>{
    console.log("Listening to port 8080");
});


posts=[
    {
        id:uuidv4(),
        username:"sushanth",
        tweet:"Hello I am new to twitter,lets connect",
    },
     {
        id:uuidv4(),
        username:"bakugo",
        tweet:"Build in public.Its very useful",
    },
     {
        id:uuidv4(),
        username:"codezyy",
        tweet:"Do not distract yourself",
    }
]

//Index route 
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})


//create route
app.get('/posts/new',(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let id=uuidv4();
    let {username,tweet}=req.body;
    posts.push({username,tweet,id});
    res.redirect("/posts");
})