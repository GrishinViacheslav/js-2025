"use strict";

// Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).

if (confirm("Почати тестування?")) {
  class Table {
    static currentTableNum = 1;

    constructor(rowNum = 3, colNum = 3, min = 1, max = 100) {
      this.RowNum = rowNum;
      this.ColNum = colNum;
      this.Min = min;
      this.Max = max;
      this.currentTableNum = 1;
    }

    #rowNum;
    #colNum;
    #min;
    #max;

    get RowNum() {
      return this.#rowNum;
    }
    get ColNum() {
      return this.#colNum;
    }
    get Min() {
      return this.#min;
    }
    get Max() {
      return this.#max;
    }

    set RowNum(row) {
      if (row <= 0) throw new Error(`Помилка! Кількість рядків повинна бути додатним числом`);
      this.#rowNum = row;
    }
    set ColNum(col) {
      if (col <= 0) throw new Error(`Помилка! Кількість стовпців повинна бути додатним числом`);
      this.#colNum = col;
    }
    set Min(num) {
      if (isNaN(num)) throw new Error(`Помилка! Введіть число`);
      this.#min = num;
    }
    set Max(num) {
      if (isNaN(num)) throw new Error(`Помилка! Введіть число`);
      this.#max = num;
    }

    getRandNum() {
      if (this.Min > this.Max) {
        [this.Min, this.Max] = [this.Max, this.Min];
      }
      return this.Min + Math.floor(Math.random() * (this.Max - this.Min + 1));
    }

    renderTableHeader() {
      const tableTitle = document.createElement(`h3`);
      tableTitle.className = `table-title`;
      tableTitle.innerText = `Таблиця №${Table.currentTableNum}`;

      this.clickCountSpan = document.createElement(`span`);
      this.clickCountSpan.className = `span-count`;
      this.clickCountSpan.dataset.count = `0`;
      this.clickCountSpan.innerText = `(0)`;

      tableTitle.append(this.clickCountSpan);
      Table.currentTableNum++;

      return tableTitle;
    }

    changeTableBorderColor(e) {
      const currentEl = e.target;
      const tableList = document.querySelectorAll(`.table`);
      if (currentEl.tagName === `TD`) {
        tableList.forEach((table) => {
          table.classList.remove(`active`);
        });
      }
      const currentTable = currentEl.closest(`.table`);
      if (currentTable) {
        currentTable.classList.add(`active`);
      }
    }

    getClickCount(e) {
      const currentEl = e.target;
      if (currentEl.tagName === `TD`) {
        let clickValue = parseInt(this.clickCountSpan.dataset.count);
        clickValue += 1;
        this.clickCountSpan.dataset.count = clickValue;
        this.clickCountSpan.innerText = `(${clickValue})`;
      }
    }

    renderTable() {
      const table = document.createElement(`table`);
      table.className = `table`;
      for (let i = 0; i < this.RowNum; i++) {
        const tableRow = document.createElement(`tr`);

        for (let j = 0; j < this.ColNum; j++) {
          const tableData = document.createElement(`td`);
          tableData.innerText = this.getRandNum();
          tableRow.append(tableData);
        }

        table.append(tableRow);
      }
      return table;
    }

    render(containerSelector) {
      const blockContainer = document.createElement(`div`);
      blockContainer.className = `block-container`;
      const tableHeader = this.renderTableHeader();
      blockContainer.append(tableHeader);

      const table = this.renderTable();
      blockContainer.append(table);

      if (containerSelector) {
        document.querySelector(containerSelector).append(blockContainer);

        table.addEventListener(`click`, this.changeTableBorderColor.bind(this));
        table.addEventListener(`click`, this.getClickCount.bind(this));
        return blockContainer;
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    const table = new Table();
    table.render(`.task4`);
  }
}
