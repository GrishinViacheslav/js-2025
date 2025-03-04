"use script";

// Задача 2. Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

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

  function getIndexElBiggerNum(prices, num=1000) {
    const biggerElIndex = prices.reduce((acc, el, index) => {
      if (el > num) acc.push(index);
      return acc;
    }, []);
    return biggerElIndex
  }
  document.write(getIndexElBiggerNum(securitiesPrices));
}
