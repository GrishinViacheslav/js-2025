"use script";

// Задача 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина 
// заповнена 1-цями, а друга заповнена 7-ками.

if (confirm('Почати тестування?')) {
  function createFilledArr(arrElem) {
    const arr = new Array(arrElem);
    const arrHalf = Math.floor(arr.length / 2);
    arr.fill(1, 0, arrHalf).fill(7, arrHalf);
    return arr;
  }
  const num = parseInt(prompt("Введіть кількість елементів :", 0));
  document.write(createFilledArr(num));
}
