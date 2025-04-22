"use strict";

// Задача 4. Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

if (confirm("Почати тестування?")) {
  const wishList = ["peace", "victory", "love", "money", "big money", "beer", "шовдарь", "пікниця"];
  function getRandomIndex(wishList) {
    if (wishList.length === 0) throw new Error(`Помилка! Невірні вхідні дані`);
    return Math.floor(Math.random() * wishList.length);
  }
  function getRandomDivsWithWish(wishAmount = 3, arr) {
    if (wishAmount > arr.length) throw new Error(`Помилка! Кількість бажань не може бути більше аніж кількість бажань у списку`);
    const wishBlock = document.querySelector(`#random-wish`);
    if (wishBlock) {
      const copyArr = [...arr];
      for (let i = 0; i < wishAmount; i++) {
        const randIndex = getRandomIndex(copyArr);
        const wish = copyArr[randIndex];
        const wishDiv = document.createElement(`div`);
        wishDiv.innerText = `Моє бажання - ${wish}`;
        wishBlock.append(wishDiv);
        copyArr.splice(randIndex, 1);
      }
    } else throw new Error(`Помилка! Немає такого елементу на сторінці`);
  }

  window.onload = () => getRandomDivsWithWish(3, wishList);
}
