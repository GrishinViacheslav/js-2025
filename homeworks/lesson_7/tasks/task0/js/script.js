"use script";

// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm('Почати тестування?')) {
  function getYearSeason(monthNum) {
    let res
    switch (monthNum) {
      case 1:
      case 2:
      case 12: res = `Зима`
        break;
      case 3:
      case 4:
      case 5: res = `Весна`
        break;
      case 6:
      case 7:
      case 8: res = `Літо`
        break;
      case 9:
      case 10:
      case 11: res = `Осінь`
        break;
      default: 
        throw new Error(`Помилка! Некоректний номер місяця`)
    }
    return res
  } 
  const monthNum = parseInt(prompt(`Введіть номер місяця`,0))
  let season = getYearSeason(monthNum)
  document.write(season)
}