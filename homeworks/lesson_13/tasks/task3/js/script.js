"use strict";
// Задача 3. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

if (confirm("Почати тестування?")) {
  function getPossibleDancePairs(boys, girls) {
    if (boys.length === 0 || girls.length === 0) return [];
    const resArr = [];
    for (let i = 0; i < boys.length; i++) {
      for (let girl of girls) {
        resArr.push(`${boys[i]} - ${girl}`);
      }
    }
    return resArr;
  }
  const boys = ["Harry", "John", "Thomas"];
  const girls = ["Ann", "Sarah", "Jessica"];
  const combinationPossibleDancePairs = getPossibleDancePairs(boys, girls);
  console.log(combinationPossibleDancePairs);
}
