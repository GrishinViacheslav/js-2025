"use strict";

// Задача 1. Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень 	деякого числа (статичні методи)

if (confirm("Почати тестування?")) {
  class Operations {
    static getPositiveNumCount(...numbersList) {
      if (numbersList.length === 0) throw new Error(`Помилка! Масив порожній`);
      return numbersList.reduce((prevNum, currentNum) => (currentNum > 0 ? prevNum + 1 : prevNum), 0);
    }
    static getNegativeNumCount(...numbersList) {
      if (numbersList.length === 0) throw new Error(`Помилка! Масив порожній`);
      return numbersList.reduce((prevNum, currentNum) => (currentNum < 0 ? prevNum + 1 : prevNum), 0);
    }
    static getSomeNumCount(number = 1, ...numbersList) {
      if (numbersList.length === 0) throw new Error(`Помилка! Масив порожній`);
      return numbersList.reduce((prevNum, currentNum) => (currentNum === number ? prevNum + 1 : prevNum), 0);
    }
  }

  try {
    document.write(`<div>Кількість додатних чисел: ${Operations.getPositiveNumCount(15, 5, -20, 25, 30)}</div>`);
    document.write(`<div>Кількість від'ємних чисел: ${Operations.getNegativeNumCount(15, 5, -20, 25, 30)}</div>`);
    document.write(`<div>Кількість входження числа: ${Operations.getSomeNumCount(5, 15, 5, -20, 25, 30)}</div>`);
  } catch (error) {
    document.write(error.message);
  }
}
