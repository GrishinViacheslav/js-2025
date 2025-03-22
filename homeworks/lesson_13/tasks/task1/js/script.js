"use strict";

// Задача 1. Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву.
// Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

if (confirm("Почати тестування?")) {
  function getSubsetArr(set) {
    if (set.length === 0) return [[]];
    const firstEl = set[0];
    const newSet = set.slice(1);

    const setWithoutFirstEl = getSubsetArr(newSet);
    const setWithFirstEl = setWithoutFirstEl.map((el) => [firstEl, ...el]);
    return [...setWithFirstEl, ...setWithoutFirstEl];
  }
  const arr = [1, 2, 3];
  const subset = getSubsetArr(arr);
  console.log(subset);
}
