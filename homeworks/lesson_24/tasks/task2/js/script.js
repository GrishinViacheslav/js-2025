"use strict";

// Задача 2. Дано Shop -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»

if (confirm("Почати тестування?")) {
  class Product {
    constructor(title, price, amount) {
      this.Title = title;
      this.Price = price;
      this.Amount = amount;
    }
    #title;
    #price;
    #amount;

    get Title() {
      return this.#title;
    }
    get Price() {
      return this.#price;
    }
    get Amount() {
      return this.#amount;
    }

    set Title(newTitle) {
      if (newTitle.trim().length === 0) throw new Error(`Error! Write a title of the product`);
      this.#title = newTitle;
    }
    set Price(newPrice) {
      if (newPrice < 0) throw new Error(`Error! The price of the product can't be less than 0`);
      this.#price = newPrice;
    }
    set Amount(newAmount) {
      if (newAmount < 0) throw new Error(`Error! The amount of the product can't be less than 0`);
      this.#amount = newAmount;
    }
  }

  class Shop {
    constructor(productsList) {
      this.ProductsList = productsList;
    }
    #productsList;
    get ProductsList() {
      return this.#productsList;
    }

    set ProductsList(list) {
      if (!Array.isArray(list) || list.length === 0) throw new Error(`Error! Incorrect data`);
      list.forEach((product) => {
        if (!(product instanceof Product)) throw new Error(`Error! Incorrect data`);
      });
      this.#productsList = list;
    }

    [Symbol.iterator]() {
      let index = 0;
      const products = this.ProductsList;
      return {
        next() {
          if (index < products.length) {
            const product = products[index++];
            return { done: false, value: `${product.Title} - ${product.Price * product.Amount}` };
          } else {
            return { done: true };
          }
        },
      };
    }
  }

  let productsList = [new Product("Milk", 60, 43), new Product("Bread", 50, 25), new Product("Apple", 60, 100), new Product("Cheese", 150, 32), new Product("Cola", 55, 74)];

  const supermarket = new Shop(productsList);
  for (let product of supermarket) {
    document.write(`${product}<br>`);
  }
}
