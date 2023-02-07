/*
function printLines() {
    console.log(secondLine);
    
    var firstLine = "I'm your first line!"
    console.log(firstLine);

    var secondLine = "I'm your second line!"
    console.log(firstLine);
}
var text = " lorem ipsum";
console.log(text);

var y = "dan"
var x = y==="dan"?'ugasi svjetlo':'upali svjetlo';

if(y==="dan"){
    x = "ugasi svjetlo";

} else{ X = "upali svjetlo";}
*/

// var x = "Lorem ipsum",
//     y = 2345,
//     z = "2345"
// 	q = false;

// 1. 
// var trueFalse = !"false" == !!"true"; 
// console.log(trueFalse); 

// pošto se radi o stringovima, mislim da druga negacija ne radi... pa su oba dva negativna 


// 2. 
// console.log(q || x || y || z);

// console će nam ispisati sve od navedenih vrijednosti ukoliko postoje

// 3. 
// var num = 6;
// num--;
// console.log(num);

// pretpostavljam 5

// 4.
/*
const price = 26.5;    
const taxRate = 0.082;

let totalPrice = price + (price * taxRate);
totalPrice.toFixed(2);

console.log("Total:", totalPrice.toFixed(2));
*/

// var count = 2;
// while (count < 20) {
//     count++;
//     if (count % 9 ===0){continue}
//     console.log(count);
    

// }

// var varOne = 0;
// for (i = 0; i < 4; i++){
//     for (j = 0; j < 4; j++){
//         varOne++;
//     }
// }
// console.log(varOne);

// var firstName = "mate"
// var lastName = "baabic"
// var fullName = firstName.concat(" ",lastName);
// console.log(fullName);

// // var x = z === 2 ? y : 5;
// /*
// var x = 6,
//     z = 2, y=23;

// if (z === 2) {
    
//     x = y} else {y = 5}

// console.log(y)




// for (var count = 1; count <= 20; count++) {
    
    
//     if (count % 2 ===0)
//     console.log(count, "Paran je")
//     else (
//         console.log(count)
//     )
// }
// */

// // var matrix = [[1,2,3], ['John', 'Jane', 'Mike']]

// // matrix[0][1];
// // matrix[0][4] = 5;
// // matrix[1] = [];

// // console.log(matrix);

// // var names = ['John', 'Jane', 'Mike']

// // names.forEach((name) => {
// //     console.log(name);
// //     var education= "ne educiran";
// //     console.log(name + "je" + education);

// //     if(name === "Jane") {
// //         console.log(name);
// //     }
// // });

// // names.forEach(name) =>
// // name === 'Jane' ? console.log("da"):console.log("ne");

// // var dog = {
// //     breed: 'Golden retriever',
// //     bark: function() {
// //         return 'wuf wuf'; 
// //     },
// // };

// // console.log(dog.breed);
// // console.log(dog.bark());

// // const names = ["ime 1", "ime 2", "ime 3"];
// // console.log(names);

// var polaznici = [
//     {name: 'Igor',
//      surname: 'Boroja',
//      age: 18,
//     },
//     {name: 'Ivan',
//     surname: 'Munitić',
//     age: 13,
//     },
//     {name: 'Aleks',
//     surname: 'Ivanac',
//     age: 24,
//     },
//     {name: 'Danijel',
//     surname: 'Hrgić',
//     age: 67,
//     },    
//     {name: 'Darko',
//     surname: 'Šušnjar',
//     age: 12,
//     },

// ];

// function checkAge(age, name, surname){
// var ageResponse = "";
// var fullName =  name + " " + surname;

// switch (true) {
//     case age < 18:
//         ageResponse = fullName + " Ovo je maloljetnik";
//         break;
//     case age >= 18 && age < 67:
//         ageResponse = fullName + " Ovo je punoljetnik";
//         break;
//     case age >= 67:
//         ageResponse = fullName + " Ovo je umirovljenik";
//         break;
//     default:
//         ageResponse = fullName + " ova osoba se jos nije rodila";
//         break;    
//     }

//     return ageResponse;

// }


// // if (age < 18){
// //     return 'Ovo je maloljetnik';
// // } else if (age >= 18 && age < 67){
// //     return 'Ovo je punoljetnik';
// // } else {
// //     return "ovo je umirovljenik;"
// // }
// // }

// polaznici.forEach(polaznik => {
//     console.log("Ime: " + polaznik.name);
//     console.log(checkAge(polaznik.age, polaznik.name, polaznik.surname));
// });

// printLines();

// function printLines() {
//     console.log(secondLine);

//     var firstLine = "I'am your first line";
//     console.log(firstLine);

//     var secondLine = "I'm your second line";
//     console.log(secondLine);

// }



// 1. result will be undefined cause secondLine is not defined
// 2. result will be firstLine
// 3. second
// 4. it will still work cause  functions are read first by js




// var printLines = function () {
//     console.log(secondLine);

//     var firstLine = "I'am your first line";
//     console.log(firstLine);

//     var secondLine = "I'am your second line";
//     console.log(secondLine);

// }


// printLines ();

// const printLines = function () {
//     console.log(secondLine);

//     let firstLine = "I'am your first line";
//     console.log(firstLine);

//     let secondLine = "I'am your second line";
//     console.log(secondLine);

// }


// printLines ();

// const madeOfGlass = function () {
//     let thing = 'window';
//     thing = 'glass';

//     console.log(thing);
// };

// madeOfGlass ();

// object destructuring
// const dog = {
//     breed : "Goldern retreiver",
//     age: 12,
// };

// const {breed, age} = dog;
// console.log(breed);
// console.log(age);

//array destructuring

// const firstArray = ["a", "b", "c"];
// const [q, y, z] = firstArray;
// console.log(q);
// console.log(y);
// console.log(z);


// const car = {
//     name: "Ferrari",
//     country: "IT",
//     dimensions: {width: 550,
//     height: 120, },
// };

// const {name,
//      country,
//      dimensions,
//      } = car;

// console.log(name);
// console.log(country);
// console.log(dimensions.width);
// console.log(dimensions.height);

// let firstArray = ["apple", "apricot", "ananas"]
// let secondArray = ["kurkuma", "ananas", "banana"]

// let arrayMachine = function (first, second) {
//     let finalArray = first.concat(second);
//     finalArray = [...new Set(finalArray)];
//     console.log(finalArray);

//     finalArray.sort();
//     console.log(finalArray);

//     finalArray.reverse();
//     console.log(finalArray);
// }

// arrayMachine(firstArray, secondArray);

// const dog = {
//   pasmina: 'Doga',
// }

// const human = {
//     name: "borna",
//     age: 23,
//     ...dog,
// };

// console.log(human);
                                              

let w = window.innerWidth;
let h = window.innerHeight;

console.log(w,h);

// ili console.log('Visina:' + window.innerHeight);


console.log(window.location.hostname);

window.confirm('we use cookies, do you agree to enter?');

setTimeout(function(){
    console.log('Ispisao sam se nakon 10 sec');
}, 1000
);

function sendEmail(){
    console.log("radiš");
}

function sendEmail() {
    const alertMessageEl = document.querySelector(".alert-message");

    alertMessageEl.style.display = "block";

    setTimeout(() => {
        alertMessageEl.style.display = "none";
    }, 3000);
    
}

setInterval(() => {
    console.log("jako sam pametan");
}, 5000);
    