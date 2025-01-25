"use script";

// Задача 0. Обчислити значення виразів
// 1. S1=a+12+b
// 2. S2=a+b2a
// 3. S3=3(a+b)c
// 4. S4=sin⁡(a-b)

const a = parseFloat(prompt("Введіть а", 0));
const b = parseFloat(prompt("Введіть b", 0));
const c = parseFloat(prompt("Введіть c", 0));

const S1 = a + 12 + b;
const S2 = Math.sqrt((a + b) / (2 * a));
const S3 = Math.cbrt((a + b) * c, -3);
const S4 = Math.sin(a / -b);

document.write(`<div>Результат першого виразу: ${S1.toFixed(3)}</div>
								<div>Результат другого виразу: ${S2.toFixed(3)}</div>
								<div>Результат третього виразу: ${S3.toFixed(3)}</div>
								<div>Результат четвертого виразу: ${S4.toFixed(3)}</div>`);
