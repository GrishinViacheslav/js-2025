"use strict";

// Задача 1. Розробити калькулятор

if (confirm("Почати тестування?")) {
  function getSum() {
    const num1 = parseFloat(document.getElementById(`firstNum`).value);
    const num2 = parseFloat(document.getElementById(`secondNum`).value);
    if (isNaN(num1) || isNaN(num2)) throw new Error(`Помилка! Ви маєте ввести два числа`);
    const res = num1 + num2;
    document.getElementById(`result`).value = res;
  }

  function getSubtr() {
    const num1 = parseFloat(document.getElementById(`firstNum`).value);
    const num2 = parseFloat(document.getElementById(`secondNum`).value);
    if (isNaN(num1) || isNaN(num2)) throw new Error(`Помилка! Ви маєте ввести два числа`);
    const res = num1 - num2;
    document.getElementById(`result`).value = res;
  }
  function getProd() {
    const num1 = parseFloat(document.getElementById(`firstNum`).value);
    const num2 = parseFloat(document.getElementById(`secondNum`).value);
    if (isNaN(num1) || isNaN(num2)) throw new Error(`Помилка! Ви маєте ввести два числа`);
    const res = num1 * num2;
    document.getElementById(`result`).value = res;
  }
  function getDivide() {
    const num1 = parseFloat(document.getElementById(`firstNum`).value);
    const num2 = parseFloat(document.getElementById(`secondNum`).value);
    if (isNaN(num1) || isNaN(num2) || num2 === 0) throw new Error(`Помилка! Ви маєте ввести два числа. Друге число не може дорівнювати 0`);
    const res = num1 / num2;
    document.getElementById(`result`).value = res;
  }

  const sumButton = document.getElementById(`sum-btn`);
  const subtrButton = document.getElementById(`subtr-btn`);
  const prodButton = document.getElementById(`prod-btn`);
  const divideButton = document.getElementById(`divide-btn`);

  if (sumButton) {
    sumButton.onclick = getSum;
  }
  if (subtrButton) {
    subtrButton.onclick = getSubtr;
  }
  if (prodButton) {
    prodButton.onclick = getProd;
  }
  if (divideButton) {
    divideButton.onclick = getDivide;
  }
}
