//another apprach of promise using 'util' refer 4-app.js
// const {readFile,writeFile}=require('fs')
// const util=require('util')

//or we can shortfy the abpve line with the following
const {readFile,writeFile}=require('fs').promises
//The above line is same with the above line
// const {readFile,writeFile}=require('fs')
// const util=require('util')



const start=async () => {
    try {
        const first=await (readFile('./content/subfolder/first.txt','utf8'))
        const second=await (readFile('./content/subfolder/second.txt','utf8'))
        console.log(first,second)
        await writeFile('./content/subfolder/noad-exercise.txt',`I am interested with Node:${first},${second}`,{flag: 'a'})
    } catch(error) {
        console.log(error)
    }
}

start()