"use strict";

if (confirm("Почати тестування?")) {
  const arr = ["Mike", "John", "Star1", "_xvD", "Nancy$", "Ronald357", `rnb78`];

  // Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
  for (const item of arr) {
    if (/\d/g.test(item)) console.log(item);
  }

  // Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
  for (const item of arr) {
    if (!/\d/g.test(item)) console.log(item);
  }

  // Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
  for (const item of arr) {
    if (/[aeiouyAEIOUY]/g.test(item)) console.log(item);
  }

  // Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
  for (const item of arr) {
    if (!/[aeiouyAEIOUY]/g.test(item)) console.log(item);
  }

  // Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
  for (const item of arr) {
    if (/[1 | 3]/g.test(item)) console.log(item);
  }

  const str = "For an 357introduction, 22 to regular 11 expressions 100, read25 the to. Regular 15expressions chapter in the JavaScript-guide.";
  // Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
  function getAllNumbersOfString(str) {
    return str.match(/\d+/g);
  }

  // Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
  function getAllPunctuationMarks(str) {
    return str.match(/[\p{P}]/gu);
  }

  // Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
  function getWordsDivideByPunctuationMarks(str) {
    return str.match(/\w+\b\s?[,.!?:;-]+\s?\w+\b/gi);
  }

  // Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
  function hasDate(str) {
    return /\b(?:0?[1-9]|[12][0-9]|3[01])\.(?:0?[1-9]|1[0-2])\.\d{4}\b/.test(str);
  }

  // Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
  function getTwoDigitsNumberAmount(str) {
    const res = str.match(/\b\d{2}\b/g);
    return res.length;
  }

  // Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
  function hasBankCardNumber(str) {
    return /\b\d{4}\-\d{4}\-\d{4}\-\d{4}\b/.test(str);
  }

  // Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
  function isGovermentDomain(source) {
    const regExp = /^https?:\/\/[a-zA-Z0-9.-]+\.gov(\.[a-zA-Z]{2,})?$/;
    return regExp.test(source);
  }

  // Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
  const message = "dgdddf 2022 sdfsdfd 2514 dfgtytujh 2237 dfsdf5555";
  function getYearsBiggerThan2021(str) {
    return str.match(/[2-9][0-9][2-9][2-9]/g);
  }

  // Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
  function isUkranianPhoneNumber(phoneNum) {
    const regExp = /^\+38\d{10}$/;
    return regExp.test(phoneNum);
  }

  // Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
  const input = "Mike Johnson";
  function changeSpaceOnHyphen(str) {
    const res = input.replace(/\s/, "-");
    return res;
  }

  // Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
  const userData = "05.10.2015";
  function getStringRepresentOFData(userData) {
    const res = userData.replace(/\./g, "/");
    return res;
  }

  // Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
  const input1 = "sun";
  function isDayOff(inp) {
    const regEx = /([06]|sat|sun)/;
    return regEx.test(inp1);
  }
}
