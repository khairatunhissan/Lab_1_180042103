const http = require('http')
const content = require('./loadContent')

const server=http.createServer((req,res)=>{
    if(req.url =="/"){
        res.write(content.index)
        res.end()
    }
    if(req.url =="/about"){
        res.write(content.about)
        res.end()
    }
    else if(req.url =="/contact"){
        res.write(content.contact)
        res.end()
    }
    else if(req.url =="/blog"){
        res.write(content.blog)
        res.end()
    }
    else if(req.url =="/pricing"){
        res.write(content.pricing)
        res.end()
    }
    else if(req.url =="/services"){
        res.write(content.services)
        res.end()
    }
    else if(req.url =="/work"){
        res.write(content.work)
        res.end()
    }
    else {
        res.write("<h1>This page does't exist</h1> <a href = '/'>Go To base</a>")
        res.end()
    }

})

module.exports={server}