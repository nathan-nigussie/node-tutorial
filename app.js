//another apprach of promise using 'util' refer 4-app.js
const {readFile,writeFile}=require('fs')
const util=require('util')

const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

const start=async () => {
    try {
        const first=await (readFilePromise('./content/subfolder/first.txt','utf8'))
        const second=await (readFilePromise('./content/subfolder/second.txt','utf8'))
        console.log(first,second)
        await writeFilePromise('./content/subfolder/noad-exercise.txt',`I am interested with this course:${first},${second}`)
    } catch(error) {
        console.log(error)
    }
}

start()