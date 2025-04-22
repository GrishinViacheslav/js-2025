"use strict";

// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)

if (confirm("Почати тестування?")) {
  function convert() {
    const grnToEuroRate = 45;
    const grnToDollarRate = 42;
    const grn = parseFloat(document.getElementById("grn-amount").value);
    if (grn < 0 || isNaN(grn)) throw new Error(`Помилка! Сума має бути додатним числом`);
    const euro = grn / grnToEuroRate;
    const dollar = grn / grnToDollarRate;
    document.getElementById(`euro-amount`).value = euro.toFixed(2);
    document.getElementById(`usd-amount`).value = dollar.toFixed(2);
  }

  const convertBtn = document.getElementById(`convert-btn`);
  if (convertBtn) {
    convertBtn.onclick = convert;
  }
}
