"use strict";

// Задача 6. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь
// у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список
// тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для
// змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

if (confirm("Почати тестування?")) {
  class SportsmensManager {
    constructor(namesList) {
      this.NamesList = namesList;
    }
    #namesList;

    get NamesList() {
      return this.#namesList;
    }
    set NamesList(list) {
      if (list.length === 0) throw new Error(`Помилка! Список імен не може порожнім`);
      this.#namesList = list;
    }

    renderListTitle() {
      const listTitle = document.createElement(`h3`);
      listTitle.className = `title`;
      return listTitle;
    }

    changeSportsmanStatus(event) {
      const currentEl = event.target;
      if (currentEl.tagName === `BUTTON`) {
        const sectionContainer = currentEl.closest(`.section-container`);
        const fullList = sectionContainer.querySelector(`.full-list`);
        const competitionList = sectionContainer.querySelector(`.competition-list`);
        if (currentEl.closest(`.full-block`)) {
          competitionList.append(currentEl.parentElement);
        } else if (currentEl.closest(`.competition-block`)) {
          fullList.append(currentEl.parentElement);
        }
      }
    }

    renderListItemButton() {
      const itemButton = document.createElement(`button`);
      itemButton.className = `item__button`;
      return itemButton;
    }

    renderListItem(name) {
      const listItem = document.createElement(`li`);
      listItem.className = `item-list`;

      const itemLabel = document.createElement(`div`);
      itemLabel.className = `item__label`;
      itemLabel.innerText = name;
      listItem.append(itemLabel);

      const itemButton = this.renderListItemButton();
      listItem.append(itemButton);

      return listItem;
    }

    renderDefaultList() {
      const defaultList = document.createElement(`ul`);
      defaultList.className = `list`;

      return defaultList;
    }

    renderAllSportmensBlock() {
      const fullListContainer = document.createElement(`div`);
      fullListContainer.classList.add(`full-block`);

      const listTitle = this.renderListTitle();
      listTitle.innerText = `Усі спортсмени`;
      fullListContainer.append(listTitle);

      const allSportsmenslist = this.renderDefaultList();
      allSportsmenslist.classList.add(`full-list`);

      for (const name of this.NamesList) {
        const listItem = this.renderListItem(name);
        allSportsmenslist.append(listItem);
      }
      fullListContainer.append(allSportsmenslist);

      return fullListContainer;
    }

    renderSportmensForCompetitionBlock() {
      const competitionListContainer = document.createElement(`div`);
      competitionListContainer.classList.add(`competition-block`);

      const listTitle = this.renderListTitle();
      listTitle.innerText = `Спортсмени на змагання`;
      competitionListContainer.append(listTitle);

      const competitionSportsmenslist = this.renderDefaultList();
      competitionSportsmenslist.classList.add(`competition-list`);
      competitionListContainer.append(competitionSportsmenslist);

      return competitionListContainer;
    }

    render(selector) {
      const sectionContainer = document.createElement(`div`);
      sectionContainer.className = `section-container`;
      sectionContainer.addEventListener(`click`, this.changeSportsmanStatus.bind(this));

      const allSportsmensBlock = this.renderAllSportmensBlock();
      sectionContainer.append(allSportsmensBlock);

      const competitonSportsmensBlock = this.renderSportmensForCompetitionBlock();
      sectionContainer.append(competitonSportsmensBlock);

      if (selector) {
        document.querySelector(selector).append(sectionContainer);
      }
      return sectionContainer;
    }
  }

  const membersList = ["Ivan", "Olga", "Petro", "Oksana"];

  const manager = new SportsmensManager(membersList);
  manager.render(`.task6`);
}
