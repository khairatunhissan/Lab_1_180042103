const HelloFunc=require('./helloWorld')

//console.log(HelloFunc);

HelloFunc.Hello();
console.log(HelloFunc.name);

setInterval(()=>{
    HelloFunc.Hello();
},1000);

setTimeout(()=>{
    console.log(HelloFunc.name);
},5000)