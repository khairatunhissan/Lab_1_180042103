//synchronous and asynchronus function

const fs = require('fs');

//writefile
fs.writeFileSync("./contents/demoFile.txt","We are learning nodejs. ")

//appendfile
fs.appendFileSync("./contents/demoFile.txt","We are learning Js.")

//renamefile
fs.rename("./contents/demoFile.txt","./contents/renameFile.txt",(err)=>
{
    if(err){

        console.log(err);
    }else{
        console.log("rename successful");
    }
})

//readfile
/*fs.readFile("./contents/renameFile.txt","utf-8",(err,data)=>
{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})*/
console.log("before")
fs.readFile("./contents/renameFile.txt","utf-8",(err,data)=>
{
    if(err){
        console.log(err);
    }else{
        fs.appendFile("./contents/renameFile.txt","Is this aprocess? ",(err)=>
        {
          console.log(err);
        })
        fs.readFile("./contents/renameFile.txt","utf-8",(err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        })

    }
})

console.log("after")

/*delete file
fs.unlink("./contents/renameFile.txt",(err)=>
{
    if(!err){
        console.log("Delete Successfully")
    }
})*/