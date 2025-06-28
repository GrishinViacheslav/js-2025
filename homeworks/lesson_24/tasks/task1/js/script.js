"use strict";

// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

if (confirm("Почати тестування?")) {
  class PhoneNumber {
    constructor(phoneNumber) {
      this.phoneNumber = phoneNumber;
    }

    getOperatorName() {
      const phone = this.phoneNumber.replace(/\s|-|\(|\)/g, "");
      let res;
      if (/^((\+?38)?0(50|66|95|99))\d{7}$/.test(phone)) res = `Vodafone`;
      else if (/^((\+?38)?0(67|68|97|98))\d{7}$/.test(phone)) res = `Kyivstar`;
      else if (/^((\+?38)?0(63|73))\d{7}$/.test(phone)) res = `Life`;
      else res = `Unknown operator`;
      return res;
    }
    [Symbol.toPrimitive](hint) {
      return hint === "string" ? this.getOperatorName() : this.phoneNumber;
    }
  }

  const phone = new PhoneNumber(`+380986134527`);
  document.write(phone);
}
