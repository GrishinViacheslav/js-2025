"use strict";

// Задача 5.  Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для кожного із авторів.

if (confirm("Почати тестування?")) {
  function getTotalBookCostEachAuthor(booksList) {
    const map = new Map();
    for (const { author, price } of booksList) {
      if (map.has(author)) map.set(author, map.get(author) + price);
      else map.set(author, price);
    }
    return map;
  }

  const booksList = [
    {
      title: "1984",
      releaseYear: 1949,
      author: "Джордж Орвелл",
      price: 320.5,
    },
    {
      title: "Гаррі Поттер і філософський камінь",
      releaseYear: 1997,
      author: "Джоан Роулінг",
      price: 450.75,
    },
    {
      title: "Володар перснів: Братство Персня",
      releaseYear: 1954,
      author: "Дж.Р.Р. Толкін",
      price: 510,
    },
    {
      title: "Маленький принц",
      releaseYear: 1943,
      author: "Антуан де Сент-Екзюпері",
      price: 180.0,
    },
    {
      title: "Гаррі Поттер і таємна кімната",
      releaseYear: 1999,
      author: "Джоан Роулінг",
      price: 573.5,
    },
    {
      title: "Володар перснів: Дві башти",
      releaseYear: 1960,
      author: "Дж.Р.Р. Толкін",
      price: 750,
    },
  ];
  console.log(getTotalBookCostEachAuthor(booksList));
}
