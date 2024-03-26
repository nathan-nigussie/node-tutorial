const {writeFileSync}=require('fs')



//  {flag: 'a'} it append the file that replacing the text

for(let i=1;i<50000;i++) {

    writeFileSync('./content/subfolder/big.txt',`hello world ${i}\n`,{flag: 'a'})
}
