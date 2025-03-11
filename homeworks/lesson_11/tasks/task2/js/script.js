"use script";

// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :

if (confirm('Почати тестування?')) {
function getShopProfitPerWeek(length, min, max) {
  const shopProfit = [];
  for (let i = 0; i < length; i++) {
    const randProfit = min + Math.floor(Math.random() * (max - min + 1));
    shopProfit.push(randProfit);
  }
  return shopProfit;
}
function getRandShopsProfitPerWeek(shopsNum, daysNum, min, max) {
  const arr = [];
  for (let shopIndex = 0; shopIndex < shopsNum; shopIndex++) {
    const shopProfit = getShopProfitPerWeek(daysNum, min, max);
    arr.push(shopProfit);
  }
  return arr;
}
const shopsProfits = getRandShopsProfitPerWeek(5, 7, 100, 1000);

// 1) загальний прибуток кожного магазину за тиждень;
function getTotalWeekProfit(arr) {
  let res = ''
  for(let shopIndex = 0; shopIndex < arr.length; shopIndex++) {
    const shopTotalSum = arr[shopIndex].reduce((sum,el)=>sum+el)
    res += `Загальний прибуток ${shopIndex + 1}-го магазину за тиждень: ${shopTotalSum}<br>`
  }
  return res
}
document.write(`${getTotalWeekProfit(shopsProfits)}`)

// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
const getTotalShopsProfitByDay = (arr, startDay = 0, endDay = 7) => {
  const shopProfitPerDay = [0,0,0,0,0,0,0]
  for(let shop of arr) {
    for(let dayIndex = startDay; dayIndex < endDay; dayIndex++) {
      shopProfitPerDay[dayIndex] += shop[dayIndex]
    }
  }
  return shopProfitPerDay
}
document.write(`Сума по дням тижня: ${getTotalShopsProfitByDay(shopsProfits)}`)

// 3) загальний прибуток за робочі дні
const getTotalShopsProfit = (arr, startDay = 0, endDay = 7) => {
  let sum = 0
  for(let shop of arr) {
    for(let dayIndex = startDay; dayIndex < endDay; dayIndex++) {
      sum += shop[dayIndex]
    }
  }
  return sum
}
const getTotalShopWorkingDayProfit = getTotalShopsProfit(shopsProfits, 0, 5)
document.write(`<div>Загальний прибуток за робочі дні: ${getTotalShopWorkingDayProfit}</div>`)

// 4) загальний прибуток за вихідні дні
const getTotalShopWeekendProfit = getTotalShopsProfit(shopsProfits, 5, 7)
document.write(`<div>Загальний прибуток за вихідні дні: ${getTotalShopWeekendProfit}</div>`)

// 5) максимальний прибуток за середу
function getShopDayProfit(arr, day=2) {
  let max = -Infinity
  for(let shop of arr) {
    if(shop[day] > max) max = shop[day]
  }
  return max
}
document.write(`Максимальний прибуток за середу: ${getShopDayProfit(shopsProfits)}`)

// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
const getProfitHigher200 = (arr, num=200) => arr.flat(Infinity).filter((el)=> el > num)
document.write(`<div>Значення, які більші за 200: ${getProfitHigher200(shopsProfits)}</div>`)

// 7) відсортувати кожен тиждень за зростанням
function getSortedWeekRaiseArr(arr) {
  for(let shop of arr) {
    shop.sort((a,b)=>a-b)
  }
  return arr
}
const copyShopsProfits = JSON.parse(JSON.stringify(shopsProfits))
document.write(`<div>Кожен тиждень за зростанням${getSortedWeekRaiseArr(copyShopsProfits)}</div>`)

// 8) відсортувати тижні (рядки) за спаданням максимального елементу у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні
//? елементи у кожному з цих рядків
const getSorteMaxProfitdArr = (arr) => arr.sort((a,b)=> Math.max(...b) - Math.max(...a))
document.write(`<div>Відсортовані тижні за спаданням максимального елементу у цьому тижні: ${getSorteMaxProfitdArr(copyShopsProfits)}</div>`)

// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми,
//?   на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
const getSortedSumArr = (arr) => arr.sort((a,b)=> b.reduce((sum,el)=>sum+el,0) - a.reduce((sum,el)=>sum+el,0))
document.write(`<div>Упорядкувані тижні за спаданням суми елементів у тижні: ${getSortedSumArr(copyShopsProfits)}</div>`)
}
