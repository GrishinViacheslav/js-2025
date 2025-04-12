"use strict";

// Задача 4. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

if (confirm("Почати тестування?")) {
  class TBankomat {
    constructor(initialBanknote200, initialBanknote100, initialBanknote50, initialBanknote20, initialBanknote10, initialBanknote5) {
      this.Banknote200Amount = initialBanknote200;
      this.Banknote100Amount = initialBanknote100;
      this.Banknote50Amount = initialBanknote50;
      this.Banknote20Amount = initialBanknote20;
      this.Banknote10Amount = initialBanknote10;
      this.Banknote5Amount = initialBanknote5;
    }
    #banknote200Amount;
    #banknote100Amount;
    #banknote50Amount;
    #banknote20Amount;
    #banknote10Amount;
    #banknote5Amount;

    get Banknote200Amount() {
      return this.#banknote200Amount;
    }
    set Banknote200Amount(banknotesNum) {
      this.checkBanknoteNum(banknotesNum);
      this.#banknote200Amount = banknotesNum;
    }
    get Banknote100Amount() {
      return this.#banknote100Amount;
    }
    set Banknote100Amount(banknotesNum) {
      this.checkBanknoteNum(banknotesNum);
      this.#banknote100Amount = banknotesNum;
    }
    get Banknote50Amount() {
      return this.#banknote50Amount;
    }
    set Banknote50Amount(banknotesNum) {
      this.checkBanknoteNum(banknotesNum);
      this.#banknote50Amount = banknotesNum;
    }
    get Banknote20Amount() {
      return this.#banknote20Amount;
    }
    set Banknote20Amount(banknotesNum) {
      this.checkBanknoteNum(banknotesNum);
      this.#banknote20Amount = banknotesNum;
    }
    get Banknote10Amount() {
      return this.#banknote10Amount;
    }
    set Banknote10Amount(banknotesNum) {
      this.checkBanknoteNum(banknotesNum);
      this.#banknote10Amount = banknotesNum;
    }
    get Banknote5Amount() {
      return this.#banknote5Amount;
    }
    set Banknote5Amount(banknotesNum) {
      this.checkBanknoteNum(banknotesNum);
      this.#banknote5Amount = banknotesNum;
    }

    get atmBanknotes() {
      return [
        { value: 200, amount: this.Banknote200Amount },
        { value: 100, amount: this.Banknote100Amount },
        { value: 50, amount: this.Banknote50Amount },
        { value: 20, amount: this.Banknote20Amount },
        { value: 10, amount: this.Banknote10Amount },
        { value: 5, amount: this.Banknote5Amount },
      ];
    }
    // methods
    checkBanknoteNum(banknotesNum) {
      if (banknotesNum < 0) throw new Error(`Не може бути від'ємна кількість банкнот`);
    }
    // знаходження максимальної суми, яку може видати банкомат
    getMaxSum() {
      return this.atmBanknotes.reduce((prevSum, banknote) => prevSum + banknote.value * banknote.amount, 0);
    }
    // знаходження мінімальної суми, яку може видати банкомат
    getMinSum() {
      for (let i = this.atmBanknotes.length - 1; i >= 0; i--) {
        if (this.atmBanknotes[i].amount > 0) {
          return this.atmBanknotes[i].value;
        }
      }
      throw new Error(`Вибачте, наразі в банкоматі немає грошей!`);
    }
    // метод зняття деякої суми
    getSomeMoney(userSum) {
      if (userSum > this.getMaxSum() || userSum <= this.getMinSum() || userSum % 5 !== 0) throw new Error(`Помилка! Введіть суму кратну 5 від ${this.getMinSum()} до ${this.getMaxSum()}`);
      const banknotesForUser = {};
      let remainSum = userSum;
      for (const banknote of this.atmBanknotes) {
        if (banknote.amount && remainSum >= banknote.value) {
          let neededBanknotes = Math.min(Math.floor(remainSum / banknote.value), banknote.amount);
          banknotesForUser[`banknotes${banknote.value}GrnAmount`] = neededBanknotes;
          remainSum -= neededBanknotes * banknote.value;
          banknote.amount -= neededBanknotes;
          this[`Banknote${banknote.value}Amount`] -= neededBanknotes;
        }
      }
      if (remainSum > 0) throw new Error(`Помилка! Сума не може бути видана! Недостатньо відповідних купюр!`);
      console.log(banknotesForUser);
      return banknotesForUser;
    }

    toString() {
      return `
							<h4>Поточна кількість та номінал купюр в банкоматі:</h4>
							<ul>
								<li>Купюр номіналом 200 гривень - ${this.Banknote200Amount} шт</li>
								<li>Купюр номіналом 100 гривень - ${this.Banknote100Amount} шт</li>
								<li>Купюр номіналом 50 гривень - ${this.Banknote50Amount} шт</li>
								<li>Купюр номіналом 20 гривень - ${this.Banknote20Amount} шт</li>
								<li>Купюр номіналом 10 гривень - ${this.Banknote10Amount} шт</li>
								<li>Купюр номіналом 5 гривень - ${this.Banknote5Amount} шт</li>
							</ul>`;
    }
  }
  try {
    const bankomat = new TBankomat(5, 100, 232, 25, 15, 300);
    document.write(bankomat);
    document.write(`<div>Максимальна сума, яку може видати банкомат - ${bankomat.getMaxSum()} гривень</div>`);
    document.write(`<div>Мінімальна сума, яку може видати банкомат - ${bankomat.getMinSum()} гривень</div>`);
    const withdrawn = bankomat.getSomeMoney(1375);
  } catch (error) {
    document.write(error.message);
  }
}
