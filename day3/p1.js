const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World');
});

server.listen(5000,(err)=>{
    if(err)
        console.error(err);
    else
    console.log('server is running on port 5000');

});