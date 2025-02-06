"use script";

// Задача 2. Створити 10 елементів для введення цін продуктів

if (confirm('Почати тестування?')) {
  document.write(`<form>`)
  for (let i = 1; i <= 10; i++) {
    document.write(`Product#${i} <input><br>`)
  }
  document.write(`</form>`)
}
