"use strict";

// Задача 5.  Розробити клас «Керівник танців»
						// Поля:
						// Масив імен хлопців
						// Масив імен дівчат

						// Методи:
						// Метод випадкового вибору імені хлопця
						// Метод випадкового вибору імені дівчини
						// Метод виведення пари для танців
						// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

if (confirm("Почати тестування?")) {
  class DanceDirector {
    constructor(boys, girls) {
      this.boys = boys
      this.girls = girls
    }
  
    chooseBoy() {
      const randIndex = Math.floor(Math.random()*(this.boys.length))
      return this.boys[randIndex]
    }
    chooseGirl() {
      const randIndex = Math.floor(Math.random()*(this.girls.length))
      return this.girls[randIndex]
    }
    dancePair() {
      return `${this.chooseBoy()} - ${this.chooseGirl()}<br>`
    }
    run() {
      setInterval(() => {
        document.write(this.dancePair())
      }, 5000);
    }
  }
  
  const boys = ['Alex', 'John', 'Paul', 'Matt']
  const girls = ['Sarah', 'Lena', 'Monica', 'Ashley']
  const danceLeader = new DanceDirector(boys, girls)
  danceLeader.run()
}
