"use script";
// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

if (confirm('Почати тестування?')) {
  let getSum = (num1, num2, num3, num4) => num1 + num2 + num3 + num4
  let getProd = (num1, num2, num3, num4) => num1 * num2 * num3 * num4
  let getAvg = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4) / 4
  function getMinOf2Nums(num1, num2) {
    let res = (num1 < num2) ? num1 : num2
    return res
  }
  function getMinNums(num1, num2, num3, num4) {
    let min1 = getMinOf2Nums(num1,num2)
    let min2 = getMinOf2Nums(num3, num4)
    let result = (min1 < min2) ? min1 : min2;
    return result
  }
  
  const num1 = parseInt(prompt(`Введіть число`, 0)) 
  const num2 = parseInt(prompt(`Введіть число`, 0)) 
  const num3 = parseInt(prompt(`Введіть число`, 0)) 
  const num4 = parseInt(prompt(`Введіть число`, 0)) 
  
  const sum = getSum(num1, num2, num3, num4)
  const prod = getProd(num1, num2, num3, num4)
  const avg = getAvg(num1, num2, num3, num4)
  const minNum =  getMinNums(num1, num2, num3, num4);
  
  document.write(`<div>Сума: ${sum.toFixed(2)}</div>`)
  document.write(`<div>Добуток: ${prod.toFixed(2)}</div>`)
  document.write(`<div>Середнє арифметичне: ${avg.toFixed(2)}</div>`)
  document.write(`<div>Мінімальне значення: ${minNum}</div>`)
}
