"use strict";

// Задача 4. Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули)
//  та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку
// (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.

if (confirm("Почати тестування?")) {
  class isNotNumberError extends Error {
    constructor() {
      super();
      this.message = `Помилка! Значення не є числом.`;
      this.name = `isNotNumberError`;
    }
  }
  class isNotCurrectMonthNumberError extends Error {
    constructor() {
      super();
      this.message = `Помилка! Номер місяця не може бути менше 1 і  більше 12.`;
      this.name = `isNotCurrectMonthNumberError`;
    }
  }
  
  class isNotCurrectStudyMonthError extends Error {
    constructor() {
      super();
      this.message = `Помилка! Зараз канікули!`;
      this.name = `isNotCurrectStudyMonthError`;
    }
  }
  
  class isNotCurrectScoreError extends Error {
    constructor() {
      super();
      this.message = `Помилка! Оцінка не може бути менше 1 і більше 100.`;
      this.name = `isNotCurrectScoreError`;
    }
  }
  
  class isNotExistentElementError extends Error {
    constructor() {
      super();
      this.message = `Помилка! Елемент не знайдено.`;
      this.name = `isNotExistentElementError`;
    }
  }
  
  function getAnswer() {
    try {
      const monthNum = document.getElementById(`month-num`);
      const score = document.getElementById(`score-num`);
  
      if(!monthNum || !score) throw new isNotExistentElementError();
      
      const monthNumValue = parseInt(monthNum.value);
      const scoreValue = parseInt(score.value);
  
      if (isNaN(monthNumValue) || isNaN(scoreValue)) throw new isNotNumberError();
      if (monthNumValue < 1 || monthNumValue > 12) throw new isNotCurrectMonthNumberError();
      if (monthNumValue > 5 && monthNumValue < 9) throw new isNotCurrectStudyMonthError();
      if (scoreValue < 0 || scoreValue > 100) throw new isNotCurrectScoreError();
  
      let result;
      if (scoreValue < 60 && monthNumValue !== 5 && monthNumValue !== 12) {
        result = `Оцінку можна виправити!`;
      } else {
        result = `Оцінку не можна виправити!`
      }
  
      const form = document.querySelector(`.form`)
      if(form) {
        let answer = document.querySelector(`.answer`)
        if(answer) answer.innerText = result
        else {
          answer = document.createElement(`div`)
          answer.className = `answer`
          answer.innerText = result
          form.append(answer)
        }
      }
    } catch(err) {
      if (err instanceof isNotNumberError) {
        console.log(err.message + `Введіть число`);
      } else if (err instanceof isNotCurrectMonthNumberError) {
        console.log(err.message + `Введіть ціле число від 1 до 12`);
      } else if (err instanceof isNotCurrectStudyMonthError) {
        console.log(err.message + `Введіть ціле число від 1 до 12, окрім номерів літніх місяців`);
      } else if(err instanceof isNotCurrectScoreError) {
        console.log(err.message + `Введіть ціле число від 1 до 100`);
      }
    }finally {
      console.log(`Дякую за те що скористувались нашим сервісом! Гарного дня!`);
    }
  }
  
  const button = document.getElementById(`button`)
  if(button) button.onclick = getAnswer
}
