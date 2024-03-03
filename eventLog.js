const {v4:uuid} = require('uuid');
const path = require('path');
const {format} = require('date-fns');
const fsPromise = require('fs').promises ;
const fs =require('fs')

const logEvent = async(message)=>{
    const dateTime = `${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`
    const logItem = `${dateTime}\n${uuid()}\t${message}`
    console.log(logItem);
    try {

        if(!fs.existsSync(path.join(__dirname,'logs')))
        {
           await fsPromise.mkdir(path.join(__dirname,'logs'))
        }
         await  fsPromise.appendFile(path.join(__dirname,'logs','eventFile.txt'),logItem);

    } catch (err) {
        console.error(err);
    }

}
module.exports = logEvent ;