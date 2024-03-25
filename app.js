
//synchronous approach or blocking approach
// const {readFileSync,writeFileSync}=require('fs')
// const first=readFileSync('./content/subfolder/first.txt','utf8');

// const second=readFileSync('./content/subfolder/second.txt','utf8')


// writeFileSync(
//     './content/subfolder/result-sync.txt',
//     `Here is the result file:${first},${second}`,{flag: 'a'}
// )


//console.log(first,second);

//$ npm run dev allow us to see our chages of coding live without restarting
const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)
console.log("hello Nathan")