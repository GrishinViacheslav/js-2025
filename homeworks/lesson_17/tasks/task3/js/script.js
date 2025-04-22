"use strict";
// Задача 3.Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

if (confirm("Почати тестування?")) {
  class Reminder {
    static reminder;
    constructor(message, intervalInSecondsValue = 1) {
      if (Reminder.reminder) return Reminder.reminder;
      this.Message = message;
      this.Interval = intervalInSecondsValue;
      this.messageCallCount = 0;
      this.intervalId = null;
      Reminder.reminder = this;
    }
    // ---------------
    #message;
    #interval;

    get Message() {
      return this.#message;
    }
    set Message(newMesage) {
      if (!newMesage) throw new Error(`Повідомлення не може бути порожнім`);
      this.#message = newMesage;
    }
    get Interval() {
      return this.#interval;
    }
    set Interval(time) {
      if (time < 0) throw new Error(`Інтервал має бути більше 0`);
      this.#interval = time;
    }
    // ------------
    startReminder() {
      if (this.intervalId) throw new Error(`Нагадувач вже працює`);
      this.intervalId = setInterval(() => {
        this.messageCallCount++;
        console.log(`Нагадування '${this.Message}' було вже ${this.messageCallCount} разів`);
      }, this.Interval * 1000);
    }
    stopReminder() {
      if (!this.intervalId) throw new Error(`Нагадувач не працює`);
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log(`Ви зупинили Нагадувач`);
    }
    changeMessage(newMessage) {
      this.Message = newMessage;
    }
  }

  const reminder = new Reminder(`Зустріч о 15:00`, 5);
  reminder.startReminder();
  reminder.changeMessage(`Нове нагадування`);
  reminder.stopReminder();
}
