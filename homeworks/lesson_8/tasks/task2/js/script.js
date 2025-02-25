"use script";

// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня.
// Вивести на екран:
// ● номери днів, протягом яких кількість відвідувачів була	меншою за 20;
// ● номери днів, коли кількість відвідувачів була максмальною;
// ● номери днів, коли кількість відвідувачів була мінімальною;
// ● загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

if (confirm("Почати тестування?")) {
  const visitors = [20, 10, 15, 43, 117, 85, 100];

  // ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
  function getVisitorsLess20NumDay(arr) {
    let res = ``;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 20) {
        res += `${i + 1}; `;
      }
    }
    return res;
  }
  document.write(`<div>Менше за 20 відвідувачів в магазині було в номера днів: ${getVisitorsLess20NumDay(visitors)}.</div>`);

  // ●	номери днів, коли кількість відвідувачів була максмальною;
  function getMaxVisitorsNumDay(arr) {
    let max = -Infinity;
    let res = ``;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        res += `${i + 1}`;
      }
    }
    return res;
  }
  document.write(`<div>Максимальна кількість відвідувачів ${getMaxVisitorsNumDay(visitors)}-й день тижня.</div>`);

  // ●	номери днів, коли кількість відвідувачів була мінімальною;
  function getMinVisitorsNumDay(arr) {
    let min = Infinity;
    let res = ``;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        res += `${i + 1}`;
      }
    }
    return res;
  }
  document.write(`<div>Мінімальна кількість відвідувачів ${getMinVisitorsNumDay(visitors)}-й день тижня.</div>`);

  // ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
  function getTotalVisitorsOnWorkingDays(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length - 2; i++) {
      sum += arr[i];
    }
    return sum;
  }
  function getTotalVisitorAtWeekend(arr) {
    let sum = 0;
    for (let i = arr.length - 2; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  document.write(`<div>Загальна кількість відвідувачів в робочі дні: ${getTotalVisitorsOnWorkingDays(visitors)}.</div>
  <div>Загальна кількість відвідувачів на вихідних: ${getTotalVisitorAtWeekend(visitors)}</div>`);
}
