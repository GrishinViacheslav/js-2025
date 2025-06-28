"use strict";

// Задача 4. Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).

if (confirm("Почати тестування?")) {
  function getDomainsList(urlList) {
    return urlList.map((url) => {
      const index = url.lastIndexOf(".") + 1;
      return url.slice(index);
    });
  }

  function getDomainsCount(domainsList) {
    const map = new Map();
    for (const domain of domainsList) {
      if (map.has(domain)) map.set(domain, map.get(domain) + 1);
      else map.set(domain, 1);
    }
    return map;
  }

  const urlList = ["https://github.com", "https://www.youtube.com", "https://www.harvard.edu", "https://www.wikipedia.org", "https://www.archive.org", "https://www.stanford.edu", "https://www.mozilla.org"];
  console.log(getDomainsCount(getDomainsList(urlList)));
}
