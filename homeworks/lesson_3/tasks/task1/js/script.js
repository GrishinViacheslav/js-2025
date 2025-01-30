"use script";
// Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або
// вивести, що кількість однакова.

const firstChildName = prompt("Введіть ім'я 1-ї дитини", "");
const firstChildCandyNumber = parseInt(prompt("Введіть кількість цукерок 1-ї дитини", 0));
const secondChildName = prompt("Введіть ім'я 2-ї дитини", "");
const secondChildCandyNumber = parseInt(prompt("Введіть кількість цукерок 1-ї дитини", 0));

if (firstChildName && secondChildName && !isNaN(firstChildCandyNumber) && !isNaN(secondChildCandyNumber)) {
  if (firstChildCandyNumber === secondChildCandyNumber) {
    document.write(`Кількість цукерок однакова`);
  } else if (firstChildCandyNumber > secondChildCandyNumber) {
    document.write(`${firstChildName}`);
  } else {
    document.write(`${secondChildName}`);
  }
} else {
  document.write(`Помилка! Введіть ім'я двох дітей та кількість цукерок у них`);
}
