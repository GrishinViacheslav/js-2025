"use strict";

// Задача 3. Розробити Класи: House, Dog, Bird.
// --- властивості ---
// ●	Координата Х
// ●	Координата У
// ●	шлях до зображення
// ●	інтервал оновлення
// --- методи ---
// ●	генерування елемента розмітки
// ●	оновлення через вказаний інтервал

if (confirm("Почати тестування?")) {
  class ObjectItem {
    constructor(coordinateX, coordinateY, source, updateInterval) {
      this.coordinateX = coordinateX;
      this.coordinateY = coordinateY;
      this.source = source;
      this.updateInterval = updateInterval;
  
      this.currentX = this.coordinateX;
      this.currentY = this.coordinateY;
    }
    getRandomNum(min = 0, max = 2) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }
  
    render(containerSelector) {
      const imgContainer = document.createElement(`div`);
      imgContainer.className = `image__container`;
      imgContainer.style.position = `absolute`;
      imgContainer.style.left = `${this.currentX}%`;
      imgContainer.style.top = `${this.currentY}%`;
  
      this.imgContainer = imgContainer;
  
      const img = document.createElement(`img`);
      img.src = this.source;
      img.alt = `Image`;
      img.style.cssText = `width: 100%; height: 100%; aspect-ratio: 1 / 1; object-fit: cover`;
      imgContainer.append(img);
  
      if (containerSelector) {
        document.querySelector(containerSelector).append(imgContainer);
      }
    }
  }
  
  const imgSources = {
    house: `img/house.webp`,
    dog: `img/dog.webp`,
    bird: `img/bird.webp`,
  };
  
  class House extends ObjectItem {
    constructor(coordinateX = 30, coordinateY = 30, source = imgSources.house, updateInterval = 2000) {
      super(coordinateX, coordinateY, source, updateInterval);
    }
    changeScale() {
      setInterval(() => {
        const newScale = super.getRandomNum(1, 3);
        this.imgContainer.style.transform = `scale(${newScale})`;
      }, this.updateInterval);
    }
    render(containerSelector) {
      super.render(containerSelector);
      this.changeScale();
    }
  }
  class Dog extends ObjectItem {
    constructor(coordinateX = 75, coordinateY = 0, source = imgSources.dog, updateInterval = 3000) {
      super(coordinateX, coordinateY, source, updateInterval);
    }
    runningAlongXAxisDog() {
      setInterval(() => {
        const deltaX = super.getRandomNum(-50, -15);
        this.currentX += deltaX;
        if (this.currentX < 0) this.currentX = 100;
        if (this.currentX > 100) this.currentX = 0;
        this.imgContainer.style.left = `${this.currentX}%`;
      }, this.updateInterval);
    }
    render(containerSelector) {
      super.render(containerSelector);
      this.runningAlongXAxisDog();
    }
  }
  
  class Bird extends ObjectItem {
    constructor(coordinateX = 50, coordinateY = 75, source = imgSources.bird, updateInterval = 5000) {
      super(coordinateX, coordinateY, source, updateInterval);
    }
    flyingBird() {
      setInterval(() => {
        const deltaX = super.getRandomNum(-15, 15);
        const deltaY = super.getRandomNum(-10, 10);
        this.currentX += deltaX;
        this.currentY += deltaY;
        if (this.currentX < 0) this.currentX = 100;
        if (this.currentX > 100) this.currentX = 0;
        if (this.currentY < 0) this.currentY = 100;
        if (this.currentY > 100) this.currentY = 0;
        this.imgContainer.style.left = `${this.currentX}%`;
        this.imgContainer.style.top = `${this.currentY}%`;
      }, this.updateInterval);
    }
    render(containerSelector) {
      super.render(containerSelector);
      this.flyingBird();
    }
  }
  
  window.onload = () => {
    const house = new House();
    const dog = new Dog();
    const bird = new Bird();
    house.render(`.task3`);
    dog.render(`.task3`);
    bird.render(`.task3`);
  };
}
