
//synchronous approach or blocking approach
const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./content/subfolder/first.txt','utf8');

const second=readFileSync('./content/subfolder/second.txt','utf8')


writeFileSync(
    './content/subfolder/result-sync.txt',
    `Here is the result file:${first},${second}`,{flag: 'a'}
)


console.log(first,second);
