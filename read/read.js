const fs = require("fs");
const csv = require("csv");

fs.createReadStream("sample.csv")
  .pipe(csv.parse())
  .on("data", (row) => {
    console.log(row);
  })
  .on("end", () => {
    console.log("CSV parsing complete");
  });
