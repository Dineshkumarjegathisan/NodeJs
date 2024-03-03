const http = require('http');
const fsPromise = require('fs').promises;

exports.fileOperation = async (req,res)=>{
   try {
    const data = await  fsPromise.writeFile('../java/file.txt','hiiii','utf8');
    console.log(data);

   } catch (err) {
        console.log(err);
   }
}
fileOperation();

// http.createServer(
//     async (req,res)=>{
//         try {
//          const data =  res.write( await  fsPromise.writeFile('../java/file.txt','hiiii','utf8'));
//          console.log(data);
//          res.end();
     
//         } catch (err) {
//              console.log(err);
//         }
//      }
// ).listen(3005);