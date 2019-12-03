const fs = require('fs')
let readDir = fs.readdirSync(__dirname)
readDir.reduce((entries,dir) => {
  console.log(entries + " " + dir);
})