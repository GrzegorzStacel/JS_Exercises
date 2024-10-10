// Stwórz obiekt currentUser. Obiekt niech ma właściwości: name, surname, email, www, userType, isActive.
// oraz metodę show(), która wypisze wszystkie te właściwości w konsoli.
// Dodatkowo stwórz metodę setActive(active), która przestawi właściwość isActive na przekazaną wartość, która może być true/false.

const currentUser = {
  name: "Grzegorz",
  surname: "ProVo",
  email: "Provo@theBest.com",
  www: "BangBang",
  userType: "male",
  isActive: true,

  show() {
    console.log(this.name, this.surname, this.email, this.www, this.userType, this.isActive);
  },

  setActive(active) {
    this.isActive = active;
  },
};

export function runTask_02() {
  console.log("\n");
  currentUser.show();
  currentUser.setActive(false);
  currentUser.show();
  console.log("\n");
}
