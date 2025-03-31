"use strict";

// Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

if (confirm("Почати тестування?")) {
  const obj1 = {
    numbers: [3, 5, 2],
    sum(min = 0, max = 10) {
      return this.numbers.reduce((prevSum, number) => (number >= min && number <= max ? prevSum + number : prevSum), 0);
    },
  };
  const obj2 = {
    numbers: [5, 10, 3, 2, 15],
    prod(min = 1, max = 8) {
      return this.numbers.reduce((prod, number) => (number >= min && number <= max ? prod * number : prod), 1);
    },
  };
  
  const productWithCall = obj2.prod.call(obj1, 3, 7);
  const productWithApply = obj2.prod.apply(obj1, [1, 5]);
  const sumWithCall = obj1.sum.call(obj2, 1, 7);
  const sumWithApply = obj1.sum.apply(obj2, [2, 10]);
  console.log(productWithCall);
  console.log(productWithApply);
  console.log(sumWithCall);
  console.log(sumWithApply);
}
