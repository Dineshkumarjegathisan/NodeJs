const http = require('http');
const fs = require('fs')
const op = require('./index.js');



// http.createServer((req,res)=>{
//     fs.readFile('../java/Demo.txt','utf8',(err,data)=>{
//         if(err)  throw err ;
//        res.write(data)
//        res.end();
//     });
// }).listen(3005);

// "D:\java\Demo.txt"

// readFile

// http.createServer((req,res)=>{
//     fs.writeFile('../java/Demo2.txt','im the writing file ',(err,data)=>{
//             if(err) throw err ;
//             res.write('File is Created');
//             res.end();
//     })
// }).listen(3005);

//create File

// http.createServer((req,res)=>{
//     fs.writeFile('../java/Demo3.txt','hiiii',(err)=>{
//         if(err) throw err ;
//         res.write('txt file is created');
//         res.end() ;
//     })
// }).listen(3005);

// append file 

// http.createServer((req,res)=>{
//     fs.appendFile('../java/Demo3.txt/','Dinesh',(err)=>{
//         if(err) throw err ;
//         res.write('append is succes ful');
//         res.end();
//     })
// }).listen(3005);

//delete File
 
// http.createServer((req,res)=>{
//     fs.unlink('../java/Demo2.txt',(err)=>{
//         if(err) throw err ;
//         res.write('file delete sucsFul');
//         res.end();
//     })
    
// }).listen(3005 );

// ReName

// http.createServer((req,res)=>{
//     fs.rename('../java/newFile.txt','../java/newFileeeee.txt',(err)=>{
//         if(err) throw err 
//         res.write("Name changed...!");
//         res.end();
//     })
// }).listen(3005);


// file status

http.createServer((req,res)=>{
    fs.stat('../java/newFileeeee.txt',(err,status)=>{
        if(err) throw err 
        console.log(status);
        res.write("is it file :"+ status.isFile());
        res.end()
    })
}).listen(3005);

const data = op.fileOperation();
console.log(data);