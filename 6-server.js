const http=require('http')

var fs=require('fs')

//using file stream to send files in chunks that sending big text file.
http.createServer(function(req,res) {
    //the following approach sends big file data to request
    // const text=fs.readFileSync('./content/subfolder/big.txt','utf8')
    // res.end(text)
    const fileStream=fs.createReadStream('./content/subfolder/big.txt','utf8');
    fileStream.on('open',() => {
        //this changes the header respose data in chunk instead of send all file.
        fileStream.pipe(res)
    })
    fileStream.on('error',(err) => {
        res.end(err)
    })
})
    .listen(5000)






//one way of creating server
// const server=http.createServer((req,res) => {
// //     res.end('wellcome Nathy')
// // })

// server.listen(5000)

//other way of creating server using Event Emitter

//const server=http.createServer()
//--This emits request event
// subscribe to it /listen for it/respond it

// server.on('request',(req,res) => {
//     respond.end("wellcome back world!")
// })

//server.listen(5000)


