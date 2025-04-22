"use strict";

// Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення

if (confirm("Почати тестування?")) {
  function getScoresTable() {
    if (document.querySelector(".table")) document.querySelector(".table").remove();
    const table = document.createElement(`table`);
    table.className = "table";
    const tableRow = document.createElement(`tr`);
    const userTypedScoreAmount = parseInt(document.getElementById(`marksAmount`).value);
    if (userTypedScoreAmount <= 0 || !userTypedScoreAmount) throw new Error(`Помилка! Ви маєте ввести додатне число!`);
    for (let i = 0; i < userTypedScoreAmount; i++) {
      const tableData = document.createElement(`td`);
      const userMark = document.createElement(`input`);
      userMark.classList.add(`mark-value`);
      tableData.append(userMark);
      tableRow.append(tableData);
    }
    table.append(tableRow);
    const blockMarks = document.querySelector(`.marks__block`);
    if (!blockMarks) throw new Error(`Помилка! Елемента з класом "marks__block" немає`);
    blockMarks.append(table);
  }

  function getAvgMark() {
    const oldRes = document.querySelector(`.avg-res`);
    if (oldRes) oldRes.remove();
    const marksList = document.querySelectorAll(`.mark-value`);
    if (marksList.length === 0) throw new Error(`Помилка! Елемента з класом "marksList" немає`);
    let sum = 0;
    for (let mark of marksList) {
      const markValue = parseInt(mark.value);
      if (isNaN(markValue) || markValue < 1 || markValue > 12) throw new Error(`Помилка! Оцінка має бути у межах від 1 до 12`);
      sum += markValue;
    }
    const result = sum / marksList.length;
    const resTitle = document.createElement(`div`);
    resTitle.className = "avg-res";
    resTitle.innerText = `Середня оцінка - ${result.toFixed(2)}`;

    const blockMarks = document.querySelector(`.marks__block`);
    if (!blockMarks) throw new Error(`Помилка! Елемента з класом "marks__block" немає`);
    blockMarks.append(resTitle);
  }

  const scoreTableBtn = document.getElementById(`marks-table`);
  if (scoreTableBtn) scoreTableBtn.onclick = getScoresTable;
  else throw new Error(`Помилка! Елемента з класом "marks-table" немає`);

  const avgMarkBtn = document.getElementById(`avg-marks`);
  if (avgMarkBtn) avgMarkBtn.onclick = getAvgMark;
  else throw new Error(`Помилка! Елемента з класом "avg-marks" немає`);
}
