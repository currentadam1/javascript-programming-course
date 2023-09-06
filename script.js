'use strict';
// console.log('welcome to variables');

// var VariableName = 'Welcome to Variable';
// console.log(VariableName);

// let variablename = 'Hello';
// console.log(variablename);

// const _name = 'john'
// console.log(_name)
// const name_test$ = 'bernad';
// console.log(name_test$)

// // String
// const exampleString = 'Hello, world';
// console.log(exampleString);

// // Types of strings
// const singleQoutes = 'Hello!';
// console.log(singleQoutes);

// const doubleQoutes = "hello!!";
// console.log(doubleQoutes);

// const name = "Jagaban";
// console.log(name.length);
// console.log(name[0]); 

// const Lastletter = name[6];
// console.log(Lastletter);

// const isName = 'Jagaban is the Nigeria President';
// console.log(isName.length - 1);
// const LastLetter = isName[31];
// console.log(LastLetter)

// change string case

const mixedStringCase = 'Are you mad or something';
const lowerCaseString = mixedStringCase.toLowerCase();
console.log(lowerCaseString);

const upperCaseString = mixedStringCase.toUpperCase();
console.log(upperCaseString);


// // const 'backticks' = `hello!!!`;
// // console.log(backticks)

// // const name = 'john';
// // const backticks = `Hello, ${name}`;
// // console.log(backticks);

// const para = 'John Doe'
// const dot = `Hello, ${para}`;
// console.log(dot);

// const numb = `${2 + 2}`;
// console.log(numb)

// const edge = `2 + 2`
// console.log(typeof edge)

// //Numbers
// const wholeNumbers = 100;
// const  decimalNumber = 0.3333333;
// console.log(wholeNumbers, decimalNumber)    

// const firstNumber = 100;
// const secondNumber = 10;

// // const result = firstNumber + secondNumber;
// // console.log(result) ;

// Generate random number

// const tryMe = () => {
//     const randNumber = Math.trunc(Math.random() * 10) + 1;
//     console.log(randNumber);
//     const askMe = +prompt('input a number between 1 and 18');

//     if (askMe === randNumber) {
//         alert('Goodjob, Oil dey your head')
//     } else {
//         alert ('Number not match try again')
//     }
// }

// tryMe()
// //Booleans 
// // const isCool = true;

// // if(isCool) {
// //     console.log("Hi man,You are cool!");

// // }else {
// //     console.log('oh,hi...!')
// // }

// // Null
// // let age = null;
// // age = 20;
// // console.log(typeof age);
// // undefined
// let x;
// console.log(x)

// // objects

// const name = 'John';
// // const age = 25;

// // const person = {
// //     name: 'john';
// //     age: 25;


// // console.log(person.name)

// // // array

                 

// // Arithmetic 

// const a = 5;
// const b = 10;
// // let result = 0;

// // // addition
// // const result = a**b;
// // console.log(result);

// // comparison opertaors = true or false
// const k = 10;
// const l = 20;
// console.log(k == l)

// // assignment operators
// const number = 5;

// let string = 'hello, world!';
// string += ',i am John!';
// console.log(string);


// // STRICT VS LOOSE EQUALITY
// console.log(5 == '5');

// console.log('This is a string' === 'This is a string')
// console.log({} === {}); //false

// // logic and control flow
// // if statement
// const age = 18;
// const isCool = true;
// // if(age >= 18){
// //     console.log('you may enter, welcome!')
// // }else if(age === 18) {
// //     console.log('you just turned 18,Welcome!');
// // }else {
// //     console.log('Go away!');
// // }
// // 

// console.log

// console.log('truthy' && 1 && 'test' && 999);


// // OR ||
// console.log(true || false);

// console.log('truth' || 0 || 'test' || 999)
// // trythy /falsy values   

// //NOT !
// console.log(!false);

// console.log(!true);//false
// alert(!true); // false
// alert(!0); //true

//Double Not !
// alert(!! truthy);
// const dog = 5;
// if (dogs) {
//     console.log(`You have ${dogs} dogs` );
// }else {
//     console.log('You have no dog!');
// }
//switch statements
 const superHero = 'captain America';
  
switch(superHero) {
    case 'Iron man':

        console.log('I am iron man');
        break;
    case 'thor Man':

            console.log('That is my hammer')
         break;
    case 'Batman':

        console.log('Never give up!')
        break;
    case 'black widow':

        console.log('One shot,one kill')
        break;


        default:
            console.log ('enter your hero name')
}

//ternary operators
// if (condition) {
//     //block of code if true
// } else {
//     // block of code if false

// }


// condition ? // blockof code if true: //block of code if false  

// const age = 18;
// if (age > 18) {
//     console.log('you can drive')

// } else {
//     console.log('you cannot drive yet.')
// }
// /**JAVASCRIPT TERNARY OPERATOR */ 

// age > 18 ? console.log('you can drive') : console.log('you cannot drive yet')

const drunkardName = 'Jaiyeola';
const age = 27;

const canDrink = age >= 18 ? 'can drink alcohol' : 'He can onlydrink water'
console.log(canDrink)

const isEmployed = false
console.log(isEmployed ? 'He works at Celo' : 'God heal buhari')

/**CODING CHALLENGE */
const scoreDolphins = (96 +108 +89) /3
const scoreKaolas = (88 +91 +54) /3
console.log(scoreKaolas)
console.log(scoreDolphins);

if (scoreDolphins > scoreKaolas)
    console.log('Dophins wins the Trophy')
else if (scoreKaolas > scoreDolphins)
    console.log('kaolas wins the Trophy');
else if (scoreDolphins = scoreKaolas)
   console.log('They played a drawn match or no winner')

// loop
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)

//while loop
// let i = 0;
// while(i < 10){
//     console.log(i++)
// }
// console.log(i++);


//for loop

// for([initialization];[condition];[final-expression]){

// }

// for(let i = 0;i < 10;i++)


//function

//function declaration

// function name(parameter){
//     statements
// }

//function expression

// let name = function(parameter) {
//     statements
// }

//Arrow function
// const name = (parameter) => {
    // statements
// }

const square = (number) =>{
    return number * number
}

const result = square(10);
console.log(result);




//Invoking function
// function sayHi(name) {
//     console.log(`hi ${name}`);
// }

// sayHi('Gbolahan');
// function sayHi(name) {
//     console.log(`Good ${name}`);
// }

// sayHi('morning');
// function sayHi(name) {
//     console.log(`Burn ${name}`);
// }

// sayHi('Calories');

// // function return

// function add (a, b){
//     return a + b;
// }

// const sum = add (20, 20) 
//     console.log(sum);


//       function test () {
//         return true;
//         return false;
//       };
//       test();

 // parameter vs Arguement
//     const sayHi =(firstName) => {
//       console.log(`sayHi,  ${firstName}`)
//     }

//     sayHi(`Gbolahan`);

//     const logAge =(name, age) => {
//         console.log(`${name} is ${age} years old`);

//     }
// logAge(`Gbolahan`, 25)


// SCOPE 
// type of scopes
// Global scope

// const hisName = 'Ademola';
// const logName = () => {
//     console.log(hisName);
// }

// logName()

// const hisNmae2 = 'Adam'
// const logName2 = () => {
//     console.log(hisNmae2);
// }
// const logName3 = () => {
//     console.log(hisNmae2);
// }

// logName2()

let isName = "Chitta";
const logName4 = () => {
    console.log(isName);
    name = "Rokeebat";
}
logName4();


// local scope
const someFunction = () => {
    const name = 'Godwin';
    console.log(name);
}

someFunction();

const someFunction1 = () => {
    // local scope #1
    const name = 'Demola'
    console.log(name);
    const anotherFunction = () => {
        // local scope #2
        console.log(name);
    }
    anotherFunction();
}

someFunction1();


// Block scope(only with let and const)

if (true) {
    const name = 'shola'
    console.log(name);
}

if (true) {
    // this'if' conditional block doesnt create a scope

    // name is in the global scope because of the var keyword
    var name = 'Adrian'
    // likes is in the local scope because of let  keyword
    let likes = 'Coding'
    // skills is the local scope because of the const keyword
    const skills = 'Javascript and PHP';

    console.log(name);
    console.log(likes);
    console.log(skills);

}

// global

const hisName = 'Adeniji';
const logName = () => {
    console.log(hisName);
}

logName()

const hisNmae2 = 'Adam'
const logName2 = () => {
    console.log(hisNmae2);
}
const logName3 = () => {
    console.log(hisNmae2);
}

logName2()

// local
const someFunction5 = () => {
    const name = 'Godwin';
    console.log(name);
}

someFunction5();

const someFunction6 = () => {
   
    const name = 'Demola'
    console.log(name);
    const anotherFunction = () => {
    

        console.log(name);
    }
    anotherFunction();
}

someFunction6();



// ******************************Hoisting ****************************//
function hoist () {
    var message 
    console.log(message);
    message = 'Hoisting is cool'
}
hoist();


function hoist () {
    var message = 'Hoisting is cool';
    console.log(message);
    return message
}
hoist()
// *********************CLOSURE*******************//
const outer = () => {
    const outerVar = 'Hello world'
    const inner = () => {
        const innerVar = 'Hi I am good';
        console.log(innerVar,outerVar);
    
   
    }
    return inner;
}

const innerFn = outer();
innerFn();

// const innit = () => {
//     const hobby = 'Learning javascript' //hobby is a local vairable created by innit
//     const displayHobby = () => {    //display hubby is the inner fuvtion , a closure
//         console.log(hobby); //using vairable declared in the present function
//     }
//     displayHobby();
// }

// innit();


 const init = () => {
    const hobby = 'learning Javascript'
    const displayHobby = () => {
        console.log(hobby);
     
    }

    return displayHobby;
 }

 var myFunction = init()
 myFunction()
/******** ARRAY*********/


// array.push adds a new value to the end of the array

// const names =['John','Bob','David','Mark'];
// names.push('Dean')
// console.log(names)

// // array pop= deletes the last element

// names.pop()
// console.log(names.pop())

// const removedValue = names.pop();
// console.log(removedValue)

// array shift= deletes the first element of an array

// const names =['John','Bob','David','Mark'];
// names.shift()
// console.log(names)

// const removedValues = names.shift();
// console.log(removedValues)

// array unshift
// const names =['John','Bob','David','Mark'];
// names.unshift('dean')
// console.log(names)

// array splice adds or remove values from any position
// const names =['John','Bob','David','Mark'];
// names.splice(0 , 1 , 2, 'Johnny' , 'jenny');
// console.log(names)


// const removedValue = names.splice(0,1);
// console.log(removedValue);


// array slice = copies certain parts of an array
// const names = ['John','Bob','David','Mark'];
// const noOneLikeJon = names.splice(0 ,1, 2)
// console.log(noOneLikeJon);

// array explaining new

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.push(10)
// console.log(arr);


// e.log(i, names)
// }
// names.forEach((name,index) => {
//     console.log(name, index)
// })

// const value = names.forEach((name, index) =>  {
//     console.log(name, index)

// })


// ARRAY.FOREACHn
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach((number) => {
//     sum += number
//     console.log(sum)
// })

// ARRAY.FIND
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const value = numbers.find ((number) => number > 5)
//     console.log(value)

// const state = ['Alaska', 'California','Colorado','Hawaii' ];
// const string = state.find ((place) => place > 'Alaska')
//  console.log(string)
    
// const place = state.find((state) =>  state.startsWith('C'));
// console.log(place)

// // Array.includes
// const pet = ['cat','dog','llama'];
// console.log(pet.includes('cat'))

// const books =['thes','mend','cahr'];
// if (books.includes('tge')) {
//     console.log('Yes we have the book')
// } else{
//     console.log('no the book is not available')
// }


// ARRAY.REDUCE
// const groceryList = [29,12,45,35,87,110];
// let total = 0;
// groceryList.forEach( (price) => {
//     total += price;
//     console.log(total);
// })

// const groceryList = [29,12,45,35,87,110];
// const total = groceryList.reduce((acc, currentValue) => {
// return acc + currentValue

// },0);
// console.log(total);


// const numbers = [1 ,2 ,3 ,4 ,5];
// const sum = numbers.reduce((acc, currentValue) => {
// return acc + currentValue

// },0);
// console.log(sum);

// acc = 0; val = 1 => 0 + 1 === 1;
// acc 1; val = 2; 2 => 1 + 2 === 3;
// acc 3; val = 3; 3 => 3 + 3 === 6;
// acc ; val = 4; 4 => 6+4 === 10;
// acc; val = 5; 5 => 10 + 5 === 15;

// Adding an Element From Behind
// const isMarried = false;
// const person = ['Kenny', 'Abubakar', 2022 - 2019, 'Developer', ['Emmaculate', 'Yusuf', 'Bello'], isMarried];
// person.push('Unilorin');
// console.log(person);

// Adding an Element in The Front
// person.unshift('Nigerian');
// console.log(person);

// Removing an Element From Behind
// person.pop();
// person.pop();
// console.log(person);

// Removing an Element from the Front
// person.shift();
// console.log(person);

// Slice Method
// console.log(person.slice(1));
// console.log(person.slice(0, 3));


// console.log(person.slice(3, 4));


// console.log(person.splice(1, 3));

// const colleagues = ['soliu', 'noheem']
// const myFrnd = ['yusuf', 'Habeeb', 'Bello'];
// const myFamily = ['soliu', 'Daud'];
// const everyBody = myFrnd.concat(myFamily, colleagues);


// console.log(everyBody);
// console.log(everyBody.sort());
// console.log(everyBody.reverse());

// const newName = ('AjayiMakinde');
// console.log(newName.split('').reverse().join(''));



/****************JAVACRIPT OBJECTS METHOD******************/

// const person = {
//     firstName : 'John',
//     lastName : 'Doe',
//     Age : 34,
//     Car : {
//         year : 2014,
//         color: 'red',
//     }
// }
// console.log(person);

// Add Vairable as value in an object
// const firstName = 'Johnny';
// const human = {
//     firstName: firstName
// }
// console.log(human);

// const studentArray = ['Adam','Jamal','Dept',2012 ,'Mechanical','22/eng06/002','false',['sattar','Ayodeji','Kayin']]
// console.log(studentArray)



// const studentObject = {
//     firstName: 'Ajayi',
//     lastName: 'Makinde',
//     yearOfBirth: 2020,
//     depatment : 'Civil Engineering',
//     MatricNo: 1122,
//     IsGraduate: false,
//     friends: ['Tola','yusuf','habeeb'],
//     yearsInSchool:function(){
//              return 2023 - this.yearsOfEntry
//     }
// };

// console.log(studentObject)
// console.log(studentObject.yearsInSchool)

// console.log(studentObject.firstName)


// ******************Object destruction***************//
// const PersonObject = {
//     firstName: 'Jordan',
//     lastName:'Marcus',
//     car : {
//         color: 'Red',
//         wheel: 4,
//     },
//     Animals: {
//         dog: {
//         name: 'Fully',
//         age: 5,
//     },
//     cat: {
//         name: 'kitty',
//         age: 4,
//     }
// },

// }
    
// DRY CODE
// console.log(PersonObject.firstName);
// console.log(PersonObject.lastName);
// console.log(PersonObject.car.color);
// console.log(PersonObject.car.wheel);
// console.log(PersonObject.Animals.name);
// console.log(PersonObject.Animals.age);
// console.log(PersonObject.cat.name);
// console.log(PersonObject.cat.age);



// Syntax of Object Destructuring

// const {firstName, lastName, car, Animals, cat} = PersonObject;

// console.log(firstName, lastName)
// console.log(car.color)
// console.log(car.wheel)
// console.log(Animals.name)
// console.log(cat.name)

// const {firstName, lastName, car:{color, wheel}, Animals} = PersonObject;

// const {Animals: {dog, cat}} = PersonObject;

// console.log(dog.age)
// console.log(dog.name)
// console.log(cat.age)
// console.log(cat.name)


//*****************Array Destructuring ******************/

// const introduction = ['hello','hi', 'I', 'am', 'Jagaban'];
// console.log(introduction);

// const greeting = introduction[0]
// const name = introduction[4]
// console.log(greeting, name);


// using array destructuring

// const [] = introduction;
// const [greeting,,,,name] = introduction;
// console.log(greeting,name)

// const brandName = ['Central','Cee', 'was', 'Created', 'Established', 'in', 'the', 'year', 2018 ]
// const [] = brandName;
// const [name2 ,head1, title,,Established,from,the,year,year2 ] = brandName

// console.log(name2,head1,title,Established,from,the,year,year2)




// // ADDING DATA TO OBJECT
// studentObject.school = 'Unilorin';
// studentObject['location'] = 'Nigeria';
// studentObject.hostel = "Golf pearl"

// console.log(studentObject)


// // RETRIEVING data from object
// dot notation
// const studentFile = {
//     firstName: 'Daniel',
//     lastName: 'John',
// }
// studentFile.dog = {name:'puppy',age:20}
// console.log(studentFile.dog.name);

// // bracket notation
// const obj = {
//     cat : 'meow',
//     dog : 'woof',

// };
// console.log(obj);

// const sound = obj['cat'];
// console.log(sound)


// // The new Keyword

// // it create a new object

// const person = {};
// const person1 = new Object();

// console.log(person, person1);

// console.log(typeof person);
// console.log( typeof person1);


// const myDate = new Date('August 17, 2023');
// console.log (myDate);
// console.log(myDate.getFullYear())


// const myNumber = new Number(100.234);

// console.log(myNumber.toFixed(0));

// const RonaldoObj6 = {
//     firstName: 'Cristiano',
//     lastName: 'Ronaldo',
//     yearOfBirth: 1987,
//     Nationality: 'Portugese',
//     Trophies: {
//         premierleagues: 3,
//         Championsleague: 7,
//         FaCup:2,
//         WorldCup:0,
//     },
//     Competitions:['WorldCup','ChampionsLeague','Laliga','EnglishFA'],
//     Team: 'Alnassr',
//     contract:2023,
//     isActive:true,
//     yearsOfPlay: function() {
//         if (this.isActive){

//             return `${this.firstName} ${this.lastName} is a ${this.Nationality} player who has spent ${2023 - this.contract} years in ${this.Team} and he has played  ${this.Competitions.length -1} competition`;
//         } else{
//             return `${this.firstName}${this.lastName},has retired , we don't have his information`
//         }
//     },
// }

// console.log(RonaldoObj6)
// console.log(RonaldoObj6.yearsOfPlay());


// const Corteiz = {
//     brandName: 'Corteiz',
//     Owner: 'Clint491',
//     Location: 'Paris',
//     Specification: {
//         BrandWears: 7,
//         Kicks: 6,
//         countriesCovered: 8,
//         Branches:7,
//     },
//     YearEstablished: 2019,
//     MainBuyers: 'Yuts',
//     IsOpen: true,
//     websiteOpen: function() {
//         if(this.IsOpen){
//             return `${this.brandName} WORLD is open to you now Cop Quick! ${this.brandName} was invented in ${this.YearEstablished} by ${this.Owner} and is located in ${this.Location}`;
//         }
//         else{
//             return `${this.brandName} is presently out of stock. We will be back soon! Send a mail to @${this.Owner} or visit our branch at ${this.Location}. Once again thanks ${this.MainBuyers}`
//         }
//     }
// }
// console.log(Corteiz)

// console.log(Corteiz.websiteOpen());

// // ES6 objects constructor

const Person = function(firstName, birthYear){
    
this.firstName = firstName;
    this.birthYear = birthYear;
}

const Jmaes = new Person('James', 1992);
console.log(Person);
console.log(Jmaes);

const jack = new Person ('Jack', 2019);
const Sawm = new Person ('Jack', 2019);


const Person1 = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const oro = new Person1 ('Oro', 2019);
const Ada = new Person1 ('Ada', 2019);
const Adam = new Person1 ('Adam', 1999);
 
console.log(Ada);
console.log(oro);
console.log(Adam);


// Prototype
console.log(Person1.prototype)
Person1.prototype.calAge = function () {
    console.log(2023 - this.birthYear);
};


Ada.calAge();
Adam.calAge();

//1. New () created object is linked a protoype
//2. function is called , this().
//3. now let created object to be linked to a prototype
//4. the object that is being created from the beginning is then returned from the constructor function

// CODING CHALLENGE
/**
 * 1. Use a constructor function to implement a Car. A 
 * Car has make and a speed peoperty. The speed 
 * property is the current speed of the car in km/h;
 * 
 * 2. Implement an 'accelerate' method that will increase
 *  the Car's speed by 10, and log the new speed to the 
 * console:
 * 
 * 3. Implement a 'brake' method that will decrease the 
 * car's speed by 5, and log the new speed to the console;
 * 
 * 4. Create 2 car objects and experiment with calling 
 * 'acceleration' and 'brake' multiple times on each of 
 * them.
 * 
 * DATA CAR 1: 'VOLVO' going at 120km/h
 * DATA CAR 2: 'Benz' going at 45km/h
 * 
 * GOODLUCK😋
 * */


// const Car = function(Make, Speed) {
//     this.Make = Make;
//     this.Speed = Speed;
// }

// const Car1 = new Car('VolVO', 120);
// const Car2 = new Car('Benz', 45);

// Car.prototype.calSpeed = function () {
//     console.log(this.Speed + 10);
// };

// console.log(Car.prototype)

// Car1.calSpeed();

// Car.prototype.calBreak = function () {
//     console.log(this.Speed - 10);
// };

// Car1.calBreak();

// const Car =function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }


const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}
const Volvo = new Car('Volvo', 120);
const Benz = new Car('Benz', 95);

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hr`)
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`)
}

Volvo.accelerate();
Volvo.accelerate();
Volvo.brake();
Volvo.accelerate();






// class Person {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         return 2023 - this.birthYear

//     }

//     set setFullName(realFullName){
//       if(realFullName.includes(' ')) {
//         return(realFullName) = this.fullName
//       }else {
//         console.log(`${realFullName} has initial `)
//       }


//     }

//     get getAge(){
//         return 2023 -this.birthYear;
//     }

//     static hello() {
//         console.log(this);
//         console.log('hello everyone 😁')
//     }


// }

// const Dave = new Person ('dave', 1998)
// const Burna = new Person ('Burna', 1970) 

// console.log (Dave);
// console.log (Burna);

// Dave.setFullName1 = 'Dave grey';
// Burna.fullName = 'Burna Boy';
// Person.hello();


// console.log (Dave.fullName);
// console.log (Burna.getAge);


// class Person1 {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         return 2023 - this.birthYear

//     }

//     set setFullName1(realFullName) {

//       if(realFullName.includes(' ')) {
//         return(realFullName) = this.fullName
//       }else {
//         console.log(`${realFullName} has initial `)
//       }


//     }

//     get getAge(){
//         return 2023 -this.birthYear;
//     }

//     static hello() {
//         console.log(this);
//         console.log('hello everyone 😁')
//     }


// }

// const Drake = new Person1 ('Drizzy', 1987)
// const Lanze = new Person1 ('Tory ', 1960) 

// console.log (Drake);
// console.log (Lanze);

// Drake.setFullName = 'Drizzy Drake';
// Lanze.fullName = 'Tory Lanze';
// Person1.hello();


// console.log (Lanze.fullName);
// console.log (Drake.getAge);

// // Spread operators

// // const Person = {
// //        firstName: 'central',
// //        car: {
// //         Brand: 'Aston Martin',
// //         Color: 'Paris DiorBlack',
// //         Wheel: 4,
// //        }
// // }
// // console.log(Person)

// // const newPerson = { ...Person}; //it removes the reference  from the original object

// // newPerson.firstName =  'Cee';//it changes the newly created object
// // console.log(newPerson)

// // newPerson.car.Color = "red";
// // // console.log(newPerson);

// //*****************REST AND SPREAD OPERATORS */

// // console.log(add(2, 2))


// const add = (...args) => {
//      console.log(args);
// }

// console.log(2, 2, 2, 2, 2, 2)

// const add2 = (...args) => {
//     return args.reduce((acc, value) => acc + value)
// }


// console.log(add2(2, 2, 2, 2, 2, 2))


// // spread operators

// const numbers = [2, 4, 6, 8, 10]
// numbers.push(20)
// console.log(...numbers);

// // // using JSON string method
// // const stringFieldPerson = JSON.stringify(Person);
// // console.log(stringFieldPerson);

// // const newPerson1 = JSON.parse(JSON.stringify(Person));
// // console.log(newPerson1);



// //*********CREATING CLASS ******** */

// // const Person2 = {
// //     name : 'Ola',
// //     Age : 35,
// //     isEmployed: true,

// // }

// // console.log(Person2);

// class Person2 {
//     constructor(name,age,isEmployed){ ;
//     this.name = name;
//     this.age = age;
//     this.isEmployed = isEmployed;
//     }
   
// }

// // const user = new Person2('Jordan', 35, true);
// // console.log(user);

// // const CreatePerson = (name, age, isEmployed) => {
// //     const userSchema = {
// //         name,
// //         age,
// //         isEmployed,
// // }

// //    return userSchema
// // }

// // const userSchema = CreatePerson('Jordan', 35, true);

// // console.log(userSchema);

// // const CreatePerson1 = (name, age, isEmployed) => {
// //     return{name, age, isEmployed};
// // }

// // const userSchema1 = CreatePerson1('Jordan', 35, true);

// // console.log(userSchema1);



// // const CreatePerson2 = (name, age, isEmployed) => ({name, age, isEmployed})
// // CreatePerson2('Jordan', 35, true);

// // const userSchema2 = CreatePerson2('Jordan', 35, true);

// // console.log(userSchema2);


// // //*********Object Oriented Programming(OOP) ****************//

// // const Somebody = {
// //     firstName : 'John',
// //     LastName : 'Cee',
// //     yearOfBirth : '2000',


// //     calcAge() {
// //         return 2023 - this.yearOfBirth;
// //     }
// // }

// // console.log(Somebody);
// // console.log(Somebody.calcAge());


// // // ES5 Function Constructor

// // const Person5 = function (firstname, LastName, YearOfBirth) {
// //     this.firstname = firstName;
// //     this.lastName = LastName;
// //     this.yearOfBirth = YearOfBirth;


// // }

// // console.log(Person5)



// // ***************************ASYNCHRONOUS JAVASCRIPT***********//

// //Interval And Timer 

// // Set time Interval

// // setInterval(() => {
// //     console.log('Are you mad or something');
// // }, 1000);

// // // how to clear an interval


// // setTimeout(() => {
// //      console.log('Time is up')
// // }, 5000);


// // Fetch API

// // Fetch API requires decidion of callback, promises, Thenable, and Async/Await.
// // API stands for application programming interface

// // const fetchUser = (username, Callback) => {
   
// //     setTimeout (() => {
// //     console.log('Now we have the user');
// //     Callback({username})

// //     },5000)

// // }
// // console.log(fetchUser);

// // const user = fetchUser ('Jordan', (user) => {

// //      console.log(`Your name is ${user.username}`)
// // });


// // Callback  hell function

// // const fetchUser = (username, callback) => {
// // 	setTimeout(() => {
// // 		console.log('Now we have the user');

// // 		callback(username);
// // 	}, 2000);
// // }

// // const fetchUserPhotos = (username, callback) => {
// // 	setTimeout(() => {
// // 		console.log('Now we have the photos');

// // 		callback(['photo1', 'photo2']);
// // 	}, 2000); 
// // }

// // const fetchPhotoDetails = (photo, callback) => {
// // 	setTimeout(() => {
// // 		console.log('Now we have the photo details');

// // 		callback('details...');
// // 	}, 2000); 
// // }

// // const user = fetchUser('test', (username) => {
// // 	console.log(username);

// // 	fetchUserPhotos(username, (userPhotos) => {
// // 		console.log(userPhotos);

// // 		fetchPhotoDetails(userPhotos[0], (details) => {
// // 			console.log(details);
// // 		});
// // 	});
// // });


// // // This is called Callback Hell. It becomes unreadable.

// // const user1 = fetchUser('test', (username) => {
// // 	fetchUserPhotos(username, (userPhotos) => {
// // 		fetchPhotoDetails(userPhotos[0], (details) => {
// // 			fetchPhotoDetails(userPhotos[0], (details) => {
// // 				fetchPhotoDetails(userPhotos[0], (details) => {
// // 					fetchPhotoDetails(userPhotos[0], (details) => {
// // 						console.log(details);
// // 					});
// // 				});
// // 			});
// // 		});
// // 	});
// // });



// // Promises 
// // Promise has 3 states: Pendding, fufilled, Rejected.

// // const myPromise = new Promise ((resolve, reject) => {
// //     const error = true;

// //     if (!error) {
// //         resolve ('Yes! resolved the promise')
// //     } else {
// //         reject ('No! rejected the promise')
// //     }

// // })

// // console.log(myPromise);

// // myPromise.then(value =>{ 
// //     // console.log(value)

// //     return value + 1;
// // })

// // .then((newValue) => {
// //  console.log(newValue)     
// // })

// // .catch((error) => {
// //     console.log(error)
// // })




// // const myNextPromise = new Promise ((resolve, reject) => {
// //    setTimeout(function()  {
// //         resolve("My Next Promise resolved!");
// //     },3000);
// // });

// // myNextPromise.then(value => { 
// //     console.log(value);
// // })

// // console.log(myNextPromise);

// // const headPromise = new Promise ((resolve, reject) => {
// //     const error = false;

// //     if (!error) {
// //         resolve ('Yes! your problem has been solved')
// //     } else {
// //         reject ('No! rejected, your problem is being solved')
// //     }

// // })

// // console.log(headPromise);

// // myPromise.then(value =>{ 
// //     // console.log(value)

// //     return value + 1;
// // })

// // .then((newValue) => {
// //  console.log(newValue)     
// // })

// // .catch((error) => {
// //     console.log(error)
// // });

// // // number method

// // coding challenge
// const anyName = 'Jonathan';
// console.log(anyName.charAt(Math.floor(Math.random() *anyName.length)))


// const awaiting = (seconds) => {
//     return new Promise(resolve => setTimeout(resolve, seconds * 1000))
        
    
// }

// awaiting(2).then(() => {
//     console.log('I waited for too long...');
//     return awaiting(1);

// }).then (() => {
//     console.log('1 second move')
//     return awaiting(1);
// }).then (() => {
//     console.log('2 second move')
//     return awaiting(1);
// }).then (() => {
//     console.log('3 second move')
//     return awaiting(1);

// }).then (() => {
//     console.log('4 second move')
//     return awaiting(1);

// }).then (() => {
//     console.log('5 second move')
//     return awaiting(1);
// })


// const account = {
//     owner: 'Alice',
//     movement: [500, 600, 800, 900, 1000],


//     getLastEl () {
//         console.log(this.movement.slice(-1).pop())
//     },

//     getFirstEl (mov) {
//         this.movement.unshift(mov);
//     }
        
// }
// account.getLastEl()
// account.getFirstEl(500);

// console.log(account.movement)

// // const lottery = new Promise((resolve, reject ) => {
// //     setTimeout(() => {
// //         if (Math.random() >= 0.7) {
// //             resolve('You win...')
// //         } else {
// //             reject(new Error('You lost...Try again later '))
// //         }
        
// //     },2000);
// // })

// // const myTruePromise = new Promise((resolve, reject) => {
// //     setTimeout (function() {
// //         resolve("My True Promise resolved!")
// //     },3000);
// // }) 

// // lottery.then(response => console.log(response)).catch(err => console.error(err));

// //      console.log(value);


// // console.log(myTruePromise);


// // pending state of promises

// const users = fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//   data.forEach((user) => {
//     console.log(user);
//   });


// const user = fetch('https://jsonplaceholder.typicode.com/users')
// console.log(user);

// // const myUser = {
// //     userList : [],
// // }


// // const myCoolFunction = async () => {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
// //     console.log(myCoolFunction);
// //     const jsonUserData = await response.json();

// //     // return jsonUserData;
// //     console.log(jsonUserData);

// // }


// // myCoolFunction()

// // const anotherFunction = async () => {
// //     const data = await myCoolFunction();
// //     // console.log(data);
// //     myUser.userList = data;
// //     console.log(myUser.userList);
    

// // }

// // anotherFunction()

// // // work flow function

// // const allUsersEmail = async () => {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
// //     const jsonUserData = await response.json();
// //     const userEmailArray = jsonUserData.map(user => {
// //         return user.email;
// //     })

// //     console.log(userEmailArray);
// //     // return userEmailArray;
// // }
// // console.log(allUsersEmail());

// // const getDadJoke = async () =>{
// // const response = await fetch ('https://icanhazdadjoke.com/',{
// //     method: 'GET',
// //     headers: {
// //         Accept: 'Application/json'
// //     }
// // });

// // const jsonJokeData = await response.json();
// // console.log(jsonJokeData.joke);
// // }
// // getDadJoke()



// const bookingArr = [];


// const bookFlight = (flight, numOfPassenger = 1, price = 49 * numOfPassenger) => {
//     const bookings = {
//         flight,
//         numOfPassenger,
//         price
//     }
//     console.log(bookings);
//     return bookingArr.push(bookings);
// }


// bookFlight('BE147', 2, 189);
// bookFlight('AF699');
// bookFlight('BE147', 2, 189);
// bookFlight('BE147', 2, 189);

 
 