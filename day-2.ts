import { readFileSync } from 'fs';

const passwords: string[] = readFileSync('./input-files/password-policies.txt').toString('utf8').split('\n');