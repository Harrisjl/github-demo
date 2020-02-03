/*//Exercise array
make an array of 10 grocery store items loop through that array and log each item.
loop through a string at least 10 characters long and log each character
make that string upper case

*/

var myFruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Peach",
  "Necturine",
  "Cherry",
  "Lemon",
  "Prune",
  "Pear"
];
var arrayLength = myFruits.length;
for (i = 0; i < arrayLength; i++) {
  console.log(myFruits[i]);
}

const str = "VISUAL STUDIO CODE";
const strArray = str.split("");
strArray.map(s => console.log(s));
