import { readFileSync } from 'fs';

const passwords: string[] = readFileSync('./input-files/password-policies.txt').toString('utf8').split('\n');

const validPasswords: string[] = [];

passwords.forEach(entry => {
  const policy = entry.split(':')[0].split(' ')[0];
  const letter = entry.split(':')[0].split(' ')[1];
  const password = entry.split(':')[1].slice(1);

  const min = policy.split('-')[0];
  const max = policy.split('-')[1];
});