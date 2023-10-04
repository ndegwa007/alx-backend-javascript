#!/usr/bin/node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.stdin.isTTY) {
  // Running interactively with 'node [filename]'
  console.log('Welcome to Holberton School, what is your name?');

  rl.on('line', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });
} else {
  // Piped input
  console.log('Welcome to Holberton School, what is your name?');

  const chunks = [];

  process.stdin.on('data', (chunk) => {
    chunks.push(chunk);
  });

  process.stdin.on('end', () => {
    const input = chunks.join('');
    process.stdout.write(`Your name is: ${input}`);
    process.stdout.write('This important software is now closing\n');
  });
}
