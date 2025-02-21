"use script";

// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm('Почати тестування?')) {
  let isWorkDay = function(dayNum) {
    return dayNum > 0 && dayNum <= 5 
  }
  const dayIndex = parseInt(prompt(`Введіть номер дня тижня`,0))
  if(isWorkDay(dayIndex)) document.write(`Це робочий день`)
  else document.write(`Не є робочим днем`)
}
