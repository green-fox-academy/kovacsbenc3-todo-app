'use strict';
export{};

    const fs = require('fs');
    let fileContent = fs.readFileSync('test.txt', 'utf-8');
    console.table(fileContent);

    let array: string [] = fileContent.split('\n')
    console.table(array);

    array.splice(2,1);
    console.table(array);
    fs.writeFileSync('test.txt','\n');
   
    for(let i: number = 0; i < array.length; i++){
        if(i === 0){
        fs.writeFileSync('test.txt', array[i]);
        }else 
        fs.writeFileSync('test.txt', `\n${array[i]}`, {flag: 'a'});
    }

    let finished = fs.readFileSync('test.txt', 'utf-8');
    console.table(finished);