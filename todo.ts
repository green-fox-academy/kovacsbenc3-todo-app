'use strict';
export{};

const cliArguments: string []  = process.argv;

console.log(cliArguments);

// Print usage
if (cliArguments[2] === undefined) {
  console.log('Command Line Todo application');
  console.log('=============================');
  console.log('');
  console.log('Command line arguments:');
  console.log('    -l   Lists all the tasks');
  console.log('    -a   Adds a new task');
  console.log('    -r   Removes an task');
  console.log('    -c   Completes an task');

//Print list
} else if (cliArguments[2] === '-l') {
  const fs = require('fs');
  let fileContent: string = fs.readFileSync('list.txt', 'utf-8');
  
  if(fileContent.length === 0){
    console.log('No todos for today! :)');
  } else console.log(fs.readFileSync('list.txt', 'utf-8'));
  } 
  
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

  let index: number = parseInt(cliArguments[3])

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