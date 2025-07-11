"use strict";

// Задача 1. Використовуючи один з АРІ
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних
// Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки. Окремо клас, який буде робити запити і повертати результати.

if (confirm("Почати тестування?")) {
  class Request {
    constructor(url) {
      this.url = url;
    }
    async getServerData() {
      let response = await fetch(`${this.url}`);
      if (response.ok) {
        const data = await response.json();
        return data.message;
      } else {
        throw new Error("Error!");
      }
    }
  }

  class RenderData {
    constructor(source) {
      this.source = source;
    }

    render(containerSelector) {
      const container = document.createElement(`div`);
      container.className = "container";

      const image = document.createElement(`img`);
      image.src = this.source;

      container.append(image);

      if (containerSelector) {
        document.querySelector(containerSelector).append(container);
      } else throw new Error(`Error! There is no ${containerSelector}`);
      return container;
    }
  }

  window.onload = async () => {
    try {
      const request = new Request("https://dog.ceo/api/breeds/image/random");
      const dataUrl = await request.getServerData();

      const picture = new RenderData(dataUrl);
      picture.render(`.task1`);
    } catch (err) {
      console.log(err.message);
    } finally {
      console.log(`Thank you!`);
    }
  };
}
