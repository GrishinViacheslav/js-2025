"use script";
// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

const productPrice = parseFloat(prompt("Введіть ціну товару", 0));
const productQuantity = parseInt(prompt("Введіть кількість товару", 0));
const vat = "5%";

const totalCost = productPrice * productQuantity;
const vatPrice = (totalCost * parseFloat(vat)) / 100;
document.write(`Загальна вартість товару складає ${totalCost.toFixed(2)}, а розмір ПДВ складає ${vatPrice.toFixed(2)}`);
