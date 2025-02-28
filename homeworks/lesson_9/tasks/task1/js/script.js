"use script";

// Задача 1. Користувач вводить кількість елементів. Створити масив, 
// що складається з вказаної кількості елементів заповнених нулями.

if (confirm('Почати тестування?')) {
  function createFilledArr(arrElem, fillValue=0) {
    const arr = new Array(arrElem);
    arr.fill(fillValue)
    return arr;
  }
  const num = parseInt(prompt("Введіть кількість елементів :", 0));
  document.write(createFilledArr(num));
}
