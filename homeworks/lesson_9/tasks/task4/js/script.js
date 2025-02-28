"use script";

// Задача 4. Дано масив елементів. Вивести на екран елементи, що більші за 100

if (confirm('Почати тестування?')) {
  function getArrRandNum(elems, startRange, endRange) {
    let arr = [];
    for (let i = 0; i < elems; i++) {
      const randNum = startRange + Math.floor(Math.random() * (endRange - startRange + 1));
      arr.push(randNum);
    }
    return arr;
  }

  function showArrElemsBigger100(arr, num=100) {
    for (const item of arr) {
      if (item > num) {
        document.write(`${item}, `);
      }
    }
  }
  const arrRandNums = getArrRandNum(15, -50, 250);
  document.write(showArrElemsBigger100(arrRandNums));
}
