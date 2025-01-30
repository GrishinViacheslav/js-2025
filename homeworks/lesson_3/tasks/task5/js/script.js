"use script";
// Задача 5. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

let driverCategory = prompt("Введіть назву категорії водія: A, B або C", "");
console.log(driverCategory);

if (driverCategory) {
  driverCategory = driverCategory.toUpperCase();
  switch (driverCategory) {
    case "A":
      document.write(`мотоцикл`);
      break;
    case "B":
      document.write(`легковий автомобіль`);
      break;
    case "C":
      document.write(`вантажний автомобіль`);
      break;
    default:
      document.write(`керуй  самокатом`);
      break;
  }
}
