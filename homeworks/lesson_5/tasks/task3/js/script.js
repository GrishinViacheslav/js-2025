"use script";
// Задача 3. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 

if (confirm('Почати тестування?')) {
  const firstNum = parseFloat(prompt('Введіть перше число', 0));
  const secondNum = parseFloat(prompt('Введіть друге число', 0));
  let startRangeNum, endRangeNum;
  let sum = 0;
  
  if(firstNum < secondNum) {
    startRangeNum = firstNum;
    endRangeNum = secondNum;
  } else {
    startRangeNum = secondNum;
    endRangeNum = firstNum;
  }

  for (let i = startRangeNum; i <= endRangeNum; i++) {
    if(i % 2 !== 0) {
      sum += i;
    } else {
      continue;
    }
  }
  document.write(`Знайти суму всіх непарних чисел в диапазоні від ${startRangeNum} до ${endRangeNum} дорівнює ${sum}`)
}