"use script";

// Задача 3.  Користувач загадує натуральне число від 1 до N. Шляхом задавання мінімальної кількості запитань знайти вказане число (застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).

if (confirm('Почати тестування?')) {
  const endNum = parseInt(prompt("Введіть натуральне число більше 1", 1));
  let startRange = 1;
  let endRange = endNum;
  let guessNum;

  do {
    let avg = Math.floor((startRange + endRange) / 2);
    const ask = confirm(`Чи більше загадане число за ${avg}?`);
    if (ask) {
      startRange = avg;
      guessNum = Math.floor((avg + endRange) / 2);
    } else {
      endRange = avg;
      guessNum = Math.floor((startRange + avg) / 2);
    }
  } while (!confirm(`Загадане число ${guessNum}?`));
}
