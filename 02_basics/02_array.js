const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);


const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const simple = another_array.flat(Infinity)
console.table(simple);


console.log(Array.isArray("moksh"));
console.log(Array.from("moksh"));
console.log(Array.from({name:"moksh"})); //interesting

let score1=10;
let score2=102;
let score3=1026;
console.log(Array.of(score1,score2,score3));


