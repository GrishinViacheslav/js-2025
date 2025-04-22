"use strict";

// Задача 7. Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

if (confirm("Почати тестування?")) {
  function getTotalCost() {
    const transportList = document.querySelectorAll(`.transport__choice`);
    const inpList = document.querySelectorAll(`input`);
    let totalTransportCost = 0;
    for (let tr of transportList) {
      if (tr.value) {
        const transportPriceItem = parseFloat(tr.value);
        if (!isNaN(transportPriceItem)) {
          totalTransportCost += transportPriceItem;
        } else throw new Error(`Помилка! Введіть числові значення`);
      }
    }
    let inputsSum = 0;
    for (let inp of inpList) {
      if (inp.checked) {
        const inputValue = parseFloat(inp.value);
        inputsSum += inputValue;
      }
    }

    const result = inputsSum + totalTransportCost;
    document.querySelector(`.cost__text`).innerText = `Загальна вартість - ${result.toFixed(2)}`;
  }

  try {
    const totalCost = document.querySelector(`.cost__button`);
    if (totalCost) totalCost.onclick = getTotalCost;
  } catch (error) {
    document.querySelector(`.cost__text`).innerText = error.message;
  }
}
