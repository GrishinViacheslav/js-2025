"use strict";

// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – 	від 1 до 100). 			При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

if (confirm("Почати тестування?")) {
  class ListManager {
    constructor(elAmount = 5, minElNum = 1, maxElNum = 10, minNum = 1, maxNum = 100) {
      this.elAmount = elAmount;
      this.minElNum = minElNum;
      this.maxElNum = maxElNum;
      this.minNum = minNum;
      this.maxNum = maxNum;
    }

    getRandomNum(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }

    renderList() {
      const list = document.createElement(`ol`);
      list.className = `list`;
      const listElAmount = this.getRandomNum(this.minElNum, this.maxElNum);

      for (let i = 0; i < listElAmount; i++) {
        const listItem = document.createElement(`li`);
        listItem.className = `list__item`;
        listItem.innerText = this.getRandomNum(this.minNum, this.maxNum);
        list.append(listItem);
      }

      return list;
    }

    coloredListBorder(e) {
      const currentEl = e.target;
      const listArray = document.querySelectorAll(`.list`);
      if (listArray.length !== 0) {
        listArray.forEach((list) => {
          if (list.children.length % 2 !== 0) list.style.border = `2px solid red`;
          else list.style.border = `2px solid green`;
        });
      }
    }

    renderListContainer() {
      const container = document.createElement(`div`);
      container.className = `task3__container`;

      for (let i = 1; i <= this.elAmount; i++) {
        const listBody = document.createElement(`div`);
        listBody.className = `list__body`;

        const listTitle = document.createElement(`h3`);
        listTitle.className = `list__title`;
        listTitle.innerText = `Список №${i}`;
        listBody.append(listTitle);

        const list = this.renderList();
        listBody.append(list);
        container.append(listBody);
      }
      return container;
    }

    render(selector) {
      const container = this.renderListContainer();
      const button = document.createElement(`button`);
      button.innerText = `Action`;

      if (selector) {
        document.querySelector(selector).append(container);
        document.querySelector(selector).append(button);

        button.addEventListener(`click`, this.coloredListBorder.bind(this));
      } else {
        throw new Error(`Елемент з селектором ${selector} не знайдено`);
      }
    }
  }

  const task3 = new ListManager();
  task3.render(`.task3`);
}
