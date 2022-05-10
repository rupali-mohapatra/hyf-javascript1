/*Number 1*/

console.log('Hello, World!'); //English
console.log('Namastey, dunia!'); //Indian
console.log('Hej, Världen!'); //Swedish
console.log('Ciao, mondo!'); //Italian
console.log('Hola, mundo!'); //Spanish

/*Number 2*/
console.log("I'm awesome"); //corected

/*Number 3*/
let x; //declare a variable
console.log('I think the value of my variable x will be: 4'); //Add a console.log statement that explains in words what you think the value of x is
console.log('x'); //Add a console.log statement that logs the value of x
x = 10; //Now initializeyour variablex with an integer
console.log('I think the value of x is 10'); //Next, add a console.log statement that explains what you think the value of x is.
console.log(x); //Add a console.log statement that logs the value of x

/*Number 4*/
let y = 'learn'; //Declare a variable y and assign a string to it
console.log('I think the value of my string y will be: javascript'); //Write a console.log statement in which you explain in words what you think the value of the string is
console.log('y'); //Now console.log the variable y
y = 'coding'; //Now assign a new string to the variable y
console.log('I think the value of y is coding'); //Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
console.log(y);

/*Number 5*/ //How do you round the number 7.25, to the nearest integer (i.e., whole number)?
let z = 7.25; //Declare a variable z and assign the number 7.25 to it
console.log(z);
let a = Math.round(z); //Declare another variable a that has the value of z but rounded to the nearest integer
console.log(a);//console.log a
let highestValue; //So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
if (z > a) {
  highestValue = z;
} else {
  highestValue = a;
}
//console.log the highest value.
console.log(highestValue); // will print 7.25

/*Number 6*/
//Arrays
let myArray = []; // Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element.

console.log('I think the value of the array is an empty array'); // Write a console.log statement that explains in words what you think the value of the array is.

console.log(myArray); //console.log your array.

//Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
let myFavAnimals = ['dog', 'elephant', 'reindeer', 'rabbit'];

console.log(myFavAnimals); //Log your array.

myFavAnimals.push('baby pig'); //Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.

console.log(myFavAnimals); //Log your new array!

/*7. More strings*/

let myString = 'this is a test'; //Let's consider the following string: let myString = "this is a test"
console.log(myString); //Add the string to your file and console.log it.
let strLength = myString.length; //Find a way to get the length of myString.
console.log(strLength); //console.log the length of myString.

/* 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
8.1 First declare at least four variables and assign them different data types:
8.2 For each variable write a console.log statement that logs the value: */
let myInt = 8;
console.log('The value of my variable myInt is:' + myInt);

let myStr = 'Good Morning';
console.log('The value of my variable myStr is: ' + myStr);

let myBoo = false;
console.log('The value of my variable myBoo is:' + myBoo);

let myArr = ['Gold', 'Sapphire', 'Ruby'];
console.log('The value of my variable myArr is: ' + myArr);
/* 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
8.4 Now use typeof to log the actual type of your variables: */
console.log('I think the type of my variable myInt is an integer');
console.log(typeof myInt);
console.log('I think the type of my variable myStr is a string');
console.log(typeof myStr);
console.log('I think the type of my variable myBoo is a boolean');
console.log(typeof myBoo);
console.log('I think the type of my variable myArr is an array');
console.log(typeof myArr);
// checks the types of two variables and prints out SAME TYPE if they are the same type
function checkingTypes(firstVar, secondVar) {
    //Using "===" operator since it checks the type of the value
    if (firstVar===secondVar) {
        console.log('SAME TYPE');
        } else {
            console.log(`The ${firstVar} has the type of ${typeof firstVar}, 
            and the ${secondVar} has the type of ${typeof secondVar}.`);
        }
 }
        checkingTypes(myStr, myString); //"SAME TYPE"
        checkingTypes(myArr, myBoo); // "Different types"

/* Number 9. If x equals 7, and the only other statement is x = x % 3, 
what would be the new value of x?*/

let newX = 7;
newX = newX % 3;
console.log(newX); // 7/3 gives remainder 1, henceit will print 1

// 9.1 Add at least 3 console.log statements in which you show that you understand what % does.
console.log(10 % 4); // expected to print 2
console.log(7 % 2); // expected to print 1
console.log(20 % 5); // expected to print 0

/* Number 10*/
//10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer
let newArray = [
    5,
    true,
    'Thank You',
    ['HTML', 'CSS', 'Javascript'],
    {game: 'Team 1', netflix: 'Team 2'},
    ];
    console.log(newArray);

    /*Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this? */
let compareInfinit  = 6 / 0 === 10 / 0 ? 'YES' : 'NO';
console.log(compareInfinit);







