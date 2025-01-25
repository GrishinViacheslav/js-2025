"use script";
// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість.
// Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

const patriotPrice = parseFloat(prompt("Введіть вартість одного ЗРК Patriot", 0));
const patriotQuantity = parseInt(prompt("Введіть кількість Patriots", 0));

const f16Price = parseFloat(prompt("Введіть вартість одного літака F-16 ", 0));
const f16Quantity = parseInt(prompt("Введіть кількість літаків F-16", 0));

const abramsPrice = parseFloat(prompt("Введіть вартість танку Abrams", 0));
const abramsQuantity = parseInt(prompt("Введіть кількість танків Abrams", 0));

const totalPatriotCost = patriotPrice * patriotQuantity;
const totalF16Cost = f16Price * f16Quantity;
const totalAbramsCost = abramsPrice * abramsQuantity;

const bill = totalPatriotCost + totalF16Cost + totalAbramsCost;

document.write(`<h2>Military</h2>
								<div>Чек 2157807</div>
								<ol>
									<li>${patriotQuantity} x ${patriotPrice.toFixed(2)}
										ЗРК "Patriot" - ${totalPatriotCost.toFixed(2)} грн
									</li>
									<li>${f16Quantity} x ${f16Price.toFixed(2)}
										літак "F-16" - ${totalF16Cost.toFixed(2)} грн
									</li>
									<li>${abramsQuantity} x ${abramsPrice.toFixed(2)}
										танк "Abrams" - ${totalAbramsCost.toFixed(2)} грн
									</li>
								</ol>
								<div><strong>Сума ..... ${bill.toFixed(2)} грн</strong></div>
								<p>Дякуємо Вам за покупку</p>
								<p>Приходьте ще</p>`);
