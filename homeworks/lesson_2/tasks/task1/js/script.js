"use script";
// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
const num1 = parseFloat(prompt("Введіть перше число", 0));
const num2 = parseFloat(prompt("Введіть друге число", 0));

let sum = num1 + num2;
let mult = num1 * num2;
let div = num1 / num2;

document.write(`<div>Сума двох дійсних чисел ${num1} та ${num2} дорівнює ${sum}</div>
								<div>Добуток двох дійсних чисел ${num1} та ${num2} дорівнює ${mult}</div>
								<div>Результат частки числа ${num1} на число ${num2} дорівнює ${div}<div>`);
