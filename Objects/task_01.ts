// Stwórz 2 obiekty: rectangle i circle. Obiekt rectangle powinien mieć właściwości height, width, natomiast circle właściwość radius. Oba obiekty powinny mieć metodę showArea(), która zwróci pole danej figury.
// Wypisz oba obiekty w konsoli. Wypisz w konsoli teksty podstawiając odpowiednie dane w miejsce kropek:

// Kwadrat ma szerokość ... i wysokość ...
// Jego pole to ...
// Koło ma promień ...
// Jego pole to ...

const rectangle = {
  height: 50,
  width: 30,

  showArea() {
    return this.height * this.width;
  },
};

const circle = {
  radius: 7,

  showArea() {
    return Math.PI * Math.pow(this.radius, 2);
  },
};

export function runTask_01() {
  console.log(`\nKwadrat ma szerokość ${rectangle.height} i wysokość ${rectangle.width}`);
  console.log(`Jego pole to ${rectangle.showArea()}`);

  console.log(`\nKoło ma promień ${circle.radius}`);
  console.log(`Jego pole to ${circle.showArea()}\n`);
}
