"use strict";
// Задача 2.Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

if (confirm("Почати тестування?")) {
  class CompanyCar {
    static auto;
    constructor(driver, brand, number) {
      if (CompanyCar.auto) return CompanyCar.auto;
      this.Driver = driver;
      this.CarBrand = brand;
      this.CarNumber = number;
      CompanyCar.auto = this;
    }
    #driver;
    #carBrand;
    #carNumber;

    get Driver() {
      return this.#driver;
    }
    set Driver(name) {
      if (name === "") throw new Error(`Помилка! Ім'я має бути вказано!`);
      this.#driver = name;
    }

    get CarBrand() {
      return this.#carBrand;
    }
    set CarBrand(brandTitle) {
      if (brandTitle === "") throw new Error(`Помилка! Марка автівки має бути вказана!`);
      this.#carBrand = brandTitle;
    }
    get CarNumber() {
      return this.#carNumber;
    }
    set CarNumber(number) {
      if (number === "") throw new Error(`Помилка! Номер автівки має бути вказаним!`);
      this.#carNumber = number;
    }
    toString() {
      return `<div>Службове авто марки ${CompanyCar.auto.CarBrand} має державний номер ${CompanyCar.auto.CarNumber}. Водій - ${CompanyCar.auto.Driver}</div>`;
    }
  }
  const companyAuto = new CompanyCar("Микола", "Audi", "AX27487");
  const companyAuto2 = new CompanyCar("Стас", "Audi", "AX11111");
  document.write(companyAuto);
  document.write(companyAuto2);
}
