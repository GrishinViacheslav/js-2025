"use script";
// Задача 3. Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. 
// Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

if (confirm('Почати тестування?')) {
  // генеруємо поле заповнене 0, розміри поля rowsNum х colsNum
function getEmptyField(rowsNum, colsNum) {
  const arr = []
  for(let rowIndex = 0; rowIndex < rowsNum; rowIndex++) {
    arr.push(new Array(colsNum).fill(0))
  }
  return arr
}

// рандомно розміщуємо shipNum кораблів 
function getPlayField(field, shipNum, rowsNum, colsNum) {
  let plaсedShip = 0
  while(plaсedShip < shipNum) {
    const randRowPosition = Math.floor(Math.random()*rowsNum)
    const randColPosition = Math.floor(Math.random()*colsNum)
    if(field[randRowPosition][randColPosition] === 0) {
      field[randRowPosition][randColPosition] = 1
      plaсedShip++
    }
  }
  return field
}

function playGame(shipNum=5, rowsNum=6, colsNum=6) {
  const battleField = getPlayField(getEmptyField(rowsNum, colsNum),shipNum, rowsNum, colsNum)
  let shellsNumber = parseInt(prompt(`Введіть кількість снарядів`,1))
  let crashedShips = 0;

  while(shellsNumber && crashedShips < shipNum) {
    const userRowShot = parseInt(prompt(`Введіть номер рядка від 1 до 6`)) - 1
    const userColShot = parseInt(prompt(`Введіть номер стовпця від 1 до 6`)) - 1
    shellsNumber--
    if(battleField[userRowShot][userColShot] === 1 ) {
      battleField[userRowShot][userColShot] = 0
      crashedShips++
      alert(`Ви влучили! Залишилось ${shipNum-crashedShips} кораблів, а у вас ${shellsNumber} снарядів!`)
    } else {
      alert(`Ви схибили! Залишилось ${shipNum-crashedShips} кораблів, а у вас ${shellsNumber} снарядів!`)
    }
    
  }
  return crashedShips === shipNum ? `Вітаю! Ви знищили всі кораблі` : `Ви програли! У вас закінчились снаряди!`;
}

document.write(playGame())
}
