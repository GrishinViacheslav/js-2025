"use strict";

// Задача 4. Розробити клас Baner
// Поля: 
// Масив об’єктів ( графічних зображень та посилань на сайти)

// методи:	
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера

if (confirm("Почати тестування?")) {
  class Baner {
    constructor(objArr) {
      this.objArr = objArr
    }
    randChoice() {
      const randIndex = Math.floor(Math.random()*this.objArr.length)
      return this.objArr[randIndex]
    }
    showBaner() {
      const {img, href} = this.randChoice()
      document.write(`<a href='${href}'><img src='${img}' alt='Baner'></a>`)
    }
  }
  
  const arr = [
    {
      img: 'img/img1.jpg',
      href: 'https://www.google.com/',
    },
    {
      img: 'img/img2.jpg',
      href: 'https://chatgpt.com/',
    },
    {
      img: 'img/img3.jpg',
      href: 'https://gemini.google.com/app?hl=uk',
    }
  ]
  
  const newBaner = new Baner(arr)
  console.log(newBaner.randChoice());
  newBaner.showBaner()
}
