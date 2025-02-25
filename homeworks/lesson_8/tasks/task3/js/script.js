"use script";
// Задача 3. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які:
// • починаються на букву «А»;
// • перша і остання літери співпадають;
// • складаються з більше ніш 5 символів;

if (confirm("Почати тестування?")) {
  document.write(`<ul>`);
  const carNumbers = ["АХ7025АК", "АА2227КА", "Е2979АН", "РА678", "АВ2259АА"];

  function getNumberStartedCharA (arr) {
    let startedA = 0;
    for (let i = 0; i < carNumbers.length; i++) {
      if (carNumbers[i][0] === "А") startedA++;
    }
    return startedA
  }

  function getNumberWithEqualFirstAndLast (arr) {
    let count = 0;
    for (let i = 0; i < carNumbers.length; i++) {
      let str = carNumbers[i];
      if (str[0] === str[str.length - 1]) count++;
    }
    return count
  }

  function getNumberLongerThan5 (arr) {
    let numberLonger5 = 0;
    for (let i = 0; i < carNumbers.length; i++) {
      let str = carNumbers[i];
      if (str.length > 5) numberLonger5++;
    }
    return numberLonger5
  }
  
  document.write(`<li>кількість номерів, що починаються на букву «А»: ${getNumberStartedCharA(carNumbers)}</li>`);
  document.write(`<li>кількість номерів перша і остання літери співпадають: ${getNumberWithEqualFirstAndLast(carNumbers)}</li>`);
  document.write(`<li>кількість номерів, які складаються з більше ніш 5 символів: ${getNumberLongerThan5(carNumbers)}</li>`);
  
  document.write(`</ul>`);
}
