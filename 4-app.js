
//synchronous approach or blocking approach
const {readFile}=require('fs')
// const first=readFileSync('./content/subfolder/first.txt','utf8');

// const second=readFileSync('./content/subfolder/second.txt','utf8')


// writeFileSync(
//     './content/subfolder/result-sync.txt',
//     `Here is the result file:${first},${second}`,{flag: 'a'}
// )


//console.log(first,second);

//$ npm run dev allow us to see our chages of coding live without restarting
// const _=require('lodash')
// const items=[1,[2,[3,[4]]]]
// const newItems=_.flattenDeep(items)
// console.log(newItems)
// console.log("hello Nathan")

// // started operating system process
// console.log('first')
// setTimeout(() => {
//     console.log('second')
// },0)
// console.log('third')
//completed and exited operating system process

const getText=(path) => {
    return new Promise((resolve,reject) => {
        readFile(path,'utf8',(err,data) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}
// first approach without using async wait approach

// getText('./content/subfolder/result2-sync.txt').
//     then(result => console.log(result)).
//     catch(err => console.log(err))

//second apprach following Async wait approach
// the following can be shortened and cleaned with other approach 'util'
const start=async () => {
    try {
        const first=await (getText('./content/subfolder/first.txt'))
        const second=await (getText('./content/subfolder/second.txt'))
        console.log(first,second)
    } catch(error) {
        console.log(error)
    }
}

start()