"use script";
// Задача 6. З клавіатури вводиться номер дня ти;ня. Вивести на екран назву дня.

const dayNumber = parseInt(prompt("Введіть номер дня тижня в діапазоні від 1 до 7", 0));

if (!isNaN(dayNumber)) {
  switch (dayNumber) {
    case 1:
      document.write("Понеділок");
      break;
    case 2:
      document.write("Вівторок");
      break;
    case 3:
      document.write("Середа");
      break;
    case 4:
      document.write("Четверг");
      break;
    case 5:
      document.write("П'ятниця");
      break;
    case 6:
      document.write("Субота");
      break;
    case 7:
      document.write("Неділя");
      break;

    default:
      document.write(`Помилка! Введіть номер дня тижня в діапазоні від 1 до 7`);
      break;
  }
}
