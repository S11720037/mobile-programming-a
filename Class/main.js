class Mobil {
  constructor(warna, merek) {
    this.warna = warna;
    this.merek = merek;
  }

  nylakan = () => {
    console.log(`Mobil ${this.warna} bermerek ${this.merek} telah menyala.`);
  };
}

const satu = new Mobil("Hitam", "Honda");

satu.nylakan();

console.log("arter tendean");

class Toyota extends Mobil {
  constructor(warna, merek, cc) {
    super(warna, merek);
  }
}

const dua = new Toyota("Putih", "Lorem");

dua.nylakan();
