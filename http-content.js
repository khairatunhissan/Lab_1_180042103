const http = require('http')
const content = require('./loadContent')

const server=http.createServer((req,res)=>{
    if(req.url =="/"){
        res.write(content.content.index)
        res.end()
    }
    if(req.url =="/about"){
        res.write(content.content.about)
        res.end()
    }
    else if(req.url =="/contact"){
        res.write(content.content.contact)
        res.end()
    }
    else if(req.url =="/blog"){
        res.write(content.content.blog)
        res.end()
    }
    else if(req.url =="/pricing"){
        res.write(content.content.pricing)
        res.end()
    }
    else if(req.url =="/services"){
        res.write(content.content.services)
        res.end()
    }
    else if(req.url =="/work"){
        res.write(content.content.work)
        res.end()
    }
    else {
        res.write("<h1>This page does't exist</h1> <a href = '/'>Go To base</a>")
        res.end()
    }

})

module.exports={server}