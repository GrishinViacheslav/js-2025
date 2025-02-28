"use script";

// Задача 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm('Почати тестування?')) { 
  function carNameStartLetterFilter(carsList, letter = 'A') {
    let newArr = []
    for(const car of carsList) {
      if(car[0] === letter) {
        newArr.push(car)
      } 
    }
    return newArr
  }

  carNumbers = ['AХ7025АК', 'AА2227КА', 'E2979АН', 'PА678', 'AВ2259АА']
  const filteredLetter = prompt(`Введіть літеру`, 'A').toUpperCase()
  document.write(carNameStartLetterFilter(carNumbers,filteredLetter))
}
