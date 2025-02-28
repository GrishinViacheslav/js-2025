"use script";

// Задача 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm('Почати тестування?')) {
  function getArr(elemsNum) {
    let arr = [];
    for (let i = 0; i < elemsNum; i++) {
      const elem = parseInt(prompt('Введіть елемент масиву',0));
      arr.push(elem);
    }
    return arr;
  }

  const elemArrNum = parseInt(prompt('Введіть кількість елементів масиву', 1));
  if(elemArrNum <= 0) throw new Error(`Incorrect data`)
  const numbers = getArr(elemArrNum)
  numbers.forEach((el,index,arr) => {if (el > arr[0]) arr[index] *=2})
  document.write(numbers)
}
