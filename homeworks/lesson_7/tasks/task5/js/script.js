"use script";

// Задача 3.  Користувач загадує натуральне число від 1 до N. Шляхом задавання мінімальної кількості запитань знайти вказане число (застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).

if (confirm('Почати тестування?')) {
let convertSmToInch = smNum => smNum/2.54  
let convertKgToLb = kgNum => kgNum*2.205  
let convertKmToMiles = kmNum => kmNum/1.609

const sm = parseInt(prompt(`Введіть довжину в сантиметрах:`, 0))
const kg = parseInt(prompt(`Введіть вагу в кілограмах:`, 0))
const km = parseInt(prompt(`Введіть відстань в кілометрах:`, 0))

let incs = convertSmToInch(sm)
let lb = convertKgToLb(kg)
let mile = convertKmToMiles(km)

document.write(`<ol>`)
document.write(`<li>В ${sm} сантиметрах ${incs.toFixed(2)} дюймів</li>`)
document.write(`<li>В ${kg} кілограмах ${lb.toFixed(2)} фунтів</li>`)
document.write(`<li>В ${km} кілометрах ${mile.toFixed(2)} миль</li>`)

document.write(`</ol>`)
}
