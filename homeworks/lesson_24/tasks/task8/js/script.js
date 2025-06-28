"use strict";

// Задача 8. Дано масив показів температур. Підрахувати кількість входжень кожного із показів  let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9] Заокруглити вверх значення та підрахувати кількість різних показів.

if (confirm("Почати тестування?")) {
  function getEachTemperaturesReadingsNum(temperaturesList) {
    const tempretureReadingCount = new Map();
    for (const temperature of temperaturesList) {
      if (tempretureReadingCount.has(temperature)) {
        tempretureReadingCount.set(temperature, tempretureReadingCount.get(temperature) + 1);
      } else {
        tempretureReadingCount.set(temperature, 1);
      }
    }
    return tempretureReadingCount;
  }

  function getDifferentTemperaturesNum(temperaturesList) {
    const copyTempList = [...temperaturesList];
    for (let i = 0; i < copyTempList.length; i++) {
      copyTempList[i] = Math.ceil(copyTempList[i]);
    }
    const diffTemperaturesCount = new Set(copyTempList);
    return diffTemperaturesCount.size;
  }

  let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
  console.log(getEachTemperaturesReadingsNum(temperatures));
  console.log(getDifferentTemperaturesNum(temperatures));
}
