"use strict";
// Задача 3.// поля:
// ▪	назва фірми;
// ▪	дата заснування (рік, місяць);
// ▪	послуги (назва послуги, вартість, термін виконання);
// ▪	адреси філіалів (країна, місто, вулиця, номер будинку);

// методи:
// ▪	визначення кількості років існування фірми;
// ▪	виведення всіх філіалів фірми у вказаному місті;
// ▪	виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

if (confirm("Почати тестування?")) {
  // ▪	дата заснування (рік, місяць);
  class FoundationDate {
    constructor(year, month) {
      this.Year = year;
      this.Month = month;
    }
    #year;
    #month;
    get Year() {
      return this.#year;
    }
    set Year(yearNum = 2007) {
      if (yearNum < 0) throw new Error(`Помилка! Не може бути рік від'ємним`);
      this.#year = yearNum;
    }
    get Month() {
      return this.#month;
    }
    set Month(montNum = 12) {
      if (montNum < 1 || montNum > 12) throw new Error(`Помилка! номер місяця має бути в проміжку від 1 до 12`);
      this.#month = montNum;
    }
    toString() {
      return `Дата заснування фірми - ${this.Year}.${this.Month}`;
    }
  }

  // ▪	послуги (назва послуги, вартість, термін виконання);
  class Service {
    constructor(serviceTitle, servicePrice, serviceExecutionTime) {
      this.ServiceTitle = serviceTitle;
      this.ServicePrice = servicePrice;
      this.ServiceExecutionTime = serviceExecutionTime;
    }
    #serviceTitle;
    #servicePrice;
    #serviceExecutionTime;

    get ServiceTitle() {
      return this.#serviceTitle;
    }
    set ServiceTitle(name = "Перевезення") {
      if (!name) throw new Error(`Помилка! Послуга має мати назву`);
      this.#serviceTitle = name;
    }

    get ServicePrice() {
      return this.#servicePrice;
    }
    set ServicePrice(price = 500) {
      if (isNaN(price) || price < 0) throw new Error(`Помилка! Ціна має бути додним числом`);
      this.#servicePrice = price;
    }

    get ServiceExecutionTime() {
      return this.#serviceExecutionTime;
    }
    set ServiceExecutionTime(deadline = 1) {
      if (isNaN(deadline) || deadline < 0) throw new Error(`Помилка! Термін виконання не може бути від'ємним`);
      this.#serviceExecutionTime = deadline;
    }

    toString() {
      return `Послуга ${this.ServiceTitle} коштує ${this.ServicePrice} грн. і має бути виконана за ${this.ServiceExecutionTime} годин.`;
    }
  }

  // ▪	адреси філіалів (країна, місто, вулиця, номер будинку);
  class Branche {
    constructor(country, city, street, buildingNum) {
      this.BrancheCountry = country;
      this.BrancheCity = city;
      this.BrancheStreet = street;
      this.BrancheBuildingNum = buildingNum;
    }
    #brancheCountry;
    #brancheCity;
    #brancheStreet;
    #brancheBuildingNum;

    get BrancheCountry() {
      return this.#brancheCountry;
    }
    get BrancheCity() {
      return this.#brancheCity;
    }
    get BrancheStreet() {
      return this.#brancheStreet;
    }
    get BrancheBuildingNum() {
      return this.#brancheBuildingNum;
    }

    set BrancheCountry(countryName = "Україна") {
      if (!countryName) throw new Error(`Помилка! Країна не може бути без назви`);
      this.#brancheCountry = countryName;
    }
    set BrancheCity(cityName = "Харків") {
      if (!cityName) throw new Error(`Помилка! Місто не може бути без назви`);
      this.#brancheCity = cityName;
    }
    set BrancheStreet(streetName = "Незалежності") {
      if (!streetName) throw new Error(`Помилка! Вулиця не може бути без назви чи без номеру`);
      this.#brancheStreet = streetName;
    }
    set BrancheBuildingNum(buildingNum = 33) {
      if (!buildingNum || buildingNum < 0) throw new Error(`Помилка!Номер будинка має бути додатним числом`);
      this.#brancheBuildingNum = buildingNum;
    }
    toString() {
      return `Філіал: ${this.BrancheCountry}, місто ${this.BrancheCity}, вулиця ${this.BrancheStreet} буд.${this.BrancheBuildingNum}`;
    }
  }

  class Company {
    // fields
    constructor(companyName, foundationDate, servicesList, branchesList) {
      this.CompanyName = companyName;
      this.FoundationDate = foundationDate;
      this.ServicesList = servicesList;
      this.BranchesList = branchesList;
    }
    #companyName;
    #foundationDate;
    #servicesList;
    #branchesList;

    get CompanyName() {
      return this.#companyName;
    }
    set CompanyName(title = "Трансфер") {
      if (!title) throw new Error(`Помилка! Компанія має мати назву`);
      this.#companyName = title;
    }

    get FoundationDate() {
      return this.#foundationDate;
    }
    set FoundationDate(date) {
      if (!(date instanceof FoundationDate)) throw new Error(`Помилка! Некоректна дата`);
      this.#foundationDate = date;
    }

    get ServicesList() {
      return this.#servicesList;
    }
    set ServicesList(servicesList) {
      if (servicesList.length === 0) throw new Error(`Помилка! Список послуг не може бути порожнім`);
      this.#servicesList = servicesList;
    }

    get BranchesList() {
      return this.#branchesList;
    }
    set BranchesList(branchesList) {
      if (branchesList.length === 0) throw new Error(`Помилка! Список філіалов не може бути порожнім`);
      this.#branchesList = branchesList;
    }

    // methods
    // ▪	визначення кількості років існування фірми;
    getCompanyYears() {
      const currentDate = new Date();
      if (this.FoundationDate.Year > currentDate) throw new Error(`Помилка! Ваша фірма створена у майбутньому`);
      return currentDate.getFullYear() - this.FoundationDate.Year;
    }
    // ▪	виведення всіх філіалів фірми у вказаному місті;
    getBranchesByCity(city = "Харків") {
      if (!city) throw new Error(`Помилка! Місто не може бути без назви`);
      const filteredBranches = this.BranchesList.filter((branch) => branch.BrancheCity === city);
      if (filteredBranches.length === 0) throw new Error(`Помилка! У ${city} немає філіалів цієї фірми!`);
      return filteredBranches;
    }
    // ▪	виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
    getSomeServices(serviceCost = 350, deadline = 3) {
      if (serviceCost < 0 || deadline < 0) throw new Error(`Помилка! Ціна та термін мають бути додатними`);
      const filteredService = this.ServicesList.filter((service) => service.ServicePrice <= serviceCost && service.ServiceExecutionTime <= deadline);
      if (filteredService.length === 0) throw new Error(`Помилка! Послуг за вказаними ціною та терміном виконання не знайдені`);
      return filteredService;
    }

    toString() {
      return `<div>Фірма ${this.CompanyName}. ${this.FoundationDate}.</div>
						<div>Фірма надає наступні послуги:
						<div>${this.ServicesList}</div>
						<div>Філіали:<div>
						<div>${this.BranchesList}</div>`;
    }
  }

  try {
    const firmEstablishmentDate = new FoundationDate(1999, 10);
    document.write(firmEstablishmentDate);
    const services = [new Service(`"Таксі, стандарт"`, 200, 1), new Service(`"Таксі, комфорт"`, 300, 2), new Service(`"Доставка"`, 400, 1), new Service(`"Тверезий водій"`, 1300, 3)];
    const branches = [new Branche(), new Branche("Україна", "Київ", "Шевченко", 5), new Branche("Україна", "Львів", "Грушевського", 15), new Branche("Україна", "Дніпро", "Мазепи", 25), new Branche("Україна", "Одеса", "Дерибасівська", 11)];
    const uber = new Company("Убер", firmEstablishmentDate, services, branches);
    document.write(uber);
    const companyYear = uber.getCompanyYears();
    document.write(`<div>Компанія вже існує ${companyYear} років.</div>`);
    const sortByBrancheCity = uber.getBranchesByCity("Харків");
    document.write(`<div>${sortByBrancheCity}</div>`);
    const servicesWithinBudget = uber.getSomeServices(300, 2);
    document.write(`<div>${servicesWithinBudget.join("<br>")}</div>`);
  } catch (error) {
    document.write(error.message);
  }
}
