"use script";
// Задача 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів 
// заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

if (confirm('Почати тестування?')) {
  function createArr(arrElem) {
    const arr = new Array(arrElem).fill(1, 0, 5).fill(7, 5);
    return arr;
  }
  const num = parseInt(prompt("Введіть кількість елементів :", 0));
  document.write(createArr(num));
}
