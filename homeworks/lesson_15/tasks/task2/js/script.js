"use strict";
// Задача 2. Створити об’єкт «Авто».
// Авто
// Поля(властивості):
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів

// Методи (дії)	Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

if (confirm("Почати тестування?")) {
  const car = {
    brand: "audi",
    tankVolume: 70,
    currentFuelVolume: 30,
    placesNum: 5,
    currentPassengersNum: 3,

    refuel(fuelNum = 5) {
      if (this.currentFuelVolume + fuelNum <= this.tankVolume) {
        this.currentFuelVolume += fuelNum;
      } else {
        throw new Error(`Бак переповнений`);
      }
    },
    showPassengersNum() {
      document.write(`Поточна кількість пасажирів ${this.currentPassengersNum}`);
    },
    addPassengers(passengers = 1) {
      if (this.currentPassengersNum + passengers <= this.placesNum) {
        this.currentPassengersNum += passengers;
      } else {
        throw new Error(`Комусь доведеться бігти за машиною, бо місць всім не вистачає`);
      }
    },
    dropOffPassengers(passengers = 1) {
      if (this.currentPassengersNum - passengers >= 0) {
        this.currentPassengersNum -= passengers;
      } else {
        throw new Error(`Вже і так всіх висадив`);
      }
    },
  };
  car.refuel();
  car.showPassengersNum();
  car.addPassengers(2);
  car.dropOffPassengers();
  console.log(car);
}
