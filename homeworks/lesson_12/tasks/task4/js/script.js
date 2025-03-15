"use strict";

//? Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком .

if (confirm("Почати тестування?")) {
  function getRandArr(length = 30, min = 1, max = 100) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      const randNum = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(randNum);
    }
    return arr;
  }
  const randNumArr = getRandArr();
  document.write(`оригінальний масив ${randNumArr}`);
  document.write(`<hr>`);

  function bubbleSort(arr) {
    let changed;
    let res = "";
    do {
      changed = false;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          let tmp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = tmp;
          changed = true;
          res += `<table><tr><td>${arr}</td></tr></table>`;
        }
      }
    } while (changed);
    return res;
  }

  function coctailSort(arr) {
    let res = "",
      leftIndex = 0,
      rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
      let changed = false;
      for (let i = leftIndex + 1; i <= rightIndex; i++) {
        if (arr[i] < arr[i - 1]) {
          [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
          changed = true;
          res += `<table><tr><td>${arr}<td><tr></table>`;
        }
      }
      rightIndex--;
      if (!changed) break;

      for (let i = rightIndex; i > leftIndex; i--) {
        if (arr[i] < arr[i - 1]) {
          [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
          changed = true;
          res += `<table><tr><td>${arr}</td></tr></table>`;
        }
      }
      leftIndex++;
      if (!changed) break;
    }
    return res;
  }

  function insertionSort(arr) {
    let res = "";
    for (let i = 1; i < arr.length; i++) {
      const currentEl = arr[i];
      let prevEl = i - 1;
      while (prevEl >= 0 && arr[prevEl] > currentEl) {
        arr[prevEl + 1] = arr[prevEl];
        prevEl--;
      }
      arr[prevEl + 1] = currentEl;
      res += `<table><tr><td>${arr}</td></tr></table>`;
    }
    return res;
  }

  const copyArr1 = [...randNumArr];
  const copyArr2 = [...randNumArr];
  document.write(bubbleSort(randNumArr));
  document.write(`<hr>`);
  document.write(coctailSort(copyArr1));
  document.write(`<hr>`);
  document.write(insertionSort(copyArr2));
}
