//Open Database
//Create ObjectStore
//Make transaction

let db;
let openRequest = indexedDB.open("myDataBase");
openRequest.addEventListener("success", (e) => {
  console.log("DB success");
  db = openRequest.result;
});
openRequest.addEventListener("error", (e) => {
  console.log("DB error");
});
openRequest.addEventListener("upgradeneeded", (e) => {
  console.log("DB upgraded and also for initial db creation.");
  db = openRequest.result;

  db.createObjectStore("video", { keyPath: "id" });
  db.createObjectStore("image", { keyPath: "id" });
});
