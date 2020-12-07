import { readFileSync } from 'fs';

const expenseReport: string[] = readFileSync('./input-files/expense-report.txt').toString('utf8').split('\n');