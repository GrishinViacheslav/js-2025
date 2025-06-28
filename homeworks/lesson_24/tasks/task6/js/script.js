"use strict";

// Задача 6. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

if (confirm("Почати тестування?")) {
  function getSiteVisitorsCount(visitorsLoginList) {
    const visitsCount = new Map();
    for (const login of visitorsLoginList) {
      if (visitsCount.has(login)) visitsCount.set(login, visitsCount.get(login) + 1);
      else visitsCount.set(login, 1);
    }
    return visitsCount;
  }

  const siteVisitorlList = ["User123", "JohnDoe_23", "CoderPro", "KyivExplorer", "TechSavvy", "CoderPro", "MysticRiver", "KyivExplorer", "User123", "JohnDoe_23", "GoldenPhoenix", "WhisperingWind", "KyivExplorer"];
  console.log(getSiteVisitorsCount(siteVisitorlList));
}
