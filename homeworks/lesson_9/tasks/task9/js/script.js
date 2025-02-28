"use script";

// Задача 9. Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm('Почати тестування?')) {
  function createNamesArr(namesNum) {
    let arr = [];
    for (let i = 0; i < namesNum; i++) {
      const name = prompt(`Введіть ім'я`,'');
      arr.push(name);
    }
    return arr;
  }
  
  const elemArrNum = parseInt(prompt('Введіть кількість елементів масиву', 1));
  let names = createNamesArr(elemArrNum)
  let arrByFirstNameLetter = names.map(el=>el[0])
  if(elemArrNum <= 0) throw new Error(`Incorrect data`)
  document.write(arrByFirstNameLetter)
}
