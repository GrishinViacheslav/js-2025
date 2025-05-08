"use strict";

// Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)

if (confirm("Почати тестування?")) {
  class Form {
    constructor(inputAmount = 5) {
      this.inputAmount = inputAmount;
    }

    onChangeInputValue(event) {
      const currentInput = event.target;
      if (currentInput.tagName === `INPUT`) {
        const currentFormItem = currentInput.parentElement;
        const currentInputValue = parseFloat(currentInput.value);
        let prevElItem = currentFormItem.previousElementSibling;

        let tempValue = currentInputValue;
        tempValue = currentInputValue;
        while (prevElItem) {
          tempValue--;
          const input = prevElItem.querySelector(`.form__input`);
          if (input) {
            input.value = tempValue;
          }
          prevElItem = prevElItem.previousElementSibling;
        }

        let nextElItem = currentFormItem.nextElementSibling;
        tempValue = currentInputValue;
        while (nextElItem) {
          tempValue++;
          const input = nextElItem.querySelector(`.form__input`);
          if (input) {
            input.value = tempValue;
          }
          nextElItem = nextElItem.nextElementSibling;
        }
      }
    }

    renderForm() {
      const form = document.createElement(`form`);
      form.className = `form`;

      for (let i = 1; i <= this.inputAmount; i++) {
        const formItem = document.createElement(`div`);
        formItem.className = `form__item`;

        const formLabel = document.createElement(`label`);
        formLabel.setAttribute(`for`, `form-input${i}`);
        formLabel.innerText = `Input ${i}`;
        formItem.append(formLabel);

        const formInput = document.createElement(`input`);
        formInput.type = `number`;
        formInput.id = `form-input${i}`;
        formInput.className = `form__input`;
        formItem.append(formInput);

        form.append(formItem);
      }
      return form;
    }

    render(selector) {
      const form = this.renderForm();
      if (selector) {
        form.addEventListener(`change`, this.onChangeInputValue.bind(this));
        document.querySelector(selector).append(form);
      }
      return form;
    }
  }

  const task2 = new Form();
  task2.render(`.task2__container`);
}
