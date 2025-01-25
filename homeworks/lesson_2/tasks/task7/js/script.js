"use script";

// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
const minMonthNumber = 1;
const maxMonthNumber = 12;
const minMonthDay = 0;
const maxMonthDay = 6;

const randomMonthNumber = minMonthNumber + Math.floor(Math.random() * (maxMonthNumber - minMonthNumber + 1));
const randomDayNumber = minMonthDay + Math.floor(Math.random() * (maxMonthDay - minMonthDay + 1));

const randomSum = randomMonthNumber + randomDayNumber;
document.write(`Cумa випадкового номера місяця та випадкового номера дня складає ${randomSum}`);
