//Asyncnchronous approach or non-blocking approach
const {readFile,writeFile}=require('fs');

readFile('./content/subfolder/first.txt','utf8',(err,result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first=result;
    console.log(first)
    //if the format is not utf8 format it gives output in buffer format
    readFile('./content/subfolder/second.txt','utf8',(err,result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second=result;
        console.log(second)
        writeFile(
            './content/subfolder/result2-sync.txt',
            `Here is the result file:${first},${second}`,{flag: 'a'},
            (err,result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    });
});
