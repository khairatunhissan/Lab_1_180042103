const fs = require('fs');

const about=fs.readFile("./contents/HTML/about.html","utf-8",(err,data)=>
{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

const blog=fs.readFile("./contents/HTML/blog.html","utf-8",(err,data)=>
{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

const contact=fs.readFile("./contents/HTML/contact.html","utf-8",(err,data)=>
{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

const index=fs.readFile("./contents/HTML/index.html","utf-8",(err,data)=>
{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

const pricing=fs.readFile("./contents/HTML/pricing.html","utf-8",(err,data)=>
{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

const services=fs.readFile("./contents/HTML/services.html","utf-8",(err,data)=>
{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

const work=fs.readFile("./contents/HTML/work.html","utf-8",(err,data)=>
{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

module.exports={
    about,blog,contact,index,pricing,services,work
}