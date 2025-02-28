"use script";

// Задача 7. Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

if (confirm('Почати тестування?')) {
  function getRandNumArr(elemsNum, min, max) {
    let arr = [];
    for (let i = 0; i < elemsNum; i++) {
      const randNum = min + Math.floor(Math.random()*(max-min+1));
      arr.push(randNum);
    }
    return arr;
  }

  function getDiscountPriceBigger1000 (prices, discount=30) {
    prices.forEach((el,index,arr) => {
      if(el > 1000) ((arr[index] *= (1-discount/100)))
    })
    return prices
  }
  
  const elemArrNum = parseInt(prompt('Введіть кількість елементів масиву', 1));
  if(elemArrNum <= 0) throw new Error(`Incorrect data`)
  const randArr = getRandNumArr(elemArrNum, 500, 1500)
  const pricesBigger1000WithDiscountArr = getDiscountPriceBigger1000(randArr)
  document.write(pricesBigger1000WithDiscountArr)
}
