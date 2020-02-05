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

/*
var inventory = [];

function fillArray() {
  inventory["water"] = 100,
    inventory["soda"] = 100,
    inventory["detergent"] = 50,
    inventory["apple"] = 100,
    inventory["banana"] = 100,
    inventory["tomato"] = 100,
    inventory["bread"] = 50,
    inventory["butter"] = 50,
    inventory["milk"] = 50,
    inventory["chicken"] = 50;
}

name = [a, b, c];
qty = [10, 20, 53];

for(let i = 0; i < name.length; i++) {
  if(input == name[i]) {
    qty[i] -= 1;
  }
}

fillArray();

console.log(inventory);
*/

var storeVolume = [];
var inventory = [
                'potatoes',
                'soap',
                'cheese',
                'milk',
                'cereal',
                'cookies',
                'bananas',
                'peanut butter',
                'juice',
                'sugar'
];

let quanty = [50, 75, 70, 45, 65, 80, 35, 10, 15, 1];
// used to show store inventory quantity
let potatoes = 50
let soap = 75
let cheese = 70
let milk = 45
let cereal = 65
let cookies = 80
let bananas = 35
let peanutbutter = 10
let juice = 15
let sugar = 1
// used to represent store quantity array
let input = userinput

  function add() {
    let input = document.getElementById('userinput').value;
    let index = inventory.indexOf(input)
    if (inventory.includes(input) && quantity[index] > 0) {
      storeVolume.push(input);
      alert("Item Added to storeVolume.")
      let index = inventory.indexOf(input);
      if (storeVolume[index] >= 1) (
        storeVolume[index] -= 1;
    } else {
        prompt()
      }
    inventory.forEach(array => {
      if (input === array[0]) {
        array[1] += 1;


// Then create new foods.
var carrots = new FoodItem({
  name: "Carrots",
  amount: 50,
  decrease: 2
});

carrots.eat();

(function() {
  ("#cart-items").slideUp();
  (".cart").on("click", function() {
    ("#cart-items").slideToggle();
  });

  ("#items-basket").text("(" + $("#list-item").children().length + ")");

  (".item").on("click", function() {
    ("#cart-items").slideDown();
    setTimeout(function() {
      ("#cart-items").slideUp();
    }, 2000);
    //add items to basket
    (this).each(function() {
      var name = $(this)
        .children(".item-detail")
        .children("h4")
        .text();
      var remove = "<button class='remove'> X </button>";
      var cena =
        "<span class='eachPrice'>" +
        parseFloat(
          (this)
            .children(".item-detail")
            .children(".prices")
            .children(".price")
            .text()
        ) +
        "</span>";
      ("#list-item").append(
        "<li>" + name + "&#09; - &#09;" + cena + "$" + remove + "</li>"
      );

      //number of items in basket
      ("#items-basket").text("(" + $("#list-item").children().length + ")");
      ("#items-basket").text();

      //calculate total price
      var totalPrice = 0;
      (".eachPrice").each(function() {
        var cenaEach = parseFloat($(this).text());
        totalPrice += cenaEach;
      });
      ("#total-price").text(totalPrice + "$");
    });

    //remove items from basket
  
