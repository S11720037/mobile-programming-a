// Class
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  bekerja = () => {
    return `${this.nama} sedang bekerja seperti biasa.`;
  };

  tidur = () => {
    return `${this.nama} sedang tidur.`;
  };
}

const user1 = new Orang("Tendean Arter", 21);
console.log(user1.bekerja());

// Inheritance
class Pelajar extends Orang {
  constructor(nama, umur, namaSekolah) {
    super(nama, umur);

    this.namaSekolah = namaSekolah;
  }

  belajar = () => {
    return `${this.nama} belajar di ${this.namaSekolah}`;
  };
}

const user = new Pelajar("John", 17, "Unklab");
console.log(user);
// console.log(user.belajar());
