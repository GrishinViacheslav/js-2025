"use script";

// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: 
//           кількість парних, кількість додатних, кількість більших за 100.

if (confirm('Почати тестування?')) {
function getEvenNums(num1, num2, num3) {
  let evenNum = 0;
  if(num1%2 === 0) evenNum++
  if(num2%2 === 0) evenNum++
  if(num3%2 === 0) evenNum++
  return evenNum
}
function getPositiveNums(num1, num2, num3) {
  let positiveNum = 0;
  if(num1 > 0) positiveNum++
  if(num2 > 0) positiveNum++
  if(num3 > 0) positiveNum++
  return positiveNum
}
function getNumsBigger100(num1, num2, num3) {
  let num = 0;
  if(num1 > 100) num++
  if(num2 > 100) num++
  if(num3 > 100) num++
  return num
}

function getCalculated(num1, num2, num3) {
  const evenNum = getEvenNums(num1, num2, num3)
  const positiveNum = getPositiveNums(num1, num2, num3)
  const num = getNumsBigger100(num1, num2, num3)
  return `кількість парних чисел: ${evenNum};<br>
          кількість додатних чисел: ${positiveNum};<br>
          кількість чисел більших за 100: ${num};`
}

const num1 = parseInt(prompt(`Введіть число`, 0)) 
const num2 = parseInt(prompt(`Введіть число`, 0)) 
const num3 = parseInt(prompt(`Введіть число`, 0)) 

let result = getCalculated(num1,num2,num3)
document.write(result)
}
