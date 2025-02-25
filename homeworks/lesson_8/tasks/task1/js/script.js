"use script";

// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має
// хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if (confirm("Почати тестування?")) {
  function getArray(arrElements) {
    let arr = [];
    for (let i = 0; i < arrElements; i++) {
      const randMark = 1 + Math.floor(Math.random() * 5);
      arr.push(randMark);
    }
    return arr;
  }

  function getPupilGraduatePointAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)  {
      sum+=arr[i]
    }
    return sum / arr.length
  }

  function getPupilCategory(arr, gpa) {
    let res = "";
    let mark3 = 0;

    for (let i = 0; i < arr.length; i++) {
      const mark = arr[i];
      if (mark === 1 || mark === 2) {
        return (res = `Двійочник`);
      }
      if (mark === 3) mark3++;
    }

    if (mark3 > 0) res = `Трійочник`;
    else if (gpa === 5) res = `Відмінник`;
    else res = `Хорошист`;

    return res;
  }

  const marksNum = parseInt(prompt(`Введіть кількість предметів`, 1));
  const marks = getArray(marksNum);
  const gpa = getPupilGraduatePointAverage(marks);
  const pupilCategory = getPupilCategory(marks, gpa)
  document.write(pupilCategory);
}
