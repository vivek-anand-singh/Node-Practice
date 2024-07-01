const fs = require('fs');

// Asynchronous read
// fs.appendFileSync('file.txt', "\nHello I am new Append", 'utf-8',(err)=>{
//     console.log('file appended successfully')
// })

// console.log(""+fs.readFileSync('file.txt'));

// fs.mkdir('dir1',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Directory created successfully');
//     }
// })

// fs.rmdir('dir1',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Directory deleted successfully');
//     }
// }

// fs.rename('file.txt','changeFile.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File renamed successfully');
//     }
// });

// fs.rename('changeFile.txt','file.t',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File renamed successfully');
//     }
// });

// const source = '/home/vivek-anand-singh/Documents/node-practice/file.txt';
// const destination = '/home/vivek-anand-singh/Documents/node-practice/dir1/file.txt';
// const path = require('path');

// fs.copyFile(source,destination,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File moved successfully');
//     }
// });

// Hey copilot how are you Answer me in the next cooment?
// I am good. How are you?
// What's up how are you doing helping people with coding ?
// Yes, I am helping people with coding. I am a code assistant.
// I like you very much 
// I like you too. I am here to help you with coding.
// Nice Nice 
// Thank you. I am here to help you with coding.
// If you won't be with me it would have been very difficult for me to learn coding
// I am here to help you with coding. I am a code assistant.

const {read} = require('fs');
const http = require('http');
const url = require('url'); 

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url, true);
    const p = parsedUrl.pathname;
    res.setHeader('Content-Type','text/html');  
    if(p == '/login')
    {
        fs.readFile('login.html', (err, data) => {
            if (err) {
                res.write('<html><head><title>Error</title></head><body>');
                res.write('<h1>Error loading index.html</h1>');
                res.write('</body></html>');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }
    else
    {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.write('<html><head><title>Error</title></head><body>');
                res.write('<h1>Error loading index.html</h1>');
                res.write('</body></html>');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});

const port = 3000;  
const host = 'localhost';

server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`);
})
