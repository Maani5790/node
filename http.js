const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    res.end('<h1>This is rehman</h1> <p> hi everyone </p>');

})

server.listen(port, ()=>{
    console.log(`server is running on this code ${port}`);
})
