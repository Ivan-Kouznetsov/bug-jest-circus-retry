const fs = require("fs");
const path = require("path");
fs.writeFileSync(path.join(__dirname, ".tries"), "0", "utf8");
