"use strict";

// Задача 2. Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть)

if (confirm("Почати тестування?")) {
  function getAllPossibleSportsmenPlaces(names) {
    if (names.length === 0) return [[]];
    const firstPerson = names[0];
    const other = names.slice(1);

    const withoutFirstPerson = getAllPossibleSportsmenPlaces(other);
    const resArr = [];

    for (let person of withoutFirstPerson) {
      for (let i = 0; i <= person.length; i++) {
        const perm = [...person.slice(0, i), firstPerson, ...person.slice(i)];
        resArr.push(perm);
      }
    }
    return resArr;
  }
  const sportsmenNames = ["Harry", "John", "Thomas", "Nick"];

  const possibleSportsmenPlaces = getAllPossibleSportsmenPlaces(sportsmenNames);
  console.log(possibleSportsmenPlaces);
}
