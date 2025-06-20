"use strict";

// Задача 18. Користувач може змінювати колір фону, що вибирає користувач з використанням input type="color". Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного
//сеансу.

if (confirm("Почати тестування?")) {
  function initValues() {
    let bgColor = localStorage.getItem("backgroundColor");
    if (!bgColor) {
      bgColor = "#f7f8f9";
      localStorage.setItem("backgroundColor", bgColor);
    }
    document.body.style.backgroundColor = bgColor;
    document.getElementById("color__input").value = bgColor;

    const bgColorChangesNum = parseInt(sessionStorage.getItem("count") || 0);
    document.getElementById("count").innerText = bgColorChangesNum;
  }

  function userChangePageBgColor() {
    const userColor = this.value;
    document.body.style.backgroundColor = userColor;
    localStorage.setItem("backgroundColor", userColor);

    let bgColorChangesNum = parseInt(sessionStorage.getItem("count") || 0);
    bgColorChangesNum++;
    sessionStorage.setItem("count", bgColorChangesNum);
    document.getElementById("count").innerText = bgColorChangesNum;
  }

  window.onload = () => {
    initValues();
    document.getElementById("color__input").onchange = userChangePageBgColor;
  };
}
