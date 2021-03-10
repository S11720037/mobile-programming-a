/* callback */
function mandi() {
  console.log("Mandi");
}

function sarapan() {
  setTimeout(() => {
    console.log("Sarapan tertunda 3 detik");
  }, 3000);
}

function berangkatSekolah(callback) {
  callback;

  console.log("Berangkat Sekolah");
}

mandi();
sarapan();
berangkatSekolah(sarapan());

/* promise */
function helloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World"), 2000);
  });
}

async function message() {
  const msg = await helloWorld();
  console.log(msg);
}

message();

/* fetch */
function ambilDataUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      console.log(users);
    });
}

ambilDataUser();
