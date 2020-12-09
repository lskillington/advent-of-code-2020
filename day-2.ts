import { readFileSync } from 'fs';

const passwords: string[] = readFileSync('./input-files/password-policies.txt').toString('utf8').split('\n');

let validPasswords: number = 0;

passwords.forEach(entry => {
  const policy = entry.split(':')[0].split(' ')[0];
  const letter = entry.split(':')[0].split(' ')[1];
  const passwordArray = entry.split(':')[1].slice(1).split('');

  const min: number = parseInt(policy.split('-')[0]);
  const max: number = parseInt(policy.split('-')[1]);

  let count: number = 0;
  passwordArray.forEach(char => {
    if (count > max) {
      return;
    }
    if (char === letter) {
      count = count + 1;
    }
  });

  if (count >= min && count <= max) {
    validPasswords = validPasswords + 1;
  }
});

console.log(validPasswords);