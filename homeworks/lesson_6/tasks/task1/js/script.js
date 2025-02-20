"use script";
// З клавіатури вводяться поступово числа. Знайти два найбільші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.

if (confirm('Почати тестування?')) {
let max1 = -Infinity,
    max2 = -Infinity;
do {
  const num = parseInt(prompt("Введіть число", 0));
  if (num > max1) {
    max2 = max1;
    max1 = num;
  } else if (num > max2) max2 = num;
} while (max1 - max2 > 5);

document.write(`Максимальні числа: ${max1} та ${max2}`);
}