"use script";

// Задача 2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не
// вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то
// пропонуємо купити лотерею за 4 грн.

const productPrice = parseFloat(prompt("Введіть ціну товару", 0));
const personMoney = parseFloat(prompt("Введіть кількість грошей", 0));

if (!isNaN(productPrice) && !isNaN(personMoney)) {
  if (personMoney >= productPrice + 4) {
    document.write("Ось ваш товар і додатково пропонуємо вам купити лотерею за 4 грн.");
  } else if (personMoney >= productPrice && personMoney < productPrice + 4) {
    document.write("Ось ваш товар.");
  } else {
    document.write("У Вас недостатньо грошей!");
  }
}
