const myDb = require('../db/myDb')
myDb.bulkCreate('rayhan',10,5)
console.log(myDb.find())