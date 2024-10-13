// Stwórz prosty obiekt spaceShip, który będzie miał:

// Właściwości:
// name ustawioną na Enterprise
// currentLocation ustawioną na Earth
// flyDistance ustawione na 0
// Metody:
// flyTo(place, distance), która ustawi obiektowi właściwość currentLocation na odpowiednie miejsce podane w parametrze place oraz doliczy przebyty dystans do flyDistance.

// Metodę showInfo(), która wypisze w konsoli tekst:

// Informacje o statku:
// ----
// Statek ....
// doleciał do miejsca .....
// Statek przeleciał już całkowity dystans ....

// Metodę meetClingon(), która wykona 100 losowań 0-1. Jeżeli minimum połowa będzie pozytywna (większa niż połowa), wtedy powinna wypisać w konsoli:

// Statek .... będący w okolicy .... zwycięsko wyszedł ze spotkania z Klingonami

// jeżeli jednak mniej niż połowa będzie pozytywna, powinien pojawić się żółty tekst w konsoli (console.alert)

// Statek .... będący w okolicy .... został pokonany przez Klingonów

interface Ship {
  name: string;
  currentLocation: string;
  flyDistance: number;
  flyTo(place: string, distance: number): void;
  showInfo(): void;
  meetClingon(chance?: number): void;
}

const spaceShip: Ship = {
  name: "Enterprise",
  currentLocation: "Earth",
  flyDistance: 0,

  flyTo(place: string, distance: number): void {
    this.currentLocation = place;
    this.flyDistance += distance;
  },

  showInfo(): void {
    console.log(`\nInformacje o statu:`);
    console.log(`----------`);
    console.log(`Statek ${this.name}`);
    console.log(`doleciał do miejsca ${this.currentLocation}`);
    console.log(`Statek przleciał już całkowity dystans ${this.flyDistance}`);
  },

  meetClingon() {
    let randomCounter = 0;
    const maxCounter = 100;

    for (let i = 0; i <= maxCounter; i++) {
      if (Math.random() !== 0) {
        randomCounter += 1;
      }
    }

    if (randomCounter > maxCounter / 2) {
      console.log(`\nStatek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami\n`);
    } else {
      console.log(`\nStatek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów\n`);
    }
  },
};

export function runTask_04(): void {
  spaceShip.showInfo();
  spaceShip.meetClingon();

  spaceShip.flyTo("Moon", 2000);
  spaceShip.showInfo();
  spaceShip.meetClingon();

  spaceShip.flyTo("Jupiter", 214000);
  spaceShip.showInfo();
  spaceShip.meetClingon();
}
