'use strict';
export{};
import { remove } from './remove'
import { info } from './info'

const cliArguments: string []  = process.argv;

console.log(cliArguments);

// Print usage
if (cliArguments[2] === undefined) {
  info();

//Print list
} else if (cliArguments[2] === '-l') {
  const fs = require('fs');
  let fileContent: string = fs.readFileSync('list.txt', 'utf-8');
  
  if(fileContent.length === 0){
    console.log('No todos for today! :)');
  } else console.log(fs.readFileSync('list.txt', 'utf-8'));
  } 
  
  //Add task
  else if (cliArguments[2] === '-a') {
      if(cliArguments[3] === undefined){
      console.log('Unable to add: No task provided');
      } else {
      const fs = require('fs');
    fs.writeFileSync('list.txt', ''+'\n',{flag:'a'});
  
    let sum: string = '';
    for(let i: number = 3; i < cliArguments.length; i++){
      const fs = require('fs');
      let fileContent = cliArguments[i];
      fs.writeFileSync('list.txt', fileContent + ' ',{flag:'a'});
      sum += ' ' + cliArguments[i];
    }  
  console.log(`\n New task added: ${sum}`);
  }
}

//Remove
if(cliArguments[2] === '-r'){
  const fs = require('fs');
  let fileContent: string = fs.readFileSync('list.txt', 'utf-8');
  let checkArray: string [] = fileContent.split('\n')

  let index: number = parseInt(cliArguments[3])
  if(Number.isInteger(index)){
    if(index > checkArray.length){
      console.log('Unable to remove: index is out of bound')
    }else if(index <= 0){
      console.log('Unable to remove: no index provided')
    } else 
    remove(index)
    } else {
    console.log('OFF');
    }
} 