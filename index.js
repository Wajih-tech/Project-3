//module
// const a = {
//     average:(a,b)=>{
//         console.log((a+b)/2);
//     }};
//     module.exports = a;
//file system
// const fs =require("fs");

// fs.readFile("./sample.txt" ,"utf-8" ,(err,data)=>{
//     if(err)
//     return err;
//     else
//     console.log(data);
// });
const http = require("http");
const fs = require("fs");

const PORT = 3000;
//process.env.PORT
const HostName = "localhost";
const home = fs.readFileSync("./index.html","utf-8");
const notFound = fs.readFileSync("./notFound.html","utf-8");
const contact = fs.readFileSync("./contact.html","utf-8");
const about = fs.readFileSync("./about.html","utf-8");
const chart = fs.readFileSync("./chart.html","utf-8");
const howitworks = fs.readFileSync("./howitworks.html","utf-8");

 const server = http.createServer((req,res)=>{
    if (req.url === "/"){
       return res.end(home);
    }
     if (req.url === "/about"){
       return res.end(about);
    }
     if (req.url === "/contact"){
        return res.end(contact);
       }
    if (req.url === "/chart"){
        return res.end(chart);
       } 
    if (req.url === "/howitworks"){
        return res.end(howitworks);
       }   else {
       return res.end(notFound);
     }
});

server.listen(PORT,HostName,()=>{
    console.log(`server is running on http://${HostName}:${PORT}`);
});
