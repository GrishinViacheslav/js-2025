"use script";

// Задача 4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у
// садочку, школярем, студентом, працівником, пенсіонером).

const personAge = parseInt(prompt("Введіть вік людини", 0));

if (!isNaN(personAge)) {
  if (personAge > 0 && personAge <= 6) document.write(`дитина, яка ходить в садочок`);
  else if (personAge >= 7 && personAge <= 16) document.write(`школяр`);
  else if (personAge >= 17 && personAge <= 22) document.write(`студент`);
  else if (personAge >= 23 && personAge <= 65) document.write(`працівник`);
  else if (personAge >= 65 && personAge <= 97) document.write(`пенсіонер`);
  else document.write(`ти щось незрзуміле`);
}
