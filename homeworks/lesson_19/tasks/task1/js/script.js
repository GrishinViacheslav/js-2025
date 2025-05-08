"use strict";

// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

if (confirm("Почати тестування?")) {
  class Input {
    constructor(elNum = 10) {
      this.ElAmount = elNum;
    }
    #elAmount;

    get ElAmount() {
      return this.#elAmount;
    }
    set ElAmount(amount) {
      if (amount <= 0) throw new Error(`Помилка! Кількість елементів повинно бути додатним числом`);
      this.#elAmount = amount;
    }

    coloredNextItems(event, color = `red`) {
      let currentEl = event.target;
      if (currentEl.classList.contains(`block-item`)) {
        while (currentEl.nextElementSibling) {
          currentEl = currentEl.nextElementSibling;
          currentEl.style.color = color;
        }
      }
    }

    renderItem() {
      const item = document.createElement(`div`);
      item.className = `block-item`;
      item.innerText = `Hello!`;
      return item;
    }

    renderBlock() {
      const blockDiv = document.createElement(`div`);
      blockDiv.className = `block`;
      for (let i = 0; i < this.ElAmount; i++) {
        const item = this.renderItem();
        blockDiv.append(item);
      }
      blockDiv.addEventListener(`click`, this.coloredNextItems.bind(this));
      return blockDiv;
    }

    render(selector) {
      const sectionDiv = this.renderBlock();
      if (selector) {
        document.querySelector(selector).append(sectionDiv);
      } else {
        throw new Error(`<Елемент з селектором> "${selector}" не знайдено`);
      }
    }
  }

  const task1 = new Input();
  task1.render(`.task1__container`);
}
