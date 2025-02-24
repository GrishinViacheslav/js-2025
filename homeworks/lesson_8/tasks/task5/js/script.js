"use script";

// Задача 5. Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів.
// Комп’ютер довільно розміщує ці одкораблі у масиві по один у клітинці (якщо у клітинці 0, то клпуста, якщо 1 – то це означає, що там є корабель.)
// Користувач вводить номер клітинкистріляє. Гра продовжується до тих пір, поки не будуть потоплекораблі.

if (confirm("Почати тестування?")) {
  function createField(fieldCells) {
    let arr = [];
    for (let i = 0; i < fieldCells; i++) {
      arr.push(0);
    }
    return arr;
  }

  function deployShips(arr, shipsNum) {
    do {
      const randPosition = Math.floor(Math.random() * arr.length);
      if (arr[randPosition] === 0) {
        arr[randPosition] = 1;
        shipsNum--;
      }
    } while (shipsNum);
    return arr;
  }

  function playGame(field, shipsNum) {
    do {
      let result = "";
      const userShot = parseInt(prompt(`Виберіть комірку для пострілу від 0 до ${field.length - 1}`, 0));
      if (field[userShot] === 1) {
        shipsNum--;
        result = alert(`Точно в ціль! Залишилось ${shipsNum} кораблів`);
      }
    } while (shipsNum);
    return (result = `Вітаємо! Ви знищили всі кораблі!`);
  }

  const elemArr = parseInt(prompt(`Виберіть кількість елементів масива`, 0));
  const shipsNum = parseInt(prompt(`Виберіть кількість одиночних кораблів`, 0));
  const fieldBattleShip = createField(elemArr);
  const newArr = deployShips(fieldBattleShip, shipsNum);

  document.write(playGame(newArr, shipsNum));
}
