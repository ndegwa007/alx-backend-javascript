#!/usr/bin/node

const process = require('process');

process.stdin.setEncoding('utf8'); // Set encoding to utf8 to work with text data
process.stdin.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('end', () => {
  // Handle the end of input (when the pipe is closed)
  process.stdout.write('this important software is now closing');
});

process.stdin.on('readable', () => {
  // Process the incoming data as it arrives
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
