"use script";

// Задача 7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

const monthNumber = parseInt(prompt("Введіть номер місяця в діапазоні від 1 до 12", 0));

if (!isNaN(monthNumber)) {
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      document.write(`${monthNumber} - це місяць зими`);
      break;
    case 3:
    case 4:
    case 5:
      document.write(`${monthNumber} - це місяць весни`);
      break;
    case 6:
    case 7:
    case 8:
      document.write(`${monthNumber} - це місяць літа`);
      break;
    case 9:
    case 10:
    case 11:
      document.write(`${monthNumber} - це місяць осені`);
      break;

    default:
      document.write(`Введіть номер місяця в діапазоні від 1 до 12`);
      break;
  }
}
