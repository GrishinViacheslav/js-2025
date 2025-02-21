"use script";

// Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

if (confirm('Почати тестування?')) {
  function getRandomImage(source) {
    let res
    let index = 1 + Math.floor(Math.random()*4)
    return res = `<img src="${source}${index}.jpg" alt="Image">`
  }
  let scr = prompt(`Введіть шлях до зображення`) 
  let randImg = getRandomImage(scr)
  document.write(randImg)
}
