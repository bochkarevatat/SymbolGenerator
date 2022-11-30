/* eslint-disable no-plusplus */
/* eslint-disable no-console */
export default class Team {
  constructor() {
    this.characters = new Set();
  }

  addChar(...heroes) {
    for (const item of heroes) {
      this.characters.add(item);
    }
  }

  *[Symbol.iterator]() {
    console.log(this);
    const characters = Array.from(this.characters);
    for (const member of characters) {
      yield member;
    }
  }
}
