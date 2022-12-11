const fs=require('fs');
const http=require('http');


const content="<h1>Hello World</h1>\n<p>This is Tushar...</p>";
fs.writeFile("index.html",content,(err)=>{
    console.log(err);
})

const server=http.createServer((req,res)=>{
    fs.readFile("index.html",{encoding:'utf-8'},(err,data)=>{
        if(!err){
            res.write(data);
        }else{
            console.log(err); 
        }
        res.end();
    }); 
});

server.listen(5000,()=>{
    console.log("Server is up at port 5000")
});