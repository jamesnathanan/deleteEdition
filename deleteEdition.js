"use strict";

const fs = require("fs");

// let rawdata = fs.readFileSync("1.json");
// let data = JSON.parse(rawdata);
// delete data["edition"];
// console.log(data);

// data = JSON.stringify(data, null, 2);

// fs.writeFile("1.json", data, (err) => {
//   if (err) throw err;
//   console.log("Data written to file");
// });

// delete key "edition" in file 1 to 10
for (let i = 1; i <= 10; i++) {
  let fileName = i + ".json";
  let rawdata = fs.readFileSync(fileName);
  let data = JSON.parse(rawdata);
  delete data["edition"];

  data = JSON.stringify(data, null, 2);

  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
}
