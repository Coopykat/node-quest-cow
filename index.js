const information = require('./information');
var cowsay = require('cowsay');


console.log("hello")

const message = 'Hello, I am a cow!';
const options = {
  text: message,
  e: information.name,
  T: information.campus
};

const cowMessage = cowsay.say(options);
console.log(cowMessage);