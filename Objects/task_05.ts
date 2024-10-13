// Stwórz obiekt book, który będzie miał:

// Właściwości:
// users która będzie tablicą użytkowników (na początku pusta)

// Metody:
// addUser(name, age, phone) - która doda to tablicy users nowy obiekt, który będzie miał klucze: name, age, phone z przekazanymi do tej funkcji danymi
// showUsers() - która po odpaleniu wypisze w konsoli tekst: Wszyscy użytkownicy w książce a następnie w pętli wypisze wszystkich użytkowników
// findByName(name) - która wypisze w konsoli pierwszego użytkownika, który ma szukane imię lub false jeżeli nie znajdzie.
// findByPhone(phone) - która wypisze w konsoli pierwszego użytkownika, który ma szukany telefon lub false jeżeli nie znajdzie
// getCount() - która wypisze ile jest użytkowników w tabeli
type User = {
  name: string;
  age: number;
  phone: number;
};

interface Book {
  users: User[];
  addUser(name: string, age: number, phone: number): void;
  showUsers(): void;
  findByName(name: string): void;
  findByPhone(phone: number): void;
  getCount(): void;
}

const book: Book = {
  users: [] as User[],

  addUser(name: string, age: number, phone: number): void {
    if (!name || typeof name !== "string" || name.trim() === "") {
      console.warn("\nInvalid name:", name);
      return;
    }

    if (typeof age !== "number" || age < 18 || age > 100 || !Number.isInteger(age)) {
      console.warn("\nInvalid age:", age);
      return;
    }

    if (typeof phone !== "number" || phone <= 0 || phone.toString().length !== 3) {
      console.warn("\nInvalid phone number: ", phone);
      return;
    }

    this.users.push({ name, age, phone });
  },

  showUsers(): void {
    console.log("\nWszyscy użytkownicy w książce: ");

    this.users.forEach((element: User) => {
      console.log(`Imie: ${element.name}, Wiek: ${element.age}, Telefon: ${element.phone}`);
    });

    console.log("\n");
  },

  findByName(name: string): void {
    if (!name || typeof name !== "string" || name.trim() === "") {
      console.warn("Invalid name:", name, "\n");
      return;
    }

    const user = this.users.find((item: User) => item.name === name);
    console.log(user ? user.name : false, "\n");
  },

  findByPhone(phone: number): void {
    if (!phone || typeof phone !== "number" || phone <= 0 || phone.toString().length !== 3) {
      console.warn("Invalid phone number:", phone, "\n");
      return;
    }

    const user = this.users.find((item: User) => item.phone === phone);
    console.log(user ? user.name : false, "\n");
  },

  getCount(): void {
    console.log(this.users.length, "\n");
  },
};

export function runTask_05(): void {
  book.addUser("Marta", 21, 111);
  book.addUser("Vlad", 30, 111);
  book.addUser("Ala", 17, 222);
  book.addUser("Bart", 37, 333);
  book.showUsers();
  book.findByName("Marta");
  book.findByName("Martar");
  book.findByName("");
  book.findByPhone(222);
  book.findByPhone(123);
  book.getCount();
}
