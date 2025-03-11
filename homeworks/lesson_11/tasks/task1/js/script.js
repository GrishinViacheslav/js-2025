"use script";

if (confirm('Почати тестування?')) {
// Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
const nums = [
  [1, 2, 5, 10],
  [11, 12, 15, 20],
  [21, 22, 25, 30],
  [31, 32, 35, 40]
]

function getArrSize(arr) {
  let arrHeight = arr.length;
      arrHalfHeight = Math.floor(arr.length/2),
      arrLength = 0,
      arrHalfLength = 0

  for(let rows = 0; rows < arrHeight; rows++) {
    arrLength = arr[rows].length;
    arrHalfLength = Math.floor(arr[rows].length/2);
  }

  return {
    heightArr: arrHeight,
    lengthArr: arrLength,
    halfHeightArr: arrHalfHeight,
    halfLengthArr: arrHalfLength,
  }
}

const {heightArr, lengthArr, halfHeightArr, halfLengthArr} = getArrSize(nums)

function getSum(arr, startRow = 0, endRow = 0, startCol = 0, endCol = 0) {
  let sum = 0
    for(let rowIndex = startRow; rowIndex < endRow; rowIndex++) {
      for(let el = startCol; el < endCol; el++) {
        sum+= arr[rowIndex][el]
      }
    }
    return sum
}
//1)	номери рядків від 0 до половини, стовпці від 0 до половини
const get2QuarterArrSum = getSum(nums, 0, halfHeightArr, 0, halfLengthArr)
document.write(`<div>Сума номерів рядків від 0 до половини, стовпці від 0 до половини: ${get2QuarterArrSum}</div>`)

// 2)	номери рядків від 0 до половини, стовпці від половини до кінця
const get1QuarterArrSum = getSum(nums, 0, halfHeightArr, halfLengthArr, lengthArr)
document.write(`<div>Сума номерів рядків від 0 до половини, стовпці від половини до кінця: ${get1QuarterArrSum}</div>`)


// 3)номери рядків від половини до кінця, стовпці від 0 до половини
const get4QuarterArrSum = getSum(nums, halfHeightArr, heightArr, 0, halfLengthArr)
document.write(`<div>Сума номерів рядків від половини до кінця, стовпці від 0 до половини: ${get4QuarterArrSum}</div>`)


// 4) номери рядків від половини до кінця , стовпці від половини до кінця
const get3QuarterArrSum = getSum(nums, halfHeightArr, heightArr, halfLengthArr, lengthArr)
document.write(`<div>Сума номерів рядків від половини до кінця , стовпці від половини до кінця: ${get3QuarterArrSum}</div>`)


// 5) Суму парних рядків
function getEvenRowsSum(arr) {
  let sum = 0
  for(let rowIndex = 0; rowIndex < arr.length;rowIndex++) {
    if(rowIndex === 0 || rowIndex%2 === 0) {
      for(let elIndex = 0; elIndex < arr[rowIndex].length;elIndex++) {
         sum+= arr[rowIndex][elIndex]
      }
    }
  }
  return sum
}
document.write(`<div>Сума парних рядків: ${getEvenRowsSum(nums)}</div>`)

// 6) Суму непарних стовпців
function getOddColsSum(arr) {
  let sum = 0
  for(let rowIndex = 0; rowIndex < arr.length;rowIndex++) {
    if(rowIndex%2 !== 0) {
      for(let elIndex = 0; elIndex < arr[rowIndex].length;elIndex++) {
         sum+= arr[rowIndex][elIndex]
      }
    }
  }
  return sum
}
document.write(`<div>Сума непарних стовпців: ${getOddColsSum(nums)}</div>`)

// 7) У парних рядках – непарні стовпці, у непарних – парні.
function getAnotherSum(arr) {
  let sumEvenRowsOddCol = 0
  let sumOddRowsEvenCol = 0
  for(let rowIndex = 0; rowIndex < arr.length;rowIndex++) {
    for(let elIndex = 0; elIndex < arr[rowIndex].length;elIndex++) {
      if(rowIndex === 0 || rowIndex%2 === 0 && elIndex%2 !== 0 ) {
        sumEvenRowsOddCol += arr[rowIndex][elIndex]
      }
      if(rowIndex%2 !== 0 && elIndex === 0 || elIndex%2 === 0 ) {
        sumOddRowsEvenCol += arr[rowIndex][elIndex]
      }
    }
  }
  return {
    resEvenRowsOddCol: sumEvenRowsOddCol,
    resOddRowsEvenCol: sumOddRowsEvenCol,
  }
}
const {resEvenRowsOddCol,resOddRowsEvenCol} = getAnotherSum(nums)
document.write(`
                <div>Сума непарних колонок у парних рядках: ${resEvenRowsOddCol};</div>
                <div>Сума парних колонок у непарних рядках: ${resOddRowsEvenCol}.</div>
              `)
}
