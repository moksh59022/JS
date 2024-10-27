const name = "moksh"
const value = "40"
// console.log(name+value+"hlo");

console.log(`hello my name is ${name} and my repo is ${value}`);

const gameName = new String('moks-h')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2))
console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,2);
console.log(newString);

const anotherString = gameName.slice(-4,5)
console.log(anotherString);

const newStringOne = "  moksh   "
console.log(newStringOne.trim());

let url = "https://moksh.com/moksh%20sharma"
url=url.replace('%20','-')
console.log(url);

console.log(url.includes('moksh'));

console.log(gameName.split('-'));
