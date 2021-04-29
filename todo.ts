'use strict';

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

} else if (cliArguments[2] === '-l') {

  

  const fs = require('fs');
  let fileContent = fs.readFileSync('list.txt', 'utf-8');
  let array: string[] = fileContent.split('');
  
  
  if(array.length === 0){
    console.log('\n No todos for today! :)');
  }console.log('\n'+ fileContent);

  
} else if (cliArguments[2] === '-a') {
  const newTask = cliArguments[3];
  console.log(`Added new task: ${newTask}`);
}