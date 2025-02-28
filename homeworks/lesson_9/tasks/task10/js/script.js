"use script";

// Задача 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

if (confirm('Почати тестування?')) {
  function getRandNumArr(elemsNum, min, max) {
    let arr = [];
    for (let i = 0; i < elemsNum; i++) {
      const randNum = min + Math.floor(Math.random()*(max-min+1));
      arr.push(randNum);
    }
    return arr;
  }
  function getTaxArr(arr, tax) {
    let taxArr = arr.map(el => el*(tax/100))
    return taxArr
  }

  const elemsNum = parseInt(prompt('Введіть кількість елементів масиву', 1));
  if(!isFinite(elemsNum) || elemsNum <= 0) throw new Error(`Incorrect data`)
  let prices = getRandNumArr(elemsNum, 100, 1500);
  document.write(getTaxArr(prices, 20))
}
