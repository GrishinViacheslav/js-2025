"use strict";
// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля:	
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей

// Методи:
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран

if (confirm("Почати тестування?")) {
  class MultChecker {
    constructor(number) {
      this.number = number;
      this.correctAnswer = 0;
      this.wrongAnswer = 0;
    }
    getSecondNum() {
      return  1 + Math.floor(Math.random()*9)
    }
    check() {
      const secondNum = this.getSecondNum()
      const userAnswer = parseInt(prompt(`Скільки буде якщо ${this.number} * ${secondNum}`,1))
      if(userAnswer === this.number * secondNum) {
        alert(`Ви відповіли вірно!`)
        this.correctAnswer += 1
      } else {
        alert(`Ви помилились! Результат множення ${this.number} * ${secondNum} = ${this.number * secondNum}!`)
        this.wrongAnswer += 1
      }
    }
    render() {
      document.write(`<div>Результат тестування:</div>
                      <ul>
                        <li>Правильних відповідей: ${this.correctAnswer}</li>
                        <li>Неправильних відповідей: ${this.wrongAnswer}</li>
                      </ul>
                    `);
    }
  }
  const mult = new MultChecker(7)
  console.log(mult)
  console.log(mult.getSecondNum())
  console.log(mult)
  console.log(mult.check())
  console.log(mult.check())
  console.log(mult.check())
  console.log(mult)
  mult.render()
}
