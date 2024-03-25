const http=require('http')

const server=http.createServer((req,res) => {
    if(req.url==="/") {
        res.end("welcome to Our home page")
    } else if(req.url==="/about") {
        res.end("This is our short history")
    }
    else {
        res.end(`<h1>OOpps</h1> <p>it seems we cant find what you are looking for</p><a href="/">Backhome</a>)`)

    }



})

server.listen(8000)