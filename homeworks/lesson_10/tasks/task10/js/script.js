"use script";

// Задача 10. Знайти першу ціну, що більше за 1000

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

  function getFirstPriceBiggerNum(prices,num=1000) {
    const firstPriceBiggerNum = prices.find((el) => el > num);
    return firstPriceBiggerNum
  }
  document.write(getFirstPriceBiggerNum(securitiesPrices));
}
