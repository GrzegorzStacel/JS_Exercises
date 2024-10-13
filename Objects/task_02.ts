// Stwórz obiekt currentUser. Obiekt niech ma właściwości: name, surname, email, www, userType, isActive.
// oraz metodę show(), która wypisze wszystkie te właściwości w konsoli.
// Dodatkowo stwórz metodę setActive(active), która przestawi właściwość isActive na przekazaną wartość, która może być true/false.

interface User {
  name: string;
  surname: string;
  email: string;
  www: string;
  userType: string;
  isActive: boolean;
  show(): void;
  setActive(active: boolean): void;
}

const currentUser: User = {
  name: "Grzegorz",
  surname: "ProVo",
  email: "Provo@theBest.com",
  www: "BangBang",
  userType: "male",
  isActive: true,

  show(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Surname: ${this.surname}`);
    console.log(`Email: ${this.email}`);
    console.log(`WWW: ${this.www}`);
    console.log(`User Type: ${this.userType}`);
    console.log(`Active: ${this.isActive}`);
  },

  setActive(active: boolean): void {
    this.isActive = active;
  },
};

export function runTask_02(): void {
  console.log("\n");
  currentUser.show();
  currentUser.setActive(false);
  currentUser.show();
  console.log("\n");
}
