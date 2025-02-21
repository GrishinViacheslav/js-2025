"use script";

// Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення 
// (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

if (confirm('Почати тестування?')) {
  function getBanner(source, header, link) {
    let res = `<h2 class="header">${header}</h2>
              <a href="https://www.${link}" class="link">
                <img class="img" alt="Image" src="${source}.jpg">
              </a>`
    return res
  }
  
  const scr = prompt(`Введіть шлях до зображення`, '') 
  const title = prompt(`Введіть заголовок:`, '')
  const link = prompt(`Введіть адресу посилання:`, '')
  
  let banner = getBanner(scr,title,link)
  document.write(banner)
}
