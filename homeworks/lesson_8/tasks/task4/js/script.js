"use script";

// Задача 4. Дано одновимірний масив, у якому зберігається певна виграшна сума
// (елементи заповнюються випадковимзначеннями від -500 до 500).
// Надаючи користувачу можливість виномери елементів (поки він не відмовиться). Знаходити сумарний виграш.

if (confirm("Почати тестування?")) {
  function getRandNumArray(arrElems, minNum = -500, maxNum = 500) {
    let arr = [];
    for (let i = 0; i < arrElems; i++) {
      const randNum = minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
      arr.push(randNum);
    }
    return arr;
  }

  function getUserPrize(targets) {
    let totalPrize = 0;
    let userTry;
    do {
      userTry = parseInt(prompt(`Виберіть число від 0 до ${targets.length - 1}`));
      if (isNaN(userTry) || userTry < 0 || userTry >= targets.length) break;
      totalPrize += targets[userTry];
    } while (userTry || userTry === 0);
    return totalPrize;
  }

  const elemArr = parseInt(prompt(`Виберіть кількість елементів масива`, 0));
  const minValue = parseInt(prompt(`Виберіть мінімальне значення`, 0));
  const maxValue = parseInt(prompt(`Виберіть максимальне значення`, 0));

  const randArr = getRandNumArray(elemArr, minValue, maxValue);
  const playerScore = getUserPrize(randArr);

  document.write(`Загальний виграш склав: ${playerScore}`);
}
