// var myAge = 25;

// while (myAge < 10) {
//     console.log("I am older")
//     myAge++
// }
// document.write("I an still young")

// var links = document.getElementsByTagName("a")

// for (i = 0; i < links.length; i++) {
//     console.log('this is link number' + i);
// }
// document.write('All links are connected')

// for (i = 1; i <= 50; i++) {
//     console.log("Hello jaan" + i)
// }

// for (i = 100; i >= 1; i--) {
//     console.log(i)
// }

// function add(a, b) {
//     var average = (a + b) / 2;
//     console.log(average)
// }

// add(12, 10)

// var name = ""
// console.log(name)

// function yourName() {
//     console.log(name)
// }
// yourName()

// var myString = 'My name I\'s shail Bhardwaj and my dad call me "ladoo" or shikha'
// console.log(myString)
// console.log(myString.length)
// console.log(myString.toUpperCase())
// console.log(myString.charAt(12))
// console.log(myString.charCodeAt(5))
// console.log(myString.indexOf("shikha"))

// if (myString.indexOf("shikha") === -1) {
//     console.log("the word shikha is not in the string");
// } else {
//     console.log("the word shikha start at position " + myString.indexOf("shikha"));
// }

// var str = "hello, world";
// console.log(str)
// var str2 = str.slice(2, 9)
// console.log(str2)
// var str3 = str2.slice(2)
// console.log(str3)

// var tags = "shail,preeti,simeren,rajjo,payal,chitra"
// console.log(tags)
// var tagArray = tags.split(",")
// console.log(tagArray)

// var myArray = new Array();
// myArray[0] = "shail";
// myArray[3] = 25;
// myArray[1] = true;
// myArray[2] = 3.14;
// console.log(myArray)

// console.log(this);

// var myCar = new Object();
// console.log(this);
// myCar.Name = "BMW";
// myCar.color = "white";
// myCar.capacity = "7 person";
// myCar.drive = function(distance, time) {
//     console.log(this);
//     console.log((speed = distance / time));
// };

// console.log(this);

// console.log(myCar);
// console.log(myCar.capacity);
// console.log(myCar.Name);
// console.log(myCar.color);
// myCar.drive(220, 2);

// console.log(this);

// var myObj2 = {
//     Name: "BMW",
//     color: "Black",
//     capacity: "5 people",

//     drive: function() {
//         console.log(this);

//         console.log("I am not a good driver");
//     },
// };
// function constructor of myObj2

// var Car = function(Name, color, capacity) {
//     this.Name = Name;
//     this.color = color;
//     this.capacity = capacity;
//     this.drive = function() {
//         console.log("I am not a good driver of " + Name);
//     };
// };

// var myCar1 = new Car("Maruti", "Black", 4);
// var myCar2 = new Car("BMW", "white", 5);
// var myCar3 = new Car("jaguar", " metallic Black", 4);

// myCar1.drive()
// console.log(myCar2.Name)
// console.log(myCar3.capacity)

// myObj2.drive();
// console.log(myObj2);

// var age = 10;
// console.log(this);

// const food = {
//     indian: "rajma chawal",
//     northIndian: function() {
//         console.log(this);

//         console.log("i am idli lover");
//     },
//     southIndian: function(thali, starter) {
//         if (age < 15) {
//             console.log(this);

//             console.log("I love to have " + starter);
//         } else if (age <= 30) {
//             console.log("I like to have " + thali);
//         } else {
//             console.log(this);

//             console.log("I prefer " + thali + starter);
//         }
//     },
// };

// console.log(food.indian);
// food.northIndian();
// food.southIndian("rice", "rasam");

var date = new Date();
console.log(date);

// format for date is yyyy dd mm hr min sec //

var birthDay = new Date(1997, 9, 5, 2, 30, 00);
console.log(birthDay)

console.log(birthDay.getDate());
console.log(birthDay.getDay());
console.log(birthDay.getFullYear());
console.log(birthDay.getHours());
console.log(birthDay.getMilliseconds());
console.log(birthDay.getMinutes());
console.log(birthDay.getMonth());
console.log(birthDay.getSeconds());
console.log(birthDay.getTime());
console.log(birthDay.setMilliseconds());