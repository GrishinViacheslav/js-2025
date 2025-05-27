"use strict";

// Задача 0. Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження).
// На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати,
// кількість відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків)


if (confirm("Почати тестування?")) {
  class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getUserBirthYear() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.age;
    }
    toString() {
      return `Person name is ${this.name}. Birth in ${this.getUserBirthYear()}. It is ${this.age} years. Adress: ${this.address}`;
    }
  }
  
  class Worker extends Person {
    constructor(name, age, address, post, salaryPerMonth, taxRate) {
      super(name, age, address);
      this.post = post;
      this.salaryPerMonth = salaryPerMonth;
      this.taxRate = taxRate;
    }
    getSalaryPerYear() {
      return this.salaryPerMonth * 12;
    }
  
    getTotalTaxPerYear() {
      return this.getSalaryPerYear() * (this.taxRate / 100);
    }
    toString() {
      return `Person name is ${this.name}. Birth in ${this.getUserBirthYear()}. It is ${this.age} years. Address: ${this.address}. Work as ${this.post}. Salary of the year is ${this.getSalaryPerYear()}. Total tax of year is: ${this.getTotalTaxPerYear()}`;
    }
  }
  const worker1 = new Worker(`Sarah`, 25, `Lester city`, `translator`, 152000, 23);
}
