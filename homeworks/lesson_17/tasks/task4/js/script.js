"use strict";

// Задача 4. Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми.

if (confirm("Почати тестування?")) {
  class ProductBrand {
    constructor(brandTitle, registrNum) {
      this.Brand = brandTitle;
      this.RegistrNum = registrNum;
    }
    #brandTitle;
    #registrNum;
    get Brand() {
      return this.#brandTitle;
    }
    set Brand(newBrandTitle) {
      if (!newBrandTitle) throw new Error(`Помилка! Назва бренду не може бути порожньою!`);
      this.#brandTitle = newBrandTitle;
    }
    get RegistrNum() {
      return this.#registrNum;
    }
    set RegistrNum(newRegistrNum) {
      if (!newRegistrNum || newRegistrNum < 0) throw new Error(`Помилка! Реєстраційний номер має бути заповнений!`);
      this.#registrNum = newRegistrNum;
    }
    toString() {
      return `${this.Brand}; реєстраційний номер: ${this.RegistrNum}`;
    }
  }

  class Product {
    constructor(title, unit, count, manufacturer) {
      this.ProductTitle = title;
      this.ProductAmount = count;
      this.Manufacturer = manufacturer;
      this.ProductUnit = unit;
    }
    #productTitle;
    #productAmount;
    #manufacturer;
    #productUnit;

    get ProductTitle() {
      return this.#productTitle;
    }
    set ProductTitle(title) {
      if (!title) throw new Error(`Помилка! Назва продукту не може бути порожньою`);
      this.#productTitle = title;
    }
    get ProductUnit() {
      return this.#productUnit;
    }
    set ProductUnit(unit) {
      if (!unit) throw new Error(`Помилка! Одиниця виміру не може бути порожньою`);
      this.#productUnit = unit;
    }

    get ProductAmount() {
      return this.#productAmount;
    }
    set ProductAmount(amount) {
      if (amount < 0) throw new Error(`Помилка! Кількість не може бути від'ємною`);
      this.#productAmount = amount;
    }
    get Manufacturer() {
      return this.#manufacturer;
    }
    set Manufacturer(manufacturer) {
      if (!(manufacturer instanceof ProductBrand)) throw new Error(`Помилка! Об'єкт не належить до класу ProductBrand`);
      this.#manufacturer = manufacturer;
    }
    toString() {
      return `Продукт: ${this.ProductTitle}; кількість: ${this.#productAmount} ${this.ProductUnit}; виробник: ${this.Manufacturer}`;
    }
  }

  // Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми
  class Warehouse {
    constructor(title) {
      this.WarehouseTitle = title;
      this.productList = [];
    }
    #warehouseTitle;
    get WarehouseTitle() {
      return this.#warehouseTitle;
    }
    set WarehouseTitle(title) {
      if (!title) throw new Error(`Помилка! Назва складу не може бути порожньою`);
      this.#warehouseTitle = title;
    }
    // реєстрація товарів
    addProduct(addedProduct) {
      if (!(addedProduct instanceof Product)) throw new Error(`Помилка! Об'єкт не належить до класу Product`);
      const isExistedProduct = this.productList.find((prod) => prod.ProductTitle === addedProduct.ProductTitle && prod.Manufacturer.RegistrNum === addedProduct.Manufacturer.RegistrNum);
      if (isExistedProduct) isExistedProduct.ProductAmount += addedProduct.ProductAmount;
      else this.productList.push(addedProduct);
    }
    // відвантаження товарів
    removeProductByTitle(productTitle, registrationNumber, productAmount) {
      if (!productTitle || registrationNumber <= 0 || productAmount <= 0) throw new Error(`Помилка! Ви ввели некоректні дані`);
      const isExistedProduct = this.productList.find((prod) => prod.ProductTitle === productTitle && prod.Manufacturer.RegistrNum === registrationNumber);
      if (isExistedProduct) {
        if (isExistedProduct.ProductAmount > productAmount) {
          isExistedProduct.ProductAmount -= productAmount;
        } else if (isExistedProduct.ProductAmount === productAmount) {
          this.productList = this.productList.filter((prod) => !(prod.ProductTitle === productTitle && prod.Manufacturer.RegistrNum === registrationNumber));
        } else throw new Error(`Помилка! На складі немає такої кількості товару, яку ви намагаєтесь відвантажити`);
      } else {
        throw new Error(`Помилка! Товару немає на складі`);
      }
    }
    // фільтрація за назвою товару
    filterByProductTitle(title) {
      if (!title) throw new Error(`Помилка! Назва товару не може бути порожньою`);
      return this.productList.filter((prod) => prod.ProductTitle === title);
    }
    // фільтрація за назвою фірми
    filterByBrandTitle(brandTitle) {
      if (!brandTitle) throw new Error(`Помилка! Назва фірми не може бути порожньою`);
      return this.productList.filter((prod) => prod.Manufacturer.Brand === brandTitle);
    }

    warehouseProductsList() {
      document.write(`<h1>${this.WarehouseTitle}</h1>`);
      document.write(`<ol>`);
      this.productList.forEach((prod) => document.write(`<li><h3>${prod}</h3></li>`));
      document.write(`</ol>`);
    }
  }
  try {
    const store = new Warehouse(`Elmir`);
    store.addProduct(new Product("TV", "шт", 10, new ProductBrand("Samsung", 113355)));
    store.addProduct(new Product("Wireless buds", "шт", 150, new ProductBrand("Samsung", 113355)));
    store.addProduct(new Product("Phone", "шт", 100, new ProductBrand("LG", 789514)));
    store.addProduct(new Product("Computer", "шт", 5, new ProductBrand("Microsoft", 124785)));
    store.addProduct(new Product("Computer", "шт", 55, new ProductBrand("Microsoft", 124785)));
    store.addProduct(new Product("Laptop", "шт", 125, new ProductBrand("Dell", 7842342)));
    store.addProduct(new Product("Laptop", "шт", 15, new ProductBrand("Asus", 222333)));
    const camera = new Product("Camera", "шт", 20, new ProductBrand("Nickon", 777786));
    store.addProduct(camera);
    store.warehouseProductsList();
    const searchProductTitle = 'Camera'
    const filterByProductTitle = store.filterByProductTitle(searchProductTitle)
    document.write(`<br><h4>Фільтрація по назві ${searchProductTitle}:</h4>${filterByProductTitle.join(`<br>`)}<br>`)
    const searchProductBrand = 'Samsung'
    const filterByProductBrand = store.filterByBrandTitle(searchProductBrand)
    document.write(`<br><h4>Фільтрація по назві бренда ${searchProductBrand}:</h4>${filterByProductBrand.join(`<br>`)}<br>`)
  } catch (error) {
    document.write(error.message);
  }
}
