import { readFileSync } from 'fs';

const expenseReport: string[] = readFileSync('./input-files/expense-report.txt').toString('utf8').split('\n');

let firstExpense: number;
let secondExpense: number;

expenseReport.forEach(expenseA => {
  const expenseAInt: number = parseInt(expenseA);
  expenseReport.forEach(expenseB => {
    const expenseBInt: number = parseInt(expenseB);
    if (expenseAInt + expenseBInt === 2020) {
        firstExpense = expenseAInt;
        secondExpense = expenseBInt;
    };
  });
});

console.log(firstExpense * secondExpense)