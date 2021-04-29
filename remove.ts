'use strict';
export{};

export function remove(index: number) {

  const fs = require('fs');
    let fileContent = fs.readFileSync('list.txt', 'utf-8');
    let array: string [] = fileContent.split('\n')
    array.splice(index-1,1);
    fs.writeFileSync('list.txt','\n');
   
    for(let i: number = 0; i < array.length; i++){
        if(i === 0){
        fs.writeFileSync('list.txt', array[i]);
        }else 
        fs.writeFileSync('list.txt', `\n${array[i]}`, {flag: 'a'});
    }

    let finished = fs.readFileSync('list.txt', 'utf-8');
    console.table(finished);
}