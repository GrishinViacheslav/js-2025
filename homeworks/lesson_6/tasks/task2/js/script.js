"use script";

// Задача 2. Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку. З клавіатури вводиться позиція пострілу. Гра продовжується поки  у користувача не закінчаться патрони (кількість вводиться з клавіатури) або не буде влучання.

if (confirm('Почати тестування?')) {
let rabbitCellPosition = 1 + Math.floor(Math.random() * 10);
let cartridgesNum = parseInt(prompt("Введіть кількість патронів", 0));
let hit = false;

do {
  let userCelltarget = parseInt(prompt("Виберіть клітину від 1 до 10", 0));
  if (userCelltarget === rabbitCellPosition) {
    hit = true;
    break;
  } else {
    let rabbitShift = -3 + Math.floor(Math.random() * (3 - -3 + 1));
    rabbitCellPosition += rabbitShift;
    if (rabbitCellPosition > 10) {
      rabbitCellPosition -= 10;
    } else if (rabbitCellPosition < 0) {
      rabbitCellPosition += 10;
    }
    if (userCelltarget === rabbitCellPosition) {
      hit = true;
    }
    cartridgesNum--;
  }
} while (cartridgesNum && !hit);

if (hit) alert(`Ви влучили`);
else alert(`Заяць виявився спритніший за тебе`);
}
