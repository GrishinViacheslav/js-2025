"use script";

// Задача 4. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. 
// Маючи К снарядів користувач намагається потопити корабель.

if (confirm('Почати тестування?')) {
  const rowsNumber = parseInt(prompt('Введіть кількість рядків ігрового поля', 1));
  const columnsNumber = parseInt(prompt('Введіть кількість стовпців ігрового поля', 1));

  if (isFinite(rowsNumber) && isFinite(columnsNumber)) {
    for (let row = 1; row <= rowsNumber; row++) {
      for (let column = 1; column <= columnsNumber; column++) {
      }
    }

    const randomShipPositionX = 1 + (Math.floor(Math.random()*columnsNumber));
    const randomShipPositionY = 1 + (Math.floor(Math.random()*rowsNumber));
    const userMissilesNumber = parseInt(prompt('Введіть кількість снарядів', 1));
    let res;
    
    if (isFinite(userMissilesNumber)) {
      for (let i = 0; i < userMissilesNumber; i++) {
        const userShotCoordinateX = parseInt(prompt('Введіть номер стовпеця', 1));
        const userShotCoordinateY = parseInt(prompt('Введіть номер рядка', 1));
        
        if (isFinite(userShotCoordinateX) && isFinite(userShotCoordinateY)) {
          if(userShotCoordinateX === randomShipPositionX && userShotCoordinateY === randomShipPositionY) {
            res = `Вітаю! Корабель затоплено`;
            break;
          } else {
            res = `Ви схибили! Спробуйте ще раз`;
            continue;
          }
        }
      }
      document.write(res);
    } else {
      document.write(`Помилка! Будь ласка введыть ціле число більше 0`);
    }
  }else {
    document.write(`Помилка! Будь ласка введіть ціле число більше 0`);
  }
} 
