"use strict";

// Задача 5. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

if (confirm("Почати тестування?")) {
  const randNum = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

  function getTable(rowsNum = 3, colsNum = 4, min = 1, max = 100) {
    const table = document.createElement(`table`);
    for (let i = 0; i < rowsNum; i++) {
      const row = document.createElement(`tr`);
      for (let j = 0; j < colsNum; j++) {
        const tableData = document.createElement(`td`);
        tableData.innerText = `${randNum(min, max)}`;
        row.append(tableData);
      }
      table.append(row);
    }
    return table;
  }

  const tableBlock = document.getElementById(`random-num-table`);
  if (tableBlock) {
    window.onload = () => {
      const newTable = getTable();
      if (newTable) tableBlock.append(newTable);
      else throw new Error(`Помилка! Немає таблиці`);
    };
  } else throw new Error(`Помилка! Намає елемента з id = 'random-num-table'`);
}
