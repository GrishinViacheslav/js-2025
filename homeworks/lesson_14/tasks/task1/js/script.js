"use strict";

if (confirm('Почати тестування?')) {
  // Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
  // ----- Властивості ------
  // -	назва компанії на час розробки (назву періодично змінюють)
  // -	власник компанії
  // -	споснсори (масив спонсорів)
  //       * прізвище спонсора
  //       * ім’я  спонсора
  //       * сума вкладень спонсора
  // -	рік випуску
  // -	вартість сайту

  const developedWebsitesByCompany = [
    {
      companyName: "TechNova Solutions",
      owner: "Олександр Ковальчук",
      sponsors: [
        { lastName: "Петренко", firstName: "Іван", investment: 1000 },
        { lastName: "Сидоренко", firstName: "Марія", investment: 6000 },
      ],
      releaseYear: 2007,
      cost: 8000,
    },
    {
      companyName: "WebGenius Ltd.",
      owner: "Анна Мельник",
      sponsors: [
        { lastName: "Кравченко", firstName: "Олег", investment: 40000 },
        { lastName: "Ткаченко", firstName: "Ольга", investment: 25000 },
      ],
      releaseYear: 2018,
      cost: 195000,
    },
    {
      companyName: "NextGen Devs",
      owner: "Дмитро Савченко",
      sponsors: [
        { lastName: "Іванов", firstName: "Василь", investment: 70000 },
        { lastName: "Бондаренко", firstName: "Людмила", investment: 45000 },
      ],
      releaseYear: 2021,
      cost: 150000,
    },
    {
      companyName: "SoftWave Studio",
      owner: "Євген Романенко",
      sponsors: [
        { lastName: "Гриценко", firstName: "Тарас", investment: 60000 },
        { lastName: "Шевченко", firstName: "Ірина", investment: 32000 },
      ],
      releaseYear: 2019,
      cost: 105000,
    },
    {
      companyName: "SkyNet Innovations",
      owner: "Олеся Вербицька",
      sponsors: [
        { lastName: "Дорошенко", firstName: "Максим", investment: 80000 },
        { lastName: "Лисенко", firstName: "Світлана", investment: 50000 },
      ],
      releaseYear: 2005,
      cost: 180000,
    },
  ];

  // Знайти:
  // 1) загальну вартість усіх сайтів
  const totalCost = developedWebsitesByCompany.reduce((prevCost, site)=> prevCost + site.cost, 0);
  console.log(totalCost)

  // 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
  const websitesReleasedFrom2000To2009Count = developedWebsitesByCompany.reduce((count, site)=> site.releaseYear >=2000 && site.releaseYear <=2009 ? count + 1 : count,0)
  console.log(websitesReleasedFrom2000To2009Count)

  // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
  const investmentsBigger100000Count = developedWebsitesByCompany.filter(site => site.sponsors.reduce((prevCount, sponsors)=> prevCount + sponsors.investment,0) > 100000).length
  console.log(investmentsBigger100000Count)

  // 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
  const sponsorsList = [];
  developedWebsitesByCompany.forEach(site=>sponsorsList.push(...site.sponsors))
  console.log(sponsorsList)

  // 5) знайти рік, коли прибуток був найбільшим
  const maxCostYear = developedWebsitesByCompany.reduce((prevSite, currentSite)=> prevSite.cost > currentSite.cost ? prevSite : currentSite).releaseYear
  console.log(maxCostYear)

  // 6) упорядкувати список за спаданням прибутку
  const copyObj = JSON.parse(JSON.stringify(developedWebsitesByCompany))
  const sortedObj = copyObj.sort((prevSite, currentSite)=> currentSite.cost - prevSite.cost)
  console.log(sortedObj)

  // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
  const sitesCostLess10000 = copyObj.filter(site => site.cost <= 10000)
  const sitesCostBigger10000 = copyObj.filter(site => site.cost > 10000)
  console.log(sitesCostLess10000);
  console.log(sitesCostBigger10000);
}
