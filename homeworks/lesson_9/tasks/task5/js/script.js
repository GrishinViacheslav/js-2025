"use script";

// Задача 5.  Дано масив елементів. Знайти добуток додатних елементів

if (confirm('Почати тестування?')) {
  function getArrRandNum(elems, startRange, endRange) {
    let arr = [];
    for (let i = 0; i < elems; i++) {
      const randNum = startRange + Math.floor(Math.random() * (endRange - startRange + 1));
      arr.push(randNum);
    }
    return arr;
  }

  function getProdOfPositiveNum(arr) {
    let prod = 1;
    for (const item of arr) {
      if (item > 0) prod *= item;
    }
    return prod;
  }

  const num = parseInt(prompt("Введіть кількість елементів :", 1));
  const startRange = parseInt(prompt("Введіть введіть початок діапазону :", 0));
  const endRange = parseInt(prompt("Введіть введіть кінець діапазону :", 0));
  const arrRandNums = getArrRandNum(num, startRange, endRange);
  document.write((`Добуток всіх додатних елементів: ${getProdOfPositiveNum(arrRandNums)}`));
}
