"use strict";

// Задача 7. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

if (confirm("Почати тестування?")) {
  function getFacultiesNumber(studentsList) {
    const facultiesNum = new Set();
    for (let { faculty } of studentsList) {
      facultiesNum.add(faculty);
    }
    return facultiesNum.size;
  }

  function getStudentOfEachCourse(studentsList) {
    const studentsOfCourse = new Map();
    for (const { course } of studentsList) {
      if (studentsOfCourse.has(course)) studentsOfCourse.set(course, studentsOfCourse.get(course) + 1);
      else studentsOfCourse.set(course, 1);
    }
    return studentsOfCourse;
  }

  const studentsList = [
    {
      fullName: "Іванов Іван Іванович",
      course: 3,
      faculty: "Комп'ютерних наук",
    },
    {
      fullName: "Петрова Анна Сергіївна",
      course: 2,
      faculty: "Економіки",
    },
    {
      fullName: "Сидоренко Олег Дмитрович",
      course: 4,
      faculty: "Права",
    },
    {
      fullName: "Коваленко Марія Вікторівна",
      course: 1,
      faculty: "Філології",
    },
    {
      fullName: "Мельник Андрій Олександрович",
      course: 3,
      faculty: "Економіки",
    },
    {
      fullName: "Ткаченко Ольга Петрівна",
      course: 2,
      faculty: "Права",
    },
    {
      fullName: "Кравчук Денис Андрійович",
      course: 4,
      faculty: "Комп'ютерних наук",
    },
    {
      fullName: "Шевченко Вікторія Юріївна",
      course: 1,
      faculty: "Журналістики",
    },
    {
      fullName: "Григоренко Максим Анатолійович",
      course: 3,
      faculty: "Психології",
    },
    {
      fullName: "Лисенко Катерина Ігорівна",
      course: 2,
      faculty: "Комп'ютерних наук",
    },
  ];
  console.log(getFacultiesNumber(studentsList));
  console.log(getStudentOfEachCourse(studentsList));
}
