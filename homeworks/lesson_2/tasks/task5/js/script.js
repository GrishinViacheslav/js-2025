"use script";
// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
const seconds = parseInt(prompt("Введіть кількість секунд з початку доби", 0));

const hours = parseInt(seconds / (60 * 60));
const minutes = parseInt((seconds - hours * 60 * 60) / 60);
document.write(`<div>З початку доби пройшло ${hours} годин та ${minutes} хвилин</div>`);
