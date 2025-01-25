"use script";

// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
let lengthSm = parseFloat(prompt("Введіть довжину в сантиметрах", 0));
let convertLengthToMetr = lengthSm / 100;
let convertLengthToKm = lengthSm / 1000000;

document.write(`<div>${lengthSm}см = ${convertLengthToMetr}м</div>
								<div>${lengthSm}см = ${convertLengthToKm}км</div>`);
