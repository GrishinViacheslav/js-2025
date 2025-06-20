"use strict";

// Задача 19. Зберігати у пам’яті список справ, які користувачу треба виконати
// (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і
// виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок»,
// то видаляти цю задачу.

if (confirm("Почати тестування?")) {
  class ToDoList {
    constructor(tasksList, intervalInSeconds = 3) {
      this.TasksList = tasksList;
      this.IntervalInSeconds = intervalInSeconds;
    }
    #tasksList;
    #intervalInSeconds;

    get TasksList() {
      return this.#tasksList;
    }
    get IntervalInSeconds() {
      return this.#intervalInSeconds;
    }

    set TasksList(newList) {
      if (newList.length === 0) throw new Error("Error! There is the empty list");
      this.#tasksList = newList;
    }
    set IntervalInSeconds(interval) {
      if (interval <= 0) throw new Error("Error! Interval will be more than 0");
      this.#intervalInSeconds = interval;
    }

    getRandomIndexOfList(elemsNum) {
      return Math.floor(Math.random() * elemsNum);
    }
    setListInLocalStorage() {
      if (Object.keys(localStorage).some((key) => key.match(/^task_/g))) return;
      for (let i = 0; i < this.TasksList.length; i++) {
        localStorage.setItem(`task_${i}`, this.TasksList[i]);
      }
    }
    showTheTask() {
      this.setListInLocalStorage();
      const intervalId = setInterval(() => {
        const taskKeys = Object.keys(localStorage).filter((key) => key.match(/^task_/g));

        if (taskKeys.length === 0) {
          clearInterval(intervalId);
          alert(`Всі справи виконано!`);
          return;
        }
        const randomIndex = this.getRandomIndexOfList(taskKeys.length);
        const taskId = taskKeys[randomIndex];
        const task = localStorage.getItem(taskId);
        const notice = confirm(`'${task}'`);
        if (notice) localStorage.removeItem(taskId);
      }, this.IntervalInSeconds * 1000);
    }
  }

  const toDoList = ["Прочитати матеріали по LocalStorage", "Зробити домашку", "Завантажити відео на ютуб", "Сходити за покупками", "Зустріч о 15:00", "Замовити квитки в кіно", "Донат на rusoriz"];
  const tasksList = new ToDoList(toDoList, 5);
  tasksList.showTheTask();
}
