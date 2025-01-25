"use script";

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
const birthdayYear = parseInt(prompt("Введіть ваш рік народження", 0));
const currentYear = 2025;

const currentAge = currentYear - birthdayYear;
document.write(`На даний момент Вам ${currentAge} років`);
