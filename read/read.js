const fs = require("fs");
const csv = require("csv");

const results = [];

fs.createReadStream("sample.csv")
    .pipe(csv.parse({trim: true, skip_empty_lines: true, columns: true}))
    .on("data", (row) => {
        results.push(row);
    })
    .on("end", () => {
        console.log(results);
        console.log("CSV parsing complete");
    });
