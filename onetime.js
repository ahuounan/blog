const fs = require("fs");

const data = require("./localDatabase/mockPosts.json");

const output = {};

data.forEach(row => (output[row.id] = row));

fs.writeFileSync("./output.json", JSON.stringify(output));
