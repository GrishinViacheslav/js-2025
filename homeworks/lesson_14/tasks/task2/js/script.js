"use strict";
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

if (confirm('Почати тестування?')) {
  const date = {
    day: 5,
    month: 10,
    year: 1995,
  };
  
  function getNewYear({ month, year }, addMonthNum) {
    return year + Math.floor((month + addMonthNum)/12)
  }
  
  const newYear = getNewYear(date, 26);
  document.write(newYear);
}
