"use strict";

// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

if (confirm("Почати тестування?")) {
  function* test(evenNumbersAmount = 1, min = 1, max = 30) {
    while (evenNumbersAmount) {
      const randNum = min + Math.floor(Math.random() * (max - min + 1));
      if (randNum % 2 === 0) {
        yield `${randNum}<br>`;
        evenNumbersAmount--;
      }
    }
  }

  for (const num of test(5, 1, 100)) {
    document.write(num);
  }
}
