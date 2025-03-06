"use script";
// Задача 3. Сформувати список з тих цін, які більші за попереднє значення

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

  function getFunctionList(prices) {
    const priceBiggerPrevPrice = prices.filter((el,index,arr) => index>0 && el>arr[index-1])
    return priceBiggerPrevPrice
  }
  document.write(getFunctionList(securitiesPrices))
}
