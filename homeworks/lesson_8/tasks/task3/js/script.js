"use script";
// Задача 3. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які:
// • починаються на букву «А»;
// • перша і остання літери співпадають;
// • складаються з більше ніш 5 символів;

if (confirm("Почати тестування?")) {
  document.write(`<ul>`);
  const carNumbers = ["АХ7025АК", "АА2227КА", "Е2979АН", "РА678", "АВ2259АА"];

  let startedA = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i][0] === "А") startedA++;
  }
  document.write(`<li>кількість номерів, що починаються на букву «А»: ${startedA}</li>`);

  let count = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    let str = carNumbers[i];
    if (str[0] === str[str.length - 1]) count++;
  }
  document.write(`<li>кількість номерів перша і остання літери співпадають: ${count}</li>`);

  let numberLonger5 = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    let str = carNumbers[i];
    if (str.length > 5) numberLonger5++;
  }
  document.write(`<li>кількість номерів, які складаються з більше ніш 5 символів: ${numberLonger5}</li>`);
  document.write(`</ul>`);
}
