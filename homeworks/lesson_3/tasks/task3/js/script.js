"use script";
// Задача 3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби..

const minNum = 1;
const maxNum = 5;
const randomNum = minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
const firstTry = parseInt(prompt("Спроба 1. Вгадайте число від 1 до 5", 0));
const secondTry = parseInt(prompt("Спроба 1. Вгадайте число від 1 до 5"));

if (!isNaN(firstTry) && firstTry >= 1 && firstTry <= 5 && !isNaN(secondTry) && secondTry >= 1 && secondTry <= 5) {
  let answer = firstTry === randomNum || secondTry === randomNum ? `Ви вгадали число` : `Ви не вгадали число`;
  document.write(`<h3>${answer}</h3>`);
} else {
  document.write(`Помилка! Ви ввели число поза діапазону від 1 до 5`);
}

// if (!isNaN(firstTry) && firstTry >= 1 && firstTry <= 5) {
//   if (firstTry !== randomNum) {
//     const secondTry = parseInt(prompt("Спроба 2. Вгадайте число від 1 до 5", 0));
//     if (!isNaN(secondTry) && secondTry >= 1 && secondTry <= 5) {
//       if (secondTry !== randomNum) {
//         document.write(`Ви не вгадали число`);
//       }
//     } else {
//       document.write(`Помилка! Ви ввели число поза діапазону від 1 до 5`);
//     }
//   } else {
//     document.write(`Ви вгадали число`);
//   }
// } else {
//   document.write(`Помилка! Ви ввели число поза діапазону від 1 до 5`);
// }
