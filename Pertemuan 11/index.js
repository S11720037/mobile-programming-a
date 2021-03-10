// console.log("satu");
// console.log("dua");
// console.log("tiga");

// Callback

// function greet(fullName) {
//   console.log(`Halo ${fullName}`);
// }

// function introduction(firstName, lastName, callback) {
//   const fullName = `${firstName} ${lastName}`;

//   callback(fullName);
// }

// introduction("arter", "Tendean", fullName => {
//   console.log(fullName);
// });

// setTimeout(() => console.log("ini adalah timeout"), 2000);

// console.log("akhir dari program");

function proses1() {
  console.log("proses 1 telah dijalankan");
}

function proses2(callback) {
  setTimeout(() => console.log("proses 2 telah dijalankan"), 2000);

  callback();
}

function proses3() {
  console.log("proses 3 telah dijalankan");
}

proses1();
proses2(proses3);
// proses3();
