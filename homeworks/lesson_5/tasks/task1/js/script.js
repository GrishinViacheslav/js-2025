"use script";
// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

if (confirm('Почати тестування?')) {
  document.write(`<ul>`)
  const iterationsNum = parseInt(prompt('Ввести кількість випадкових чисел', 0));
  for(let i = 0; i < iterationsNum; i++) {
    let randomNum = 1 + Math.floor(Math.random()*100);
    document.write(`<li>${randomNum}</li>`);
  }

  document.write(`</ul>`)
}