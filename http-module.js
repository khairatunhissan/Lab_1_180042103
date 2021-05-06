const http =require('http');

const server = http.createServer((req,res)=>{
    //console.log(req);
   /* res.writeHead(201,{"Content-Type":"text/html"});
    res.write('<h1>Hello</h1>');
    res.end();*/

    if(req.url =="/"){
        res.write("<h1>This is base url</h1>")
        res.end()
    }
    else if(req.url =="/home"){
        res.write("<h1>This is home page</h1>")
        res.end()
    }
    else{
        res.write("<h1>This is doesn't exist</h1><a href='/'>Go to base url</a>")
        res.end()
    }

})

module.exports={server}