"use strict";

// Задача 2. Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
// ●	Вивести всіх простих клієнтів;
// ●	Вивести всіх клієнтів GoldenClient;
// ●	Знайти сумарну кількість грошей на рахунку;

if (confirm("Почати тестування?")) {
  class Client {
    constructor(accountId, fullName, balance) {
      this.AccountId = accountId;
      this.FullName = fullName;
      this.Balance = balance;
    }
    #accountId;
    #fullName;
    #balance;
  
    get AccountId() {
      return this.#accountId;
    }
    get FullName() {
      return this.#fullName;
    }
    get Balance() {
      return this.#balance;
    }
  
    set AccountId(newId) {
      if (newId.trim().length === 0) throw new Error(`Помилка! ID не має бути порожнім`);
      this.#accountId = newId;
    }
    set FullName(newFullName) {
      if (newFullName.trim().length === 0) throw new Error(`Помилка! ПІБ клієнта не може бути порожнім`);
      this.#fullName = newFullName;
    }
    set Balance(newBalance) {
      if (isNaN(newBalance) || newBalance < 0) throw new Error(`Помилка! Кількість грошей має бути числом, що більше або дорівнює 0`);
      this.#balance = newBalance;
    }
  
    addMoney(money) {
      if (isNaN(money) || money <= 0) throw new Error(`Помилка! Введіть додатню кількість грошей`);
      this.Balance += money;
    }
    withdrawal(money) {
      if (isNaN(money) || money <= 0 || money > this.Balance) throw new Error(`Помилка! Введіть додатню кількість грошей не більше аніж ${this.Balance}`);
      this.Balance -= money;
    }
    toString() {
      return `
      <h3>Рахунок клієнта:</h3>
      <div>ID рахунку: ${this.AccountId}.</div>
      <div>ПІБ: ${this.FullName}.</div>
      <div>Баланс клієнта: ${this.Balance} грн.</div>
      `;
    }
  }
  
  class GoldenClient extends Client {
    constructor(accountId, fullName, balance = 10000, creditLimit = 10000, creditUsagePercentage = 23) {
      super(accountId, fullName, balance);
      this.CreditLimit = creditLimit;
      this.CreditUsagePercentage = creditUsagePercentage;
      this.currentCreditBalance = creditLimit;
    }
    #creditLimit;
    #creditUsagePercentage;
  
    get CreditLimit() {
      return this.#creditLimit;
    }
    get CreditUsagePercentage() {
      return this.#creditUsagePercentage;
    }
    set CreditLimit(limit) {
      if (isNaN(limit) || limit < 0 || limit > 100000) throw new Error(`Помилка! Кредитний ліміт не може бути менше 0 і більше 100000`);
      this.#creditLimit = limit;
    }
    set CreditUsagePercentage(percentageValue) {
      if (isNaN(percentageValue) || percentageValue < 0) throw new Error(`Помилка! Відсоток за використання кредитних коштів не може бути менше 0`);
      this.#creditUsagePercentage = percentageValue;
    }
    withdrawal(money) {
      if (isNaN(money) || money <= 0) throw new Error(`Помилка! Кількість грошей має бути додатним числом`);
  
      const totalAvaliableMoney = this.Balance + this.currentCreditBalance;
  
      if (money > totalAvaliableMoney) throw new Error(`Помилка! Ви не можете зняти більше аніж ${totalAvaliableMoney}`);
      if (money <= this.Balance) this.Balance -= money;
      else {
        this.currentCreditBalance = totalAvaliableMoney - money;
        this.Balance = 0;
      }
    }
  
    getPenaltiesforUseCreditFunds(overdueDaysNum = 11) {
      if (isNaN(overdueDaysNum) || overdueDaysNum < 0) throw new Error(`Помилка! Кількість днів має бути додатним числом`);
      return this.currentCreditBalance > 0 ? (((this.CreditLimit - this.currentCreditBalance) * this.CreditUsagePercentage) / 100) * overdueDaysNum : 0;
    }
  
    toString() {
      return `
      ${super.toString()}
      <div>Кредитний ліміт: ${this.CreditLimit} грн.</div>
      <div>Доступно кредитних коштів: ${this.currentCreditBalance} грн.</div>
      <div>Відсоток за використання кредитних коштів: ${this.CreditUsagePercentage}%.</div>
      `;
    }
  }
  
  class Bank {
    constructor(title, clientsList) {
      this.BankTitle = title;
      this.ClientsList = clientsList;
    }
    #clientsList;
    #bankTitle;
  
    get BankTitle() {
      return this.#bankTitle;
    }
    set BankTitle(newTitle) {
      if (typeof newTitle !== `string` || newTitle.trim().length === 0) throw new Error(`Помилка! Назва банку не може бути порожньою`);
      this.#bankTitle = newTitle;
    }
  
    get ClientsList() {
      return this.#clientsList;
    }
    set ClientsList(newClientsList) {
      if (!Array.isArray(newClientsList) || !newClientsList.length) throw new Error(`Помилка! Масив клієнтів не може бути порожнім`);
      this.#clientsList = newClientsList;
    }
  
    getClassicStatusClients() {
      return this.ClientsList.filter((client) => !("CreditLimit" in client));
    }
    getGoldenStatusClients() {
      return this.ClientsList.filter((client) => "CreditLimit" in client);
    }
    getTotalClientsSum() {
      return this.ClientsList.reduce((sum, client) => sum + client.Balance, 0);
    }
  }
  
  const clientsList = [new Client(`1111`, `Пархоменко Павло Іванович`, 100000), new GoldenClient(`2222`, `Коваленко Світлана Петрівна`, 1500000, 100000, 20), new Client(`3333`, `Шевченко Олексій Ігоревич`, 150000), new GoldenClient(`4444`, `Литвин Катерина Миколаївна`, 2500000, 100000, 10), new Client(`5555`, `Свіріденко Ганна Михайлівна`, 50000)];
  
  const mono = new Bank(`Monobank`, clientsList);
}
