"use strict";

// Задача 3. Користувач задає рік народження. Визначити кількість років користувача

if (confirm("Почати тестування?")) {
  function getUserBirthYear() {
    const birthYear = parseInt(document.getElementById(`user-birthYear`).value);
    const currentYear = new Date().getFullYear();
    if (isNaN(birthYear) || birthYear <= 0 || birthYear > currentYear) throw new Error(`Помилка! Рік народження має бути додатним числом не більше аніж поточний ${currentYear} рік`);
    const age = currentYear - birthYear;
    document.getElementById(`user-age`).innerText = `Користувачу ${age} років`;
  }
  const calcButton = document.getElementById(`calc`);
  if (calcButton) {
    calcButton.onclick = getUserBirthYear;
  }
}
