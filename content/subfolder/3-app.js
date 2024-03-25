//npm --global command,comes with node
//npm --version

//local dependency-use it only in this particular project
//npm i <packageName>

//global dependency -use it in any project
//npm install --g <packageName>
//sudo npm install -g <packageName> (mac)


//package.json -manifest file(stores important infor aboput project/package)
//manual approach (create package.json in the root,create properties etc)
//npm init (step by step ,press enter to skip)
//npm init -y(everything default)
// npm i (install specific dependecines with its name) e.g npm i lodash   installs lodash dependencies


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