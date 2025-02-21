"use script";

// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

if (confirm('Почати тестування?')) {
  function createTable(rows, columns) {
    document.write(`<table>`) 
    for(let i = 0; i < rows; i++) {
      document.write(`<tr>`)
      for(let j = 0; j < columns; j++) {
        document.write(`<td>Table data</td>`)
      }
      document.write(`</tr>`)
    }
    document.write(`</table>`)
  }

  const rowsNum = parseInt(prompt(`Введіть кількість бажану кількість рядків таблиці:`, 0))
  const columnsNum = parseInt(prompt(`Введіть кількість бажану кількість колонок таблиці:`, 0))

  let table = createTable(rowsNum, columnsNum)
  document.write(table)
}
