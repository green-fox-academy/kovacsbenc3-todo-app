'use strict';
export{};

const cliArguments: string[] = process.argv;

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
  let fileContent = fs.readFileSync('megegy.txt', 'utf-8').split('\n');
  
if(fileContent.length === 0){
    console.log('No todos for today! :)');
  }console.table(fileContent);
  } 