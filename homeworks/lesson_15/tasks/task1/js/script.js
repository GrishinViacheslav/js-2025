"use strict";

// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Тир
// Поля(властивості)	Масив, у якому зберігається поле з зайцями
// Методи (дії)	Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля

if (confirm("Почати тестування?")) {
  const shootingGallery = {
    field: [1, 0, 0, 1, 0],
    shoot() {
      let res = "Стріляй ще! Зайці ще залишились";
      if (!this.field.includes(1)) throw new Error(`Немає зайців`);
      const shootTarget = parseInt(prompt(`Введіть номер ячейки від 1 до ${this.field.length}:`, 1));
      if (this.field[shootTarget - 1] === 1) {
        alert("Ви влучили!");
        this.field[shootTarget - 1] = 0;
        if (!this.field.includes(1)) res = `Всі цілі знищено`;
      } else {
        alert("Ви схибили!");
      }
      return `<div>${res}</div>`;
    },
    fieldShow() {
      document.write(`<div>Поточне поле: ${this.field}</div>`);
    },
  };

  document.write(shootingGallery.shoot());
  shootingGallery.fieldShow();
  document.write(shootingGallery.shoot());
  shootingGallery.fieldShow();
}
