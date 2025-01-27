"use script";
// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
const currentSeconds = parseInt(prompt("Введіть кількість секунд з початку доби", 0));
const secondsInMinute = 60;
const secondsInHour = 3600;

const hours = parseInt(currentSeconds / secondsInHour);
const minutes = parseInt((currentSeconds - (hours * secondsInHour)) / secondsInMinute);
document.write(`<div>З початку доби пройшло ${hours} годин та ${minutes} хвилин</div>`);
