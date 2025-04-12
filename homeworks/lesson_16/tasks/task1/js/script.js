"use strict";

// Задача 1. Створити клас TDate для роботи із датами у форматі“день.місяць.рік”. Дата представляється структурою із трьома полями.Реалізувати методи збільшення/зменшення дати на певну кількість днів,місяців чи років. Введення та виведення дати реалізувати за допомогою методу toString.

if (confirm("Почати тестування?")) {
  class TDate {
    constructor(initialDayNum, initialMonthNum, initialYearNum) {
      this.Day = initialDayNum;
      this.Month = initialMonthNum;
      this.Year = initialYearNum;
    }
    #day;
    #month;
    #year;
    // -------------------------------
    get Day() {
      return this.#day;
    }
    set Day(newDay) {
      if (newDay < 1 || newDay > this.getDaysInMonth()) throw new Error(`Не корректе значення, день не може бути меншим за 1 і більше аніж {}!`);
      this.#day = newDay;
    }
    // -------------------------------
    get Month() {
      return this.#month;
    }
    set Month(newMonth) {
      if (newMonth < 1 || newMonth > 12) throw new Error(`Не корректе значення, місяць не може бути меншим за 1 і більшим за 12!`);
      this.#month = newMonth;
    }
    // -------------------------------
    get Year() {
      return this.#year;
    }
    set Year(newYear) {
      if (newYear < 0) throw new Error(`Не корректе значення, значення року не може бути від'ємним!`);
      this.#year = newYear;
    }
    // -------------------------------
    // методи

    // чи є рік високосним
    isLeapYear() {
      return (this.Year % 4 === 0 && this.Year % 100 > 0) || this.Year % 400 === 0;
    }

    getDaysInMonth() {
      const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (this.Month === 2 && this.isLeapYear()) {
        return 29;
      }
      return daysInEachMonth[this.Month - 1];
    }

    // Метод збільшення дати на певну кількість днів
    increaseDay(dayNum = 1) {
      if (dayNum < 0) throw new Error(`Не можна додавати від'ємну кількість днів`);
      let totalDays = this.Day + dayNum;
      if (totalDays <= this.getDaysInMonth()) this.Day += dayNum;
      else {
        let currentDaysInMonth;
        do {
          currentDaysInMonth = this.getDaysInMonth();
          totalDays -= currentDaysInMonth;
          this.increaseMonth();
        } while (totalDays > currentDaysInMonth);
        this.Day = totalDays;
      }
    }
    // Метод зменшення дати на певну кількість днів
    decreaseDay(dayNum = 1) {
      if (dayNum < 0) throw new Error(`Не можна віднімати від'ємну кількість днів`);
      if (this.Day > dayNum) this.Day -= dayNum;
      else {
        let totalDays = dayNum - this.Day;
        this.decreaseMonth();
        let currentDaysInMonth = this.getDaysInMonth();
        while (totalDays >= currentDaysInMonth) {
          totalDays -= currentDaysInMonth;
          this.decreaseMonth();
          currentDaysInMonth = this.getDaysInMonth();
        }
        this.Day = currentDaysInMonth - totalDays;
      }
    }

    // Метод збільшення дати на певну кількість місяців
    increaseMonth(monthNum = 1) {
      if (monthNum < 0) throw new Error(`Не можна додавати від'ємну кількість місяців`);
      const totalMonths = this.Month + monthNum;
      if (totalMonths > 12) {
        const addYears = Math.floor(totalMonths / 12);
        this.increaseYear(addYears);
        this.Month = ((totalMonths - 1) % 12) + 1;
      } else this.Month += monthNum;

      if (this.Day > this.getDaysInMonth()) this.Day = this.getDaysInMonth();
    }
    // Метод зменшення дати на певну кількість місяців
    decreaseMonth(monthNum = 1) {
      if (monthNum < 0) throw new Error(`Не можна віднімати від'ємну кількість місяців`);
      const totalMonts = this.Year * 12 + (this.Month - 1);
      const decreaseTotalMonts = totalMonts - monthNum;
      if (decreaseTotalMonts < 0) throw new Error(`Помилка! Забагато віднімаєте, виходить період до нашої ери`);
      this.Year = Math.floor(decreaseTotalMonts / 12);
      this.Month = ((decreaseTotalMonts - 1) % 12) + 1;

      if (this.Day > this.getDaysInMonth()) this.Day = this.getDaysInMonth();
    }

    // Реалізувати методи збільшення/зменшення дати на певну кількість років
    increaseYear(yearNum = 1) {
      if (yearNum < 0) throw new Error(`Не можна додавати від'ємну кількість років`);
      this.Year += yearNum;
    }

    decreaseYear(yearNum = 1) {
      if (yearNum < 0) throw new Error(`Не можна відняти від'ємну кількість років`);
      if (this.Year - yearNum < 0) throw new Error(`Помилка! Забагато віднімаєте, виходить період до нашої ери`);
      this.Year -= yearNum;
    }

    toString() {
      return `${this.Day}.${this.Month}.${this.Year}<br>`;
    }
  }

  try {
    const date = new TDate(4, 5, 2000);
    document.write(`<div>Поточна дата: ${date}</div>`);
    date.increaseDay(120);
    document.write(`<div>Поточна дата після збільшення днів: ${date}</div>`);
    date.decreaseMonth(22);
    document.write(`<div>Поточна дата після зменшення місяців: ${date}</div>`);
  } catch (error) {
    document.write(error.message);
  }
}
