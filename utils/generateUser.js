const fs = require('fs')
const path = require('path')
const _ = require('lodash')

//TODO: Add Global Names Path
//TODO: Generate json from names
//TODO: Use Lodash to generate Unique Titles
//TODO: Add Job Titles
//TODO: Add Moment for Dates
//TODO: Check For treeshaking

const generateUser = (pathtofile) => {
   var namesArray = fs.readFileSync(pathtofile, 'utf8').split('\n');
   return namesArray
}

const Male = generateUser(path.join(__dirname, '../lib/Male/All.txt'))

module.exports = {
   Male
};


// var fs = require('fs');
// fs.readFile('file.txt', function(err, data) {
//     if(err) throw err;
//     var array = data.toString().split("\n");
//     for(i in array) {
//         console.log(array[i]);
//     }
// });


