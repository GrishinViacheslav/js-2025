"use script";

// Задача 4. Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

if (confirm('Почати тестування?')) {
  function createArr(period, minNum = 1, maxNum = 10000) {
    const arr = [];
    for (let i = 0; i < period; i++) {
      const rand = minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
      arr.push(rand);
    }
    return arr;
  }
  const securitiesPrices = createArr(10);
  document.write(`історія цін на цінні папери:<br> ${securitiesPrices}`);
  document.write(`<hr>`);

  function getPercentMaxElem(prices) {
    const percentMaxPrices = prices.map((el) => {
      const maxPrice = Math.max(...securitiesPrices);
      return `${(el * 100) / maxPrice}`;
    });
    return percentMaxPrices
  }
  document.write(getPercentMaxElem(securitiesPrices));
}
