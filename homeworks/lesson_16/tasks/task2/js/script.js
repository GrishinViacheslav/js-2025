"use strict";
// Задача 2.Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

if (confirm("Почати тестування?")) {
  class TMoney {
    constructor(initialGrnBalance, initialDollarRate) {
      this.DollarRate = initialDollarRate;
      this.GrnBalance = initialGrnBalance;
      this.dollarEquivalent = this.GrnBalance / this.DollarRate;
    }
    #dollarRate;
    get DollarRate() {
      return this.#dollarRate;
    }
    set DollarRate(rate) {
      if (rate < 0) throw new Error(`Не може бути від'ємного курсу валют`);
      this.#dollarRate = rate;
    }

    #grnBalance;
    get GrnBalance() {
      return this.#grnBalance;
    }
    set GrnBalance(grnSum) {
      if (grnSum < 0) throw new Error(`Не може бути від'ємного баланса`);
      this.#grnBalance = grnSum;
    }

    // methods
    updateDollarEquivalent() {
      this.dollarEquivalent = this.GrnBalance / this.DollarRate;
    }
    //	додавання грошової маси, вказуючи необхідну суму у гривнях
    increaseBalance(sumInGrn) {
      if (sumInGrn < 0) throw new Error(`Не можна додавати від'ємне значення`);
      this.GrnBalance += sumInGrn;
      this.updateDollarEquivalent();
    }
    //	вилучення грошової маси, вказуючи необхідну суму у гривнях
    decreaseBalance(sumInGrn) {
      if (sumInGrn < 0) throw new Error(`Не можна вилучати від'ємне значення`);
      if (this.GrnBalance - sumInGrn < 0) throw new Error(`Не можна зменшити на таку суму`);
      this.GrnBalance -= sumInGrn;
      this.updateDollarEquivalent();
    }
    // 	визначення курсу долара, при якому сума у гривнях збільшиться на 100
    dollarRateIncreaseBalanceBy100() {
      let dollarRate100 = (this.GrnBalance + 100) / this.dollarEquivalent;
      document.write(`<div>${dollarRate100.toFixed(2)} - курс, за якого сума клієнта збільшиться на 100 гривень </div>`);
      return dollarRate100;
    }
    toString() {
      return `<div>Поточний баланс клієнта: ${this.dollarEquivalent.toFixed(2)} $</div>`;
    }
  }

  try {
    const clientAccount = new TMoney(10000, 41.5);
    document.write(clientAccount);
    clientAccount.increaseBalance(1500);
    document.write(clientAccount);
    clientAccount.decreaseBalance(100);
    document.write(clientAccount);
    clientAccount.dollarRateIncreaseBalanceBy100();
  } catch (error) {
    document.write(error.message);
  }
}
