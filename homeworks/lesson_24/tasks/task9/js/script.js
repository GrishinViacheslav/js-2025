"use strict";

// Задача 9 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.

if (confirm("Почати тестування?")) {
  function getHistoryClubStudentNumWhoAttendMathClub(studentList1, studentList2) {
    const mathClubSet = new Set(studentList1);
    const historyClubSet = new Set(studentList2);

    const historyClubStudentNumWhoAttendMathClub = historyClubSet.intersection(mathClubSet);
    return historyClubStudentNumWhoAttendMathClub.size;
  }

  function getStudentsNumAttendAtLeastOneClub(studentList1, studentList2) {
    const mathClubSet = new Set(studentList1);
    const historyClubSet = new Set(studentList2);

    const totalNumStudentsOfClubs = mathClubSet.union(historyClubSet);
    return totalNumStudentsOfClubs.size;
  }

  const mathClubStudents = ["Іванов", "Петренко", "Сидоренко", "Коваленко", "Мельник", "Шевченко", "Поліщук", "Клименко", "Савченко", "Олійник", "Бондаренко", "Ткаченко", "Марченко", "Василенко", "Лисенко"];

  const historyClubStudents = ["Кравченко", "Литвиненко", "Григоренко", "Павленко", "Захаров", "Бойко", "Морозов", "Коваль", "Василенко", "Іванов", "Поліщук", "Мельник", "Ткаченко", "Шевчук", "Рудченко"];

  document.write(`<div>Кількість студентів з гуртка з історії, які також відвідують гурток з математики - ${getHistoryClubStudentNumWhoAttendMathClub(mathClubStudents, historyClubStudents)}</div>`);

  document.write(`<div>Загальна кількість студентів відвідують хоча б один гурток - ${getStudentsNumAttendAtLeastOneClub(mathClubStudents, historyClubStudents)}</div>`);
}
