// Stwórz obiekt book, który będzie miał właściwości: title, author, pageCount, publisher.
// oraz metodę: showDetails(), która zrobi pętlę po tym obiekcie wypisując wszystkie jego klucze oraz ich wartości. Metoda ta nie powinna wypisywać tylko funkcji showDetails().
// Wypisywanie właściwości wykonaj za pomocą pętli for in, oraz pętli po kolekcjach Object.keys(), Object.values(), Object.entries().

interface Book {
  title: string;
  author: string;
  pageCount: number;
  publisher: string;
  showDetails(): void;
}

const book: Book = {
  title: "I Love React",
  author: "ProVo",
  pageCount: 1550,
  publisher: "NoOne",

  showDetails(): void {
    console.log("\nPętla for_in");
    for (let key in this) {
      if (this.hasOwnPropoerty(key) && typeof this[key] !== "function") console.log(this[key]);
    }

    console.log("\nPętla po kolekcji Object.keys");
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== "function") console.log(this[key]);
    });

    console.log("\nPętla po kolekcji Object.values");
    Object.values(this).forEach((key) => {
      if (typeof key !== "function") console.log(key);
    });

    console.log("\nPętla po kolekcji Object.entries");
    Object.entries(this).forEach(([key, value]) => {
      if (typeof value !== "function") console.log(value);
    });

    console.log("\n");
  },
};

export function runTask_03(): void {
  book.showDetails();
}
