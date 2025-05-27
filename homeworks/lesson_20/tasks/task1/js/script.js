"use strict";

// Задача 1. Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. 
// Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального до максимального розміру. 
// Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.

if (confirm("Почати тестування?")) {
  class Star{
    constructor(cssObj, minSize = 0, maxSize = 7, maxStep = 1, interval = 3000) {
      this.maxStep = maxStep
      this.minSize = minSize
      this.maxSize = maxSize
      this.interval = interval
      this.cssObj = cssObj
    }
    
    getRandomValue(min=0, max=100) {
      return min + Math.floor(Math.random()*(max-min+1))
    }
  
    setStarCoorditates() {
      this.top = this.getRandomValue() 
      this.left = this.getRandomValue()
      this.star.style.top = this.top + `%`
      this.star.style.left = this.left + `%`
    }
  
    setStarSize() {
      const randomSize = this.getRandomValue(this.minSize, this.maxSize) 
      const initStarWidth = randomSize
      const initStarHeight = randomSize
      
      this.star.style.width = initStarWidth + `px`
      this.star.style.height = initStarHeight + `px`
  
      this.initStarWidth = initStarWidth
      this.initStarHeight = initStarHeight
    }
  
    setStarOnSky() {
      this.setStarCoorditates()
      this.setStarSize()
    }
  
    updateStarSize() {
      this.star.style.width = this.initStarWidth + `px`
      this.star.style.height = this.initStarHeight + `px`
    }
  
    growingStar() {
      this.initStarWidth += this.maxStep
      this.initStarHeight += this.maxStep
      this.updateStarSize()
    }
  
    resetStar() {
      this.initStarWidth = this.minSize
      this.initStarHeight = this.minSize
      this.updateStarSize()
      this.setStarCoorditates()
    }
  
    updateStar() {
      if(this.initStarWidth < this.maxSize) {
        this.growingStar()
      } else {
        this.resetStar()
      }
    }
    starAnimation() {
      setInterval(() => {
        this.updateStar()
      },this.interval)
    }
  
    render(containerSelector) {
      const star = document.createElement(`div`)
      star.className = this.cssObj.name
      this.star = star
      this.setStarOnSky()
      if(containerSelector) {
        document.querySelector(containerSelector).append(star)
        this.starAnimation()
      }
      return this.star
    }
  }
  
  const cssObj = {
    name: "star-item"
  }
  
  for(let i = 0; i < 200; i++) {
    const test = new Star(cssObj, 0, 7, 1, 1000)
    test.render(`.sky`)
  }
}
